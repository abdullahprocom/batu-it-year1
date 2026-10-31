// Import data from data.js
import { lecturesData, assignmentsData, midtermExamData, finalExamData, videosData, allQuizQuestions } from './data.js';

// --- Global Variables and DOM Elements ---
const appContainer = document.getElementById('app-container');
const screens = document.querySelectorAll('.screen');
const homeScreen = document.getElementById('home-screen');
const selectionScreen = document.getElementById('selection-screen');
const summaryScreen = document.getElementById('summary-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const videosScreen = document.getElementById('videos-screen');

const selectionTitle = document.getElementById('selection-title');
const selectionGrid = document.getElementById('selection-grid');

const summaryTitle = document.getElementById('summary-title');
const summaryLangArBtn = document.getElementById('summary-lang-ar');
const summaryLangEnBtn = document.getElementById('summary-lang-en');
const summaryContentAr = document.getElementById('summary-content-ar');
const summaryContentEn = document.getElementById('summary-content-en');
const startQuizBtn = document.getElementById('start-quiz-btn');
const audioPlayerContainer = document.getElementById('audio-player-container');
const audioPlayer = document.getElementById('audio-player');


const quizTitle = document.getElementById('quiz-title');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const hintContainer = document.getElementById('hint-container');
const hintText = document.getElementById('hint-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const closeQuizBtn = document.querySelector('.close-quiz-btn');

const correctAnswersP = document.getElementById('correct-answers-p');
const wrongAnswersP = document.getElementById('wrong-answers-p');
const successRateP = document.getElementById('success-rate-p');
const restartQuizBtn = document.getElementById('restart-quiz-btn');
const backToHomeBtns = document.querySelectorAll('.back-to-home-btn');

const themeBtn = document.getElementById('theme-btn');
const themeOptions = document.getElementById('theme-options');

const videoModal = document.getElementById('video-modal');
const youtubePlayer = document.getElementById('youtube-player');
const closeVideoModalBtn = document.getElementById('close-video-modal');
const videosGrid = document.getElementById('videos-grid');

const customMessageModal = document.getElementById('custom-message-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');

const footerText = document.getElementById('footer-text');


let currentScreen = 'home-screen';
let currentCategoryData = null; // Holds lecturesData, assignmentsData, etc.
let currentSelectedItem = null; // Holds the specific lecture/assignment object
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = []; // Stores selected option index for each question
let quizActive = false; // To prevent unintended quiz navigation


// --- Data Mapping and Initialization ---

// Define categories for home screen navigation
const homeCategories = [
    { id: 'lectures', title: 'المحاضرات', icon: 'fa-book-open', data: lecturesData },
    { id: 'review', title: 'مراجعة شاملة', icon: 'fa-book-reader', data: allQuizQuestions, isSpecial: true, comingSoon: true }, // Placeholder for review, will use allQuizQuestions
    { id: 'assignments', title: 'الواجبات', icon: 'fa-pencil-alt', data: assignmentsData },
    { id: 'midterm', title: 'امتحان الميدتيرم', icon: 'fa-file-signature', data: [midtermExamData], isSpecial: true }, // midtermExamData is already an object, wrap it in array
    { id: 'final', title: 'الامتحان النهائي', icon: 'fa-graduation-cap', data: [finalExamData], isSpecial: true }, // finalExamData is already an object, wrap it in array
    { id: 'videos', title: 'شروحات فيديو', icon: 'fa-video', data: videosData }
];

// Available themes
const themes = {
    default: 'افتراضي (بترولي)',
    dark: 'داكن',
    light: 'فاتح',
    fire: 'ناري',
    glacial: 'ثلجي',
    rainbow: 'قوس قزح',
    forest: 'غابة'
};

// --- Helper Functions ---

// Function to switch between screens
function showScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none'; // Ensure display is none for inactive screens
    });
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        targetScreen.style.display = 'block'; // Or 'flex'/'grid' based on screen's default display
        currentScreen = screenId;
        window.scrollTo(0, 0); // Scroll to top on screen change
    }
}

// Function to display custom modal message (replaces alert/confirm)
function showCustomMessage(title, message, callback = null) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    customMessageModal.classList.remove('hidden');

    modalCloseBtn.onclick = () => {
        customMessageModal.classList.add('hidden');
        if (callback) {
            callback();
        }
    };
}




// --- Home Screen Logic ---
function renderHomeCards() {
    const homeGrid = document.querySelector('.home-grid');
    homeGrid.innerHTML = ''; // Clear existing cards

    homeCategories.forEach(category => {
        const card = document.createElement('a');
        card.href = "#"; // Prevent default navigation
        card.className = 'home-card-btn';
        card.dataset.target = category.id;

        if (category.comingSoon) {
            card.classList.add('opacity-50', 'cursor-not-allowed');
            card.innerHTML = `
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
                <p>${category.title === 'مراجعة شاملة' ? 'Comprehensive Review' : ''}</p>
                <span class="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">قريبًا</span>
            `;
            card.onclick = (e) => {
                e.preventDefault(); // Prevent default link behavior
                showCustomMessage('قريبًا', `هذا القسم (${category.title}) قيد الإنشاء حاليًا وسيكون متاحًا قريباً.`, null);
            };
        } else {
            card.innerHTML = `
                <i class="fas ${category.icon}"></i>
                <h3>${category.title}</h3>
                <p>${category.title === 'المحاضرات' ? 'Lectures & Quizzes' : ''}</p>
                ${category.id === 'midterm' ? '<p>Midterm Exam</p>' : ''}
                ${category.id === 'final' ? '<p>Final Exam</p>' : ''}
                ${category.id === 'assignments' ? '<p>Assignments</p>' : ''}
                ${category.id === 'videos' ? '<p>Video Tutorials</p>' : ''}
            `;
            card.addEventListener('click', (e) => {
                e.preventDefault();
                handleHomeCardClick(category);
            });
        }
        homeGrid.appendChild(card);
    });
}

function handleHomeCardClick(category) {
    if (category.id === 'midterm' || category.id === 'final') {
        currentCategoryData = category.data[0]; 
        currentSelectedItem = currentCategoryData; 
        summaryTitle.textContent = currentCategoryData.title; 
        renderSummaryContent(currentCategoryData); 
        setupSummaryQuizButton(currentCategoryData, category.id);
        showScreen('summary-screen'); 
    } else if (category.id === 'videos') {
        renderVideos();
        showScreen('videos-screen');
    }
    else {
        currentCategoryData = category.data;
        selectionTitle.textContent = category.title;
        renderSelectionGrid(category.data, category.id);
        showScreen('selection-screen');
    }
}

// --- Selection Screen Logic (Lectures, Assignments, etc.) ---
function renderSelectionGrid(data, categoryId) {
    selectionGrid.innerHTML = '';

    if (!data || data.length === 0) {
        selectionGrid.innerHTML = `<p class="text-text-secondary text-center text-xl mt-8">لا توجد عناصر متاحة في هذا القسم حاليًا.</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'content-item-card';
        card.innerHTML = `
            <i class="icon fas ${item.icon}"></i>
            <h3>${item.title}</h3>
            ${item.summary ? `<p>${item.summary.ar.substring(0, 100)}...</p>` : ''}
        `;
        card.addEventListener('click', () => {
            handleSelectionItemClick(item, categoryId);
        });
        selectionGrid.appendChild(card);
    });
}

function handleSelectionItemClick(item, categoryId) {
    currentSelectedItem = item;
    summaryTitle.textContent = item.title;
    renderSummaryContent(item);
    setupSummaryQuizButton(item, categoryId);
    showScreen('summary-screen');
}

// --- Summary Screen Logic ---
let currentSummaryLang = 'ar'; // Default language for summary

function renderSummaryContent(item) {
    summaryContentAr.innerHTML = (item.summary && item.summary.ar) ? item.summary.ar : '<p>لا يوجد ملخص متاح باللغة العربية.</p>';
    summaryContentEn.innerHTML = (item.summary && item.summary.en) ? item.summary.en : '<p>No summary available in English.</p>';
    summaryContentEn.classList.add('font-inter');

    if (item.audioSrc && item.audioSrc.trim() !== "" && item.audioSrc !== "placeholder") {
        audioPlayer.src = item.audioSrc;
        audioPlayerContainer.classList.remove('hidden');
    } else {
        audioPlayerContainer.classList.add('hidden');
        audioPlayer.pause(); 
        audioPlayer.removeAttribute('src');
    }

    if (currentSummaryLang === 'ar') {
        summaryContentAr.classList.remove('hidden');
        summaryContentEn.classList.add('hidden');
        summaryLangArBtn.classList.add('active');
        summaryLangEnBtn.classList.remove('active');
    } else {
        summaryContentEn.classList.remove('hidden');
        summaryContentAr.classList.add('hidden');
        summaryLangEnBtn.classList.add('active');
        summaryLangArBtn.classList.remove('active');
    }
}

function setupSummaryQuizButton(item, categoryId) {
    startQuizBtn.style.display = 'none'; 

    let quizToLoad = null;
    
    if ((categoryId === 'midterm' || categoryId === 'final') && item.quiz && item.quiz.length > 0) {
        quizToLoad = item.quiz;
    } else if (item.quiz && item.quiz.length > 0) {
        quizToLoad = item.quiz;
    }

    if (quizToLoad && quizToLoad.length > 0) {
        startQuizBtn.style.display = 'block';
        startQuizBtn.onclick = () => startQuiz(quizToLoad, item.title);
    } else if (!item.quiz || item.quiz.length === 0) {
        startQuizBtn.style.display = 'none';
    }
}


// Event listeners for language toggle
summaryLangArBtn.addEventListener('click', () => {
    currentSummaryLang = 'ar';
    renderSummaryContent(currentSelectedItem);
});

summaryLangEnBtn.addEventListener('click', () => {
    currentSummaryLang = 'en';
    renderSummaryContent(currentSelectedItem);
});


// --- Quiz Screen Logic ---
function startQuiz(quizQuestions, title) {
    currentQuiz = shuffleArray([...quizQuestions]);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.length).fill(null); 
    quizTitle.textContent = `${title} - الاختبار`;
    quizActive = true; 
    renderQuestion();
    showScreen('quiz-screen');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function renderQuestion() {
    hintContainer.classList.add('hidden');
    hintText.textContent = ''; 

    if (!currentQuiz || currentQuiz.length === 0) return;

    const question = currentQuiz[currentQuestionIndex];
    questionText.textContent = question.question;

    questionCounter.textContent = `السؤال ${currentQuestionIndex + 1} من ${currentQuiz.length}`;

    const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.dataset.index = index; 
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    if (userAnswers[currentQuestionIndex] !== null) {
        const selectedIndex = userAnswers[currentQuestionIndex];
        const selectedBtn = optionsContainer.querySelector(`button[data-index="${selectedIndex}"]`);
        if (selectedBtn) {
            Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
            if (selectedIndex === question.answer) {
                selectedBtn.classList.add('correct');
            } else {
                selectedBtn.classList.add('wrong');
                const correctBtn = optionsContainer.querySelector(`button[data-index="${question.answer}"]`);
                if (correctBtn) correctBtn.classList.add('correct');
            }
            hintText.textContent = question.hint;
            hintContainer.classList.remove('hidden');
        }
    }

    updateNavigationButtons();
}

function selectOption(selectedIndex) {
    const question = currentQuiz[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex; 

    Array.from(optionsContainer.children).forEach(button => button.disabled = true);

    const selectedBtn = optionsContainer.querySelector(`button[data-index="${selectedIndex}"]`);
    const correctBtn = optionsContainer.querySelector(`button[data-index="${question.answer}"]`);

    if (selectedIndex === question.answer) {
        selectedBtn.classList.add('correct');
    } else {
        selectedBtn.classList.add('wrong');
        if (correctBtn) {
            correctBtn.classList.add('correct');
        }
    }

    hintText.textContent = question.hint;
    hintContainer.classList.remove('hidden');

    setTimeout(() => {
        if (currentQuestionIndex < currentQuiz.length - 1) {
             // Optional: auto-advance
             // nextBtn.click();
        } else {
            // It's the last question
        }
    }, 1500);
}

function updateNavigationButtons() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === currentQuiz.length - 1 ? 'إنهاء الاختبار 🏁' : 'التالي ⬅';
}

// Event Listeners for Quiz Navigation
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        if (userAnswers[currentQuestionIndex] === null) {
            showCustomMessage('تنبيه', 'الرجاء اختيار إجابة قبل الانتقال للسؤال التالي.', null);
            return;
        }
        currentQuestionIndex++;
        renderQuestion();
    } else {
        if (userAnswers[currentQuestionIndex] !== null) {
            showResults();
        } else {
            showCustomMessage('تنبيه', 'الرجاء اختيار إجابة للسؤال الأخير قبل إنهاء الاختبار.', null);
        }
    }
});

closeQuizBtn.addEventListener('click', () => {
    showCustomMessage(
        'الخروج من الاختبار',
        'هل أنت متأكد أنك تريد الخروج؟ لن يتم حفظ تقدمك.',
        () => {
            quizActive = false;
            // Determine where to go back
            if (currentSelectedItem && (currentSelectedItem.id === 'midterm-exam' || currentSelectedItem.id === 'final-exam')) {
                showScreen('home-screen');
            } else if (currentSelectedItem) {
                showScreen('summary-screen');
            } else {
                 showScreen('selection-screen');
            }
            audioPlayer.pause();
        }
    );
});


// --- Results Screen Logic ---
function showResults() {
    let correctCount = 0;
    let wrongCount = 0;

    userAnswers.forEach((answer, index) => {
        if (answer !== null && answer === currentQuiz[index].answer) {
            correctCount++;
        } else if (answer !== null) {
            wrongCount++;
        }
    });

    const totalAnswered = correctCount + wrongCount;
    const successRate = totalAnswered > 0 ? (correctCount / currentQuiz.length) * 100 : 0;

    correctAnswersP.innerHTML = `<i class="fas fa-check-circle text-success-color ml-2"></i>الإجابات الصحيحة: <span class="text-success-color font-bold">${correctCount}</span>`;
    wrongAnswersP.innerHTML = `<i class="fas fa-times-circle text-danger-color ml-2"></i>الإجابات الخاطئة: <span class="text-danger-color font-bold">${wrongCount}</span>`;
    successRateP.textContent = `نسبة النجاح: ${successRate.toFixed(2)}%`;

    showScreen('results-screen');
}

restartQuizBtn.addEventListener('click', () => {
    if (currentQuiz) {
        startQuiz(currentQuiz, quizTitle.textContent.replace(' - الاختبار', ''));
    }
});

// --- Video Player Logic ---
function renderVideos() {
    videosGrid.innerHTML = '';
    if (!videosData || videosData.length === 0) {
        videosGrid.innerHTML = `<p class="text-text-secondary text-center text-xl mt-8">لا توجد فيديوهات متاحة حاليًا.</p>`;
        return;
    }

    videosData.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail-placeholder">
                <img src="https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg" alt="${video.title} Thumbnail" onerror="this.onerror=null;this.src='https://placehold.co/320x180/555/fff?text=No+Thumbnail';">
            </div>
            <h3>${video.title}</h3>
            <button class="play-btn" data-youtube-id="${video.youtubeId}">
                <i class="fas fa-play-circle ml-2"></i> تشغيل
            </button>
        `;
        videosGrid.appendChild(videoCard);
    });

    document.querySelectorAll('.play-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const youtubeId = e.currentTarget.dataset.youtubeId;
            openVideoModal(youtubeId);
        });
    });
}

function openVideoModal(youtubeId) {
    youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
    videoModal.classList.remove('hidden');
}

closeVideoModalBtn.addEventListener('click', () => {
    youtubePlayer.src = ''; 
    videoModal.classList.add('hidden');
});

// --- Theme Switching Logic ---
function renderThemeOptions() {
    themeOptions.innerHTML = '';
    for (const themeId in themes) {
        const themeOption = document.createElement('button');
        themeOption.className = 'theme-option w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110';
        themeOption.dataset.theme = themeId;
        themeOption.title = themes[themeId]; 
        themeOptions.appendChild(themeOption);
        
        themeOption.addEventListener('click', () => {
            setTheme(themeId);
            themeOptions.classList.add('hidden');
        });
    }
}

function setTheme(themeId) {
    document.body.dataset.theme = themeId;
    localStorage.setItem('selectedTheme', themeId);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    setTheme(savedTheme);
}

themeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeOptions.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!themeOptions.contains(e.target) && e.target !== themeBtn) {
        themeOptions.classList.add('hidden');
    }
});

// --- Footer Animation ---
function animateFooterName(name) {
    let animatedHtml = '';
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (char === ' ') {
            animatedHtml += ' ';
        } else {
            animatedHtml += `<span class="footer-name-letter" style="animation-delay: ${0.05 * i}s;">${char}</span>`;
        }
    }
    footerText.innerHTML = `  ${animatedHtml}`;
}


// --- Event Listeners for Navigation ---
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (currentScreen === 'selection-screen' || currentScreen === 'videos-screen') {
            showScreen('home-screen');
        } else if (currentScreen === 'summary-screen') {
            // If it was a direct exam, go home, otherwise go to selection
             if (currentSelectedItem && (currentSelectedItem.id === 'midterm-exam' || currentSelectedItem.id === 'final-exam')) {
                showScreen('home-screen');
            } else {
                showScreen('selection-screen');
            }
        }
    });
});

backToHomeBtns.forEach(button => {
    button.addEventListener('click', () => {
        showScreen('home-screen');
        quizActive = false;
        audioPlayer.pause();
    });
});

// --- Initial Setup Callbacks ---
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderHomeCards();
    renderThemeOptions();
    animateFooterName(" ❤ ila demahom halludbA :YB depoleveD");
    showScreen('home-screen');
});
