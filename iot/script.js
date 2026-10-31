document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Element Selectors ---
    const loginOverlay = document.getElementById('login-overlay');
    const loginBtn = document.getElementById('login-btn');
    const academicIdInput = document.getElementById('academic-id-input');
    const welcomeMessage = document.getElementById('welcome-message');
    const visitorCounterEl = document.getElementById('visitor-counter');
    const mainContent = document.getElementById('main-content');
    
    const screens = {
        home: document.getElementById('home-screen'),
        selection: document.getElementById('selection-screen'),
        summary: document.getElementById('summary-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen'),
    };
    
    // Theme Switcher
    const themeBtn = document.getElementById('theme-btn');
    const themeOptionsContainer = document.getElementById('theme-options');
    const themes = [
        { name: 'default', color: '#004445', title: 'بترولي' },
        { name: 'dark', color: '#1e1e1e', title: 'داكن' },
        { name: 'fire', color: '#FF4500', title: 'ناري' },
        { name: 'ocean', color: '#1E90FF', title: 'محيط' },
    ];

    // Other element selectors...
    const selectionTitle = document.getElementById('selection-title');
    const selectionGrid = document.getElementById('selection-grid');
    const summaryTitle = document.getElementById('summary-title');
    const summaryContentAr = document.getElementById('summary-content-ar');
    const summaryContentEn = document.getElementById('summary-content-en');
    const summaryLangArBtn = document.getElementById('summary-lang-ar');
    const summaryLangEnBtn = document.getElementById('summary-lang-en');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    
    const quizTitleEl = document.getElementById('quiz-title'); // Changed variable name to avoid conflict
    const questionCounter = document.getElementById('question-counter');
    const progressBar = document.getElementById('progress-bar');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const hintContainer = document.getElementById('hint-container');
    const hintText = document.getElementById('hint-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const audioPlayerContainer = document.getElementById('audio-player-container');
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    
    const correctAnswersP = document.getElementById('correct-answers-p');
    const wrongAnswersP = document.getElementById('wrong-answers-p');
    const successRateP = document.getElementById('success-rate-p');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    let state = {
        currentScreen: 'login',
        activeData: null, // Holds the current lecture/tutorial data
        activeQuiz: [],   // Holds the current quiz questions
        currentQuestionIndex: 0,
        userAnswers: [],
        quizType: '',     // 'lectures', 'tutorials', 'midterm', 'final'
        history: [],
    };

    // --- Core Functions ---
    function showScreen(screenName) {
        // Prevent adding the same screen multiple times if navigation is quick
        if (state.history.length === 0 || state.history[state.history.length - 1] !== state.currentScreen) {
             state.history.push(state.currentScreen);
        }
        state.currentScreen = screenName;
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        if (screens[screenName]) {
            screens[screenName].classList.add('active');
        }
        window.scrollTo(0, 0);
    }

    function goBack() {
        if (state.history.length > 0) {
            const lastScreen = state.history.pop();
            state.currentScreen = lastScreen;
            Object.values(screens).forEach(screen => screen.classList.remove('active'));
            if (screens[lastScreen]) {
                screens[lastScreen].classList.add('active');
            }
        } else {
            // Fallback to home if history is empty (e.g., direct access)
            showScreen('home');
        }
        window.scrollTo(0, 0);
    }
    
    // Theme functions (kept as is, assumed to be working)
    function applyTheme(themeName) {
        document.body.dataset.theme = themeName;
        localStorage.setItem('iot_theme', themeName);
        // Update theme option active state
        document.querySelectorAll('.theme-option').forEach(option => {
            if (option.dataset.theme === themeName) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    function populateThemes() {
        themeOptionsContainer.innerHTML = ''; // Clear existing options
        themes.forEach(theme => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'theme-option';
            optionDiv.dataset.theme = theme.name;
            optionDiv.title = theme.title;
            optionDiv.style.backgroundColor = theme.color;
            optionDiv.addEventListener('click', () => applyTheme(theme.name));
            themeOptionsContainer.appendChild(optionDiv);
        });
    }

    // --- Login & Visitor Count ---
    function handleLogin() {
        const studentId = academicIdInput.value.trim();
        if (studentDatabase[studentId]) {
            const studentName = studentDatabase[studentId];
            welcomeMessage.textContent = `مرحباً، ${studentName}`;
            loginOverlay.classList.remove('active');
            mainContent.style.display = 'flex';
            mainContent.classList.add('active');
            showScreen('home');
        } else {
            // Using a custom modal/message box instead of alert()
            displayMessageModal('الرقم الأكاديمي غير صحيح. يرجى المحاولة مرة أخرى.');
        }
        updateVisitorCount();
    }

    function updateVisitorCount() {
        let count = parseInt(localStorage.getItem('iotVisitorCount') || '0');
        count++;
        localStorage.setItem('iotVisitorCount', count);
        visitorCounterEl.textContent = `عدد الزيارات: ${count}`;
    }

    // Function to display a custom message modal (replaces alert)
    function displayMessageModal(message) {
        let modal = document.getElementById('custom-message-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'custom-message-modal';
            modal.style.cssText = `
                position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex;
                align-items: center; justify-content: center; z-index: 9999;
                opacity: 0; visibility: hidden; transition: opacity 0.3s;
            `;
            modal.innerHTML = `
                <div style="background: var(--bg-secondary); padding: 25px; border-radius: 12px;
                            box-shadow: 0 5px 15px rgba(0,0,0,0.5); text-align: center; max-width: 400px;
                            color: var(--text-primary); border: 1px solid var(--border-color);">
                    <p id="modal-message" style="margin-bottom: 20px; font-size: 1.1em;"></p>
                    <button id="modal-ok-btn" class="btn">حسناً</button>
                </div>
            `;
            document.body.appendChild(modal);
            document.getElementById('modal-ok-btn').addEventListener('click', () => {
                modal.style.opacity = '0';
                modal.style.visibility = 'hidden';
            });
        }
        document.getElementById('modal-message').textContent = message;
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }


    // --- Content Population & Navigation ---
    function populateSelectionScreen(type) {
        state.quizType = type;
        const data = type === 'lectures' ? lecturesData : tutorialsData;
        selectionTitle.textContent = type === 'lectures' ? 'المحاضرات' : 'الدروس التعليمية';
        selectionGrid.innerHTML = '';
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'lecture-card';
            card.dataset.id = item.id;
            card.innerHTML = `<i class="fas ${item.icon} icon"></i><h3>${item.title}</h3>`;
            card.addEventListener('click', () => displaySummary(item));
            selectionGrid.appendChild(card);
        });
        showScreen('selection');
    }

    function displaySummary(itemData) {
        state.activeData = itemData;
        summaryTitle.textContent = itemData.title;
        summaryContentAr.innerHTML = itemData.summary.ar;
        summaryContentEn.innerHTML = itemData.summary.en;

        // Reset language display
        summaryLangArBtn.classList.add('active');
        summaryLangEnBtn.classList.remove('active');
        summaryContentAr.style.display = 'block';
        summaryContentEn.style.display = 'none';

        if (itemData.audioSrc) {
            audioSource.src = itemData.audioSrc;
            audioPlayer.load();
            audioPlayerContainer.style.display = 'block';
        } else {
            audioPlayerContainer.style.display = 'none';
        }
        
        // Show start quiz button only if quiz data exists
        startQuizBtn.style.display = (itemData.quiz && itemData.quiz.length > 0) ? 'block' : 'none';
        
        showScreen('summary');
    }

    // --- Quiz & Exam Logic ---
    // Modified startQuiz to accept quizData and quizTitle directly
    function startQuiz(quizData, quizTitle) {
        if (!quizData || quizData.length === 0) {
            displayMessageModal("لا توجد أسئلة لهذا الاختبار حاليًا.");
            return;
        }
        // Shuffle questions and reset answers
        state.activeQuiz = quizData.map(q => ({...q})).sort(() => Math.random() - 0.5);
        state.userAnswers = new Array(state.activeQuiz.length).fill(null);
        state.currentQuestionIndex = 0;
        quizTitleEl.textContent = `اختبار: ${quizTitle}`; // Set quiz title
        showScreen('quiz');
        displayQuestion();
    }
    
    function displayQuestion() {
        hintContainer.style.display = 'none';
        const question = state.activeQuiz[state.currentQuestionIndex];
        
        questionCounter.innerText = `السؤال ${state.currentQuestionIndex + 1} من ${state.activeQuiz.length}`;
        questionText.innerText = question.question;

        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.innerText = option;
            button.dataset.index = index;
            button.addEventListener('click', handleOptionClick);
            optionsContainer.appendChild(button);
        });
        
        updateNavButtons();
        updateProgressBar();
        reviewPreviousAnswer();
    }

    function handleOptionClick(e) {
        // Prevent changing answer if already selected
        if (state.userAnswers[state.currentQuestionIndex] !== null) return;

        const selectedOptionIndex = parseInt(e.target.dataset.index);
        state.userAnswers[state.currentQuestionIndex] = selectedOptionIndex;
        
        // Disable all options after selection
        document.querySelectorAll('.option-btn').forEach(btn => { btn.disabled = true; });

        const question = state.activeQuiz[state.currentQuestionIndex];
        const correctOptionIndex = question.answer;

        if (selectedOptionIndex === correctOptionIndex) {
            e.target.classList.add('correct');
        } else {
            e.target.classList.add('wrong');
            // Highlight the correct answer
            document.querySelector(`.option-btn[data-index='${correctOptionIndex}']`).classList.add('correct');
        }

        hintText.innerHTML = `💡 تلميح: ${question.hint}`;
        hintContainer.style.display = 'block';
        updateNavButtons(); // Update buttons after answer
    }

    function reviewPreviousAnswer() {
        const answer = state.userAnswers[state.currentQuestionIndex];
        if (answer === null) return; // No answer yet

        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => { btn.disabled = true; }); // Disable all options

        const question = state.activeQuiz[state.currentQuestionIndex];
        const correctOptionIndex = question.answer;
        
        if (answer === correctOptionIndex) {
            options[answer].classList.add('correct');
        } else {
            options[answer].classList.add('wrong');
            options[correctOptionIndex].classList.add('correct');
        }
        hintText.innerHTML = `💡 تلميح: ${question.hint}`;
        hintContainer.style.display = 'block';
    }

    function updateNavButtons() {
        prevBtn.disabled = state.currentQuestionIndex === 0;
        // nextBtn is only enabled if an answer has been selected for the current question
        nextBtn.disabled = state.userAnswers[state.currentQuestionIndex] === null;
        nextBtn.innerText = (state.currentQuestionIndex === state.activeQuiz.length - 1) ? 'عرض النتيجة' : 'التالي';
    }

    function updateProgressBar() {
        const progress = ((state.currentQuestionIndex + 1) / state.activeQuiz.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // --- Results Screen ---
    function showResults() {
        let correctCount = state.userAnswers.filter((answer, index) => answer === state.activeQuiz[index].answer).length;
        const wrongCount = state.activeQuiz.length - correctCount;
        const successRate = ((correctCount / state.activeQuiz.length) * 100).toFixed(1);

        correctAnswersP.innerHTML = `✅ الإجابات الصحيحة: ${correctCount}`;
        wrongAnswersP.innerHTML = `❌ الإجابات الخاطئة: ${wrongCount}`;
        successRateP.innerHTML = `📈 نسبة النجاح: ${successRate}%`;
        
        showScreen('results');
    }

    // --- Event Listeners ---
    loginBtn.addEventListener('click', handleLogin);

    // Toggle theme options visibility
    themeBtn.addEventListener('click', () => {
        themeOptionsContainer.classList.toggle('show');
    });
    // Hide theme options if clicking outside
    document.addEventListener('click', (event) => {
        if (!themeBtn.contains(event.target) && !themeOptionsContainer.contains(event.target)) {
            themeOptionsContainer.classList.remove('show');
        }
    });

    // Navigation from Home Screen
    document.querySelectorAll('.home-card-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.dataset.target;
            if (target === 'lectures-screen') {
                populateSelectionScreen('lectures');
            } else if (target === 'tutorials-screen') {
                populateSelectionScreen('tutorials');
            } else if (target === 'midterm-screen') {
                // Assuming midtermRevisionData and finalExamData are defined in data.js with quiz property
                if (midtermRevisionData && midtermRevisionData.quiz) {
                    state.quizType = 'midterm';
                    displaySummary(midtermRevisionData);
                } else {
                    displayMessageModal("لا توجد مراجعة للميدتيرم حاليًا.");
                }
            } else if (target === 'final-exam-screen') {
                if (finalExamData && finalExamData.quiz) {
                    state.quizType = 'final';
                    // Corrected call: pass quiz data and title directly
                    startQuiz(finalExamData.quiz, finalExamData.title);
                } else {
                    displayMessageModal("لا يوجد امتحان شامل حاليًا.");
                }
            } else if (btn.id === 'home-videos-btn') {
                displayMessageModal("لا توجد شروحات فيديو متاحة حاليًا.");
            } else if (btn.id === 'home-contact-btn') {
                displayMessageModal("يمكنك التواصل معنا عبر البريد الإلكتروني: example@email.com"); // Placeholder
            }
        });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => btn.addEventListener('click', goBack));
    document.querySelectorAll('.back-to-home-btn').forEach(btn => btn.addEventListener('click', () => showScreen('home')));
    
    // Start Quiz button from Summary Screen
    startQuizBtn.addEventListener('click', () => {
        if(state.activeData && state.activeData.quiz) {
            // Corrected call: pass quiz data and title directly
            startQuiz(state.activeData.quiz, state.activeData.title);
        }
    });

    // Quiz navigation buttons
    nextBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex < state.activeQuiz.length - 1) {
            state.currentQuestionIndex++;
            displayQuestion();
        } else {
            showResults();
        }
    });
    prevBtn.addEventListener('click', () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            displayQuestion();
        }
    });

    // Restart Quiz button
    restartQuizBtn.addEventListener('click', () => {
        // Find the quiz data based on quizType
        let quizToRestart;
        if (state.quizType === 'midterm' && midtermRevisionData) {
            quizToRestart = midtermRevisionData;
        } else if (state.quizType === 'final' && finalExamData) {
            quizToRestart = finalExamData;
        } else if (state.quizType === 'lectures' || state.quizType === 'tutorials') {
            // If it's a lecture/tutorial quiz, we need the activeData (which stores the original item)
            quizToRestart = state.activeData;
        }

        if (quizToRestart && quizToRestart.quiz) {
            startQuiz(quizToRestart.quiz, quizToRestart.title);
        } else {
            displayMessageModal("تعذر إعادة تشغيل الاختبار. البيانات غير متاحة.");
            showScreen('home'); // Go back to home if restart fails
        }
    });

    // Close Quiz button
    document.querySelectorAll('.close-quiz-btn').forEach(btn => btn.addEventListener('click', () => {
        showScreen('home'); // Or go back to the selection screen
    }));

    // Language toggle for summary
    summaryLangArBtn.addEventListener('click', () => {
        summaryLangArBtn.classList.add('active');
        summaryLangEnBtn.classList.remove('active');
        summaryContentAr.style.display = 'block';
        summaryContentEn.style.display = 'none';
    });
    summaryLangEnBtn.addEventListener('click', () => {
        summaryLangEnBtn.classList.add('active');
        summaryLangArBtn.classList.remove('active');
        summaryContentAr.style.display = 'none';
        summaryContentEn.style.display = 'block';
    });


    // --- Initial Load ---
    updateVisitorCount();
    populateThemes();
    const savedTheme = localStorage.getItem('iot_theme') || 'default';
    applyTheme(savedTheme);
    showScreen('login'); // Start at login screen
});

