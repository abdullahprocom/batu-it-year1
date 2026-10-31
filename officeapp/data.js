// Function to shuffle an array (Fisher-Yates algorithm)
console.log('data.js loaded successfully.'); // Diagnostic message
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

// Global list to store all unique questions across all topics
const uniqueQuestions = [];

// Helper to add unique questions and ensure random option order
function addUniqueQuestion(questionObj) {
    if (!uniqueQuestions.some(q => q.question === questionObj.question)) {
        const shuffledOptions = shuffleArray([...questionObj.options]);
        const originalAnswerText = questionObj.options[questionObj.answer];
        const newAnswerIndex = shuffledOptions.indexOf(originalAnswerText);

        uniqueQuestions.push({
            ...questionObj,
            options: shuffledOptions,
            answer: newAnswerIndex
        });
    }
}

// --- Microsoft Word Questions ---
[
    {
        id: 'word-q1',
        question: "What is Microsoft Word primarily used for?",
        options: ["Image Editing", "Creating text documents", "Web Browsing", "Database Management"],
        answer: 1, // Index of "Creating text documents"
        hint: "برنامج وورد هو محرر نصوص في الأساس، وظيفته الأساسية هي إنشاء المستندات النصية وتحريرها."
    },
    {
        id: 'word-q2',
        question: "Which of the following is the default file extension for Microsoft Word documents?",
        options: [".xlsx", ".pptx", ".docx", ".pdf"],
        answer: 2, // Index of ".docx"
        hint: "امتداد .docx هو الشكل القياسي لحفظ ملفات Word لضمان التوافق مع الإصدارات الحديثة."
    },
    {
        id: 'word-q3',
        question: "What is the shortcut key for saving a document in Microsoft Word?",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + S"],
        answer: 3, // Index of "Ctrl + S"
        hint: "يُستخدم هذا الاختصار لحفظ التغييرات بسرعة دون استخدام القوائم."
    },
    {
        id: 'word-q4',
        question: "Which feature in Word displays hidden symbols like spaces and paragraph marks?",
        options: ["Spell Check", "Print Layout", "Show/Hide (¶) button", "Tell Me bar"],
        answer: 2, // Index of "Show/Hide (¶) button"
        hint: "هذا الزر يُظهر الرموز غير القابلة للطباعة التي تساعد في تنسيق المستند."
    },
    {
        id: 'word-q5',
        question: "What is the purpose of the 'Ribbon' in MS Word?",
        options: ["To display the document content", "To store recently opened files", "To contain tabs and groups of commands", "To manage page margins only"],
        answer: 2, // Index of "To contain tabs and groups of commands"
        hint: "الشريط (Ribbon) هو الجزء العلوي من واجهة Office الذي ينظم الميزات في فئات لتسهيل الوصول إليها."
    },
    {
        id: 'word-q6',
        question: "Which Word feature is a pre-designed document layout?",
        options: ["Template", "Document Pane", "Quick Access Toolbar", "Header and Footer"],
        answer: 0, // Index of "Template"
        hint: "القالب (Template) يوفر الوقت عبر توفير هياكل جاهزة مثل السير الذاتية أو التقارير."
    },
    {
        id: 'word-q7',
        question: "What does Ctrl + Z do in Microsoft Word?",
        options: ["Save the document", "Print the document", "Undo the last action", "Redo the last action"],
        answer: 2, // Index of "Undo the last action"
        hint: "يُستخدم هذا الاختصار للتراجع عن آخر إجراء تم تنفيذه."
    },
    {
        id: 'word-q8',
        question: "What is the default page orientation in Word?",
        options: ["Landscape", "Portrait", "Square", "Custom"],
        answer: 1, // Index of "Portrait"
        hint: "الاتجاه الرأسي (Portrait) هو الإعداد الافتراضي لمعظم المستندات النصية."
    },
    {
        id: 'word-q9',
        question: "Which tab typically contains the Font and Paragraph groups in Word?",
        options: ["Insert", "Review", "Home", "View"],
        answer: 2, // Index of "Home"
        hint: "تبويب Home يحتوي على أدوات التنسيق الأساسية مثل الخطوط والمحاذاة."
    },
    {
        id: 'word-q10',
        question: "Which part of the Word interface is the main area where you type and edit text?",
        options: ["Quick Access Toolbar", "Status Bar", "Document Pane", "Ribbon"],
        answer: 2, // Index of "Document Pane"
        hint: "تمثل منطقة المستند (Document Pane) المساحة الأساسية للعمل في البرنامج."
    },
    {
        id: 'word-q11',
        question: "The 'Tell Me' bar in Word is used for what purpose?",
        options: ["To adjust page margins", "To search for commands and features", "To preview print layout", "To insert hyperlinks"],
        answer: 1, // Index of "To search for commands and features"
        hint: "أداة 'Tell Me' تساعدك على العثور على الوظائف بسرعة عبر البحث."
    },
    {
        id: 'word-q12',
        question: "Which shortcut key is used to make text bold in Word?",
        options: ["Ctrl + I", "Ctrl + U", "Ctrl + B", "Ctrl + E"],
        answer: 2, // Index of "Ctrl + B"
        hint: "يُستخدم هذا الاختصار لتطبيق التنسيق العريض على النص المحدد."
    },
    {
        id: 'word-q13',
        question: "Can Microsoft Word documents be saved in .pdf format?",
        options: ["Yes, always", "No, never", "Only with a special plugin", "Only in older versions"],
        answer: 0, // Index of "Yes, always"
        hint: "يدعم Word حفظ الملفات بصيغة PDF مباشرة من خلال خيار 'Save As'."
    },
    {
        id: 'word-q14',
        question: "The Quick Access Toolbar in Word typically includes which commands by default?",
        options: ["Bold, Italic, Underline", "Save, Undo, Redo", "Copy, Paste, Cut", "Page Break, Symbol, Equation"],
        answer: 1, // Index of "Save, Undo, Redo"
        hint: "يحتوي الشريط على الأوامر الأكثر استخدامًا بشكل افتراضي، مثل الحفظ والتراجع والإعادة."
    },
    {
        id: 'word-q15',
        question: "To insert a page break in Word, which shortcut key combination is used?",
        options: ["Ctrl + Shift + Enter", "Ctrl + Alt + Enter", "Ctrl + Enter", "Alt + Enter"],
        answer: 2, // Index of "Ctrl + Enter"
        hint: "يُستخدم هذا الاختصار لإنهاء الصفحة الحالية والبدء في صفحة جديدة."
    },
    {
        id: 'word-q16',
        question: "Which Word feature helps locate and change specific text throughout a document?",
        options: ["Spell Check", "AutoCorrect", "Find and Replace", "Grammar Check"],
        answer: 2, // Index of "Find and Replace"
        hint: "تُستخدم هذه الوظيفة للبحث عن نص معين واستبداله بآخر بسرعة."
    },
    {
        id: 'word-q17',
        question: "What is the function of the Ruler in Word?",
        options: ["To change themes", "To adjust zoom level", "To adjust margins and indentations", "To insert images"],
        answer: 2, // Index of "To adjust margins and indentations"
        hint: "تساعد المسطرة في تنظيم تنسيق الصفحة بدقة، بما في ذلك الهوامش والمسافات البادئة."
    },
    {
        id: 'word-q18',
        question: "Which view in Word displays how the document will look when printed?",
        options: ["Read Mode", "Web Layout", "Print Layout", "Draft View"],
        answer: 2, // Index of "Print Layout"
        hint: "وضع 'Print Layout' هو الذي يظهر شكل المستند عند الطباعة."
    },
    {
        id: 'word-q19',
        question: "Microsoft Word allows you to insert tables, images, and charts into a document. True or False?",
        options: ["True", "False"],
        answer: 0, // Index of "True"
        hint: "يدعم Word إدراج عناصر متعددة مثل الجداول والصور والمخططات لتعزيز المستندات."
    },
    {
        id: 'word-q20',
        question: "Is the Quick Access Toolbar fixed and cannot be customized in Word?",
        options: ["True", "False"],
        answer: 1, // Index of "False"
        hint: "يمكن تخصيص شريط الأدوات السريع بإضافة أو إزالة الأوامر حسب الحاجة."
    },
    // More Word questions from Answered Questions Tutorial, Microsoft_Office_Questions, مراجعة مترجمة MS, MS Office Practical Exam, Assignment 1 MS for Abdullah, Assignment 1 MS, a1
    {
        id: 'word-q21',
        question: "Press __ to open the help window in MS Word document.",
        options: ["F1", "F2", "F9", "F11"],
        answer: 0, // F1
        hint: "مفتاح F1 هو الاختصار العالمي لفتح المساعدة في معظم البرامج."
    },
    {
        id: 'word-q22',
        question: "Select all the text in MS Word document by:",
        options: ["CTRL+S", "CTRL+A", "CTRL+1", "CTRL+V"],
        answer: 1, // CTRL+A
        hint: "يُستخدم Ctrl+A لتحديد كل المحتوى في المستند."
    },
    {
        id: 'word-q23',
        question: "Which of these is NOT a part of a MS Word document interface?",
        options: ["Quick access toolbar", "start menu button", "home panel", "view options"],
        answer: 1, // start menu button
        hint: "زر قائمة البدء (Start menu button) هو جزء من نظام التشغيل وليس من واجهة Word."
    },
    {
        id: 'word-q24',
        question: "The name of a Word document displays in the...",
        options: ["Ribbon", "title bar", "status bar", "home tab"],
        answer: 1, // title bar
        hint: "شريط العنوان (Title bar) يعرض اسم المستند واسم البرنامج."
    },
    {
        id: 'word-q25',
        question: "Which file starts with MS Word?",
        options: ["Winword.exe", "word.exe", "MS word.exe", "word365.exe"],
        answer: 0, // Winword.exe
        hint: "الاسم التنفيذي لبرنامج Word هو Winword.exe."
    },
    {
        id: 'word-q26',
        question: "CTRL+N is used for:",
        options: ["Save the document", "Open the document", "Create new document", "Close the document"],
        answer: 2, // Create new document
        hint: "Ctrl+N يُستخدم لفتح مستند جديد فارغ."
    },
    {
        id: 'word-q27',
        question: "We can apply styles in which tab?",
        options: ["Home", "Insert", "Page Layout", "References"],
        answer: 0, // Home
        hint: "تبويب Home يحتوي على مجموعة 'Styles' لتطبيق الأنماط."
    },
    {
        id: 'word-q28',
        question: "Which is NOT a font style in Word?",
        options: ["Bold", "superscript", "italic", "regular"],
        answer: 1, // superscript
        hint: "Superscript هو تأثير خط (خط علوي) وليس نمط خط أساسي مثل Bold أو Italic."
    },
    {
        id: 'word-q29',
        question: "Which function key is used to spell check in MS Word docs?",
        options: ["F5", "F6", "F7", "F8"],
        answer: 2, // F7
        hint: "مفتاح F7 هو الاختصار لتدقيق الإملاء والنحو."
    },
    {
        id: 'word-q30',
        question: "Which shortcut key is used for align center in MS Word?",
        options: ["CTRL+A", "CTRL+E", "CTRL+B", "CTRL+D"],
        answer: 1, // CTRL+E
        hint: "Ctrl+E يُستخدم لمحاذاة النص في المنتصف."
    },
    {
        id: 'word-q31',
        question: "In Microsoft Word, each row is identified by a letter. (True/False)",
        options: ["True", "False"],
        answer: 1, // False (rows are by number, columns by letter)
        hint: "في Word، الصفوف تُعرف بالأرقام، والأعمدة بالحروف (في الجداول)."
    },
    {
        id: 'word-q32',
        question: "Nonprinting characters are hidden and can create and edit your document. (True/False)",
        options: ["True", "False"],
        answer: 0, // True (they help in editing but are hidden on print)
        hint: "الرموز غير القابلة للطباعة لا تظهر في الطباعة ولكنها مفيدة للتنسيق والتحرير."
    },
    {
        id: 'word-q33',
        question: "Use Tell Me bar to see the number of words and pages in your document. (True/False)",
        options: ["True", "False"],
        answer: 1, // False (Status Bar does this)
        hint: "شريط الحالة (Status Bar) هو الذي يعرض عدد الكلمات والصفحات، وليس شريط Tell Me."
    },
    {
        id: 'word-q34',
        question: "The default margin settings for top, bottom, left, and right margins in Word are:",
        options: ["1 inch", "0.5 inch", "1.25 inch", "2 cm"],
        answer: 0, // 1 inch
        hint: "الهوامش الافتراضية في Word هي 1 بوصة من جميع الجوانب."
    },
    {
        id: 'word-q35',
        question: "What is the purpose of Header and Footer sections in Word?",
        options: ["To add images only", "To add repeating information like page numbers, titles, or dates", "To change page orientation", "To apply document themes"],
        answer: 1,
        hint: "تُستخدم الرؤوس والتذييلات لإضافة معلومات متكررة في أعلى وأسفل كل صفحة."
    },
    {
        id: 'word-q36',
        question: "Which of the following describes the 'Page Layout' section in Word?",
        options: ["Manages text formatting", "Manages margins, orientation, and page setup options", "Manages spell check", "Manages file saving"],
        answer: 1,
        hint: "يتعلق قسم 'Page Layout' بإعدادات الصفحة مثل الهوامش واتجاه الورقة."
    },
    {
        id: 'word-q37',
        question: "Which shortcut copies selected text or object?",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + A"],
        answer: 1, // Ctrl + C
        hint: "Ctrl+C هو الاختصار لنسخ النص أو الكائنات."
    },
    {
        id: 'word-q38',
        question: "Which shortcut pastes copied or cut text or object?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + Z"],
        answer: 2, // Ctrl + V
        hint: "Ctrl+V هو الاختصار للّصق النص أو الكائنات."
    },
    {
        id: 'word-q39',
        question: "Which shortcut is used to Redo the last undone action?",
        options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + S", "Ctrl + P"],
        answer: 1, // Ctrl + Y
        hint: "Ctrl+Y هو الاختصار لإعادة آخر إجراء تم التراجع عنه."
    },
    {
        id: 'word-q40',
        question: "Which shortcut is used to Underline selected text?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + E"],
        answer: 2, // Ctrl + U
        hint: "Ctrl+U هو الاختصار لوضع خط تحت النص المحدد."
    },
].forEach(q => addUniqueQuestion(q));


// --- Microsoft Excel Questions ---
// L3 & L4 (Excel Basics, Working with Data & Formulas)
[
    {
        id: 'excel-q1',
        question: "What is Microsoft Excel primarily used for?",
        options: ["Creating presentations", "Video editing", "Data organization, analysis, and visualization", "Writing essays"],
        answer: 2,
        hint: "إكسل هو تطبيق جداول بيانات، ووظيفته الأساسية هي تنظيم وتحليل وعرض البيانات بصرياً."
    },
    {
        id: 'excel-q2',
        question: "What is the default file extension for Excel workbooks?",
        options: [".doc", ".xlsx", ".ppt", ".txt"],
        answer: 1,
        hint: "امتداد .xlsx هو الشكل القياسي لحفظ ملفات إكسل."
    },
    {
        id: 'excel-q3',
        question: "What is the intersection of a column and a row in Excel called?",
        options: ["Worksheet", "Workbook", "Cell", "Range"],
        answer: 2,
        hint: "الخلية هي الوحدة الأساسية التي يتم فيها إدخال البيانات وتُعَّرف بموقعها (مثل A1)."
    },
    {
        id: 'excel-q4',
        question: "A user-entered mathematical equation that performs calculations in Excel is known as a:",
        options: ["Function", "Macro", "Formula", "Chart"],
        answer: 2,
        hint: "الصيغة (Formula) هي معادلة رياضية تبدأ بعلامة '=' وتُستخدم لتنفيذ العمليات الحسابية."
    },
    {
        id: 'excel-q5',
        question: "Which Excel feature allows you to automatically fill a series (like dates or numbers) in adjacent cells?",
        options: ["AutoSum", "AutoFill", "Flash Fill", "Format Painter"],
        answer: 1,
        hint: "ميزة AutoFill تساعد في تكرار الأنماط أو متابعتها بشكل تلقائي."
    },
    {
        id: 'excel-q6',
        question: "The function =SUM(A1:A10) calculates:",
        options: ["The average of values", "The sum of values in cells A1 through A10", "The count of numbers", "The maximum value"],
        answer: 1,
        hint: "دالة SUM() تُستخدم لحساب مجموع القيم داخل نطاق معين من الخلايا."
    },
    {
        id: 'excel-q7',
        question: "When a cell's content is too wide, how can you adjust the column width?",
        options: ["By changing font size", "By dragging the column boundary or double-clicking it", "By merging cells", "By hiding the column"],
        answer: 1,
        hint: "يمكنك ضبط عرض العمود يدوياً بسحبه أو بالنقر المزدوج لضبطه تلقائياً."
    },
    {
        id: 'excel-q8',
        question: "The 'Freeze Panes' feature in Excel is used to lock what while scrolling?",
        options: ["Charts", "Formulas", "Rows or columns", "Worksheets"],
        answer: 2,
        hint: "تُستخدم هذه الميزة لتثبيت صفوف أو أعمدة معينة أثناء التنقل في الجدول."
    },
    {
        id: 'excel-q9',
        question: "Which tab in Excel should you use to insert a chart?",
        options: ["Home", "Data", "Review", "Insert"],
        answer: 3,
        hint: "تبويب Insert يحتوي على أدوات إلدراج المخططات والرسوم البيانية."
    },
    {
        id: 'excel-q10',
        question: "Which function counts the number of non-empty cells in a range?",
        options: ["COUNT()", "COUNTA()", "COUNTBLANK()", "SUM()"],
        answer: 1,
        hint: "دالة COUNTA() تحسب عدد الخلايا التي تحتوي على بيانات، سواء كانت نصوصاً أو أرقاماً."
    },
    {
        id: 'excel-q11',
        question: "What does the IF function do in Excel?",
        options: ["Calculates a sum", "Tests a condition and returns one value if TRUE and another if FALSE", "Counts cells", "Finds maximum value"],
        answer: 1,
        hint: "دالة IF تُستخدم لتنفيذ عمليات منطقية بناءً على شرط."
    },
    {
        id: 'excel-q12',
        question: "Can Excel create charts from data?",
        options: ["Yes", "No"],
        answer: 0,
        hint: "يوفر إكسل أدوات لإنشاء مخططات بيانية متنوعة بناءً على البيانات."
    },
    {
        id: 'excel-q13',
        question: "The COUNT function counts both numbers and text. True or False?",
        options: ["True", "False"],
        answer: 1,
        hint: "دالة COUNT تحسب فقط الخلايا التي تحتوي على أرقام، ولا تحسب النصوص."
    },
    {
        id: 'excel-q14',
        question: "Excel workbooks can have multiple worksheets. True or False?",
        options: ["True", "False"],
        answer: 0,
        hint: "كل مصنف في إكسل يمكن أن يحتوي على عدة أوراق عمل لتنظيم البيانات."
    },
    {
        id: 'excel-q15',
        question: "Which shortcut is used to undo the last action in Excel?",
        options: ["Ctrl + C", "Ctrl + S", "Ctrl + Z", "Ctrl + A"],
        answer: 2,
        hint: "هذا الاختصار شائع لعكس الإجراءات الأخيرة في إكسل."
    },
    {
        id: 'excel-q16',
        question: "Which of the following is a built-in function to find the largest value in a range?",
        options: ["MIN()", "MAX()", "AVERAGE()", "SUM()"],
        answer: 1,
        hint: "دالة MAX() تُستخدم لإيجاد القيمة الأكبر ضمن مجموعة من القيم."
    },
    {
        id: 'excel-q17',
        question: "What is a 'Workbook' in Excel?",
        options: ["A single spreadsheet", "A file containing one or more worksheets", "A chart type", "A formula"],
        answer: 1,
        hint: "يُستخدم المصنف لتنظيم البيانات عبر أوراق عمل متعددة ضمن ملف واحد."
    },
    {
        id: 'excel-q18',
        question: "When Excel is opened, what is the default name of the new workbook?",
        options: ["Sheet1", "Document1", "Book1", "New Workbook"],
        answer: 2,
        hint: "عند فتح إكسل، يكون الاسم الافتراضي للمصنف الجديد هو Book1."
    },
    {
        id: 'excel-q19',
        question: "What happens when you double-click the column boundary in Excel?",
        options: ["It hides the column", "It deletes the column", "It automatically adjusts the column width to fit content", "It inserts a new column"],
        answer: 2,
        hint: "النقر المزدوج على حد العمود يتيح ضبط العرض تلقائيًا حسب محتوى الخلية."
    },
    {
        id: 'excel-q20',
        question: "Which type of chart uses vertical bars to represent data and is used for comparing information?",
        options: ["Line chart", "Pie chart", "Column chart", "Area chart"],
        answer: 2,
        hint: "المخطط العمودي يستخدم أشرطة عمودية لمقارنة البيانات."
    },
    // More Excel questions from Answered Questions Tutorial, Microsoft_Office_Questions, مراجعة مترجمة MS, a2, Abdallah office asm 2, Assignment 2 MS -1
    {
        id: 'excel-q21',
        question: "In Excel, each column is identified by a:",
        options: ["Number", "Letter", "Symbol", "Name"],
        answer: 1, // Letter
        hint: "الأعمدة في إكسل تُعرف بالحروف (A, B, C...)."
    },
    {
        id: 'excel-q22',
        question: "In Excel, each row is identified by a:",
        options: ["Number", "Letter", "Symbol", "Name"],
        answer: 0, // Number
        hint: "الصفوف في إكسل تُعرف بالأرقام (1, 2, 3...)."
    },
    {
        id: 'excel-q23',
        question: "In equation A+B*C/D-E, what operation is calculated first?",
        options: ["Addition", "Subtraction", "Multiplication", "Division"],
        answer: 2, // Multiplication (following order of operations)
        hint: "وفقاً لترتيب العمليات (PEMDAS/BODMAS)، الضرب والقسمة يتمان قبل الجمع والطرح."
    },
    {
        id: 'excel-q24',
        question: "Which tab allows you to set up margins and add headers/footers in Excel?",
        options: ["Home", "Insert", "Page Layout", "Data"],
        answer: 2, // Page Layout
        hint: "تبويب Page Layout يتحكم في إعدادات الصفحة والطباعة."
    },
    {
        id: 'excel-q25',
        question: "The Split command enables you to view the worksheet in how many parts?",
        options: ["One", "Two", "Three", "Two or four"],
        answer: 3, // Two or four
        hint: "تساعدك ميزة التقسيم على عرض أجزاء مختلفة من نفس ورقة العمل في نوافذ منفصلة."
    },
    {
        id: 'excel-q26',
        question: "You can enter three types of data into Excel: text, numbers, and...",
        options: ["Images", "Formulas", "Charts", "Videos"],
        answer: 1, // Formulas
        hint: "الأنواع الأساسية للبيانات في إكسل هي النصوص والأرقام والصيغ."
    },
    {
        id: 'excel-q27',
        question: "Applying printing options to fit everything on one page, you select:",
        options: ["Fit All Rows on One Page", "Fit All Columns on One Page", "Fit Sheet on One Page", "No Scaling"],
        answer: 2, // Fit Sheet on One Page
        hint: "هذا الخيار يضبط حجم ورقة العمل لتناسب صفحة واحدة مطبوعة."
    },
    {
        id: 'excel-q28',
        question: "To display data across a 3D landscape, used with large datasets to show all information at the same time, which chart type is used?",
        options: ["Column chart", "Line chart", "Surface chart", "Pie chart"],
        answer: 2, // Surface chart
        hint: "مخطط السطح (Surface Chart) يعرض البيانات عبر منظر طبيعي ثلاثي الأبعاد."
    },
    {
        id: 'excel-q29',
        question: "Which of the following is NOT a chart type in Excel?",
        options: ["Bar chart", "Pyramid chart", "Line chart", "Pie chart"],
        answer: 1, // Pyramid chart (not a primary type, often a sub-type or specialty)
        hint: "مخطط الهرم (Pyramid Chart) ليس نوع مخطط أساسي في Excel."
    },
    {
        id: 'excel-q30',
        question: "What is the file extension of a Microsoft Excel file?",
        options: ["Msxcl", "xcl", "xlsx", "xlsm"],
        answer: 2, // xlsx
        hint: "امتداد .xlsx هو الامتداد القياسي لملفات Excel الحديثة."
    },
].forEach(q => addUniqueQuestion(q));


// --- Microsoft PowerPoint Questions ---
// L5 & L6 (PowerPoint Interface, Designing Presentation)
[
    {
        id: 'ppt-q1',
        question: "What is Microsoft PowerPoint primarily used for?",
        options: ["Creating spreadsheets", "Managing databases", "Creating slideshows/presentations", "Editing images"],
        answer: 2,
        hint: "برنامج PowerPoint هو أداة قوية لإنشاء العروض التقديمية بتأثيرات بصرية جذابة."
    },
    {
        id: 'ppt-q2',
        question: "What is the default file extension for PowerPoint presentations?",
        options: [".doc", ".xlsx", ".pptx", ".pdf"],
        answer: 2,
        hint: "امتداد .pptx هو الشكل القياسي لحفظ ملفات العروض التقديمية في PowerPoint."
    },
    {
        id: 'ppt-q3',
        question: "A single page within a PowerPoint presentation where content is displayed is called a:",
        options: ["Document", "Worksheet", "Slide", "Record"],
        answer: 2,
        hint: "كل شريحة (Slide) تمثل جزءًا من العرض التقديمي ويتم تصميمها بشكل مستقل."
    },
    {
        id: 'ppt-q4',
        question: "What is a 'Transition' in PowerPoint?",
        options: ["A dynamic effect on slide elements", "A visual effect when moving between slides", "A type of chart", "A pre-designed template"],
        answer: 1,
        hint: "تُستخدم التحولات لجعل الانتقال بين الشرائح أكثر سلاسة وجاذبية."
    },
    {
        id: 'ppt-q5',
        question: "Which shortcut key is used to start a PowerPoint presentation from the beginning?",
        options: ["F1", "F5", "F7", "Ctrl + S"],
        answer: 1,
        hint: "يُستخدم اختصار F5 لتشغيل العرض التقديمي بالكامل من أول شريحة."
    },
    {
        id: 'ppt-q6',
        question: "The 'Slide Master' in PowerPoint allows you to control what?",
        options: ["Only the current slide's design", "The design and layout of every slide in your presentation", "The animation effects only", "The sound settings"],
        answer: 1,
        hint: "Slide Master يساعد في توحيد التنسيق والتصميم عبر جميع الشرائح."
    },
    {
        id: 'ppt-q7',
        question: "Which tab in PowerPoint is used to add animations to slide elements?",
        options: ["Home", "Insert", "Design", "Animations"],
        answer: 3,
        hint: "تبويب Animations يحتوي على أدوات لإضافة تأثيرات ديناميكية تعزز الجاذبية البصرية."
    },
    {
        id: 'ppt-q8',
        question: "Which view in PowerPoint shows all slides in a thumbnail format for easy reordering?",
        options: ["Normal View", "Slide Sorter View", "Reading View", "Presenter View"],
        answer: 1,
        hint: "طريقة العرض Slide Sorter تُظهر جميع الشرائح كمصغرات، مما يسهل إعادة ترتيبها أو تنظيمها."
    },
    {
        id: 'ppt-q9',
        question: "The 'Reading View' in PowerPoint is used for:",
        options: ["Editing slide content", "Presenting to an audience", "Printing slides", "Previewing the presentation in full-screen mode"],
        answer: 3,
        hint: "تُستخدم هذه الطريقة لمعاينة العرض التقديمي كما سيظهر للجمهور."
    },
    {
        id: 'ppt-q10',
        question: "Which tab allows you to apply a design theme to your PowerPoint presentation?",
        options: ["Home", "Insert", "Design", "Transitions"],
        answer: 2,
        hint: "تحتوي علامة التبويب Design على قوالب التصميم الجاهزة التي تضبط الألوان والخلفيات والخطوط تلقائيًا."
    },
    {
        id: 'ppt-q11',
        question: "PowerPoint allows you to insert multimedia elements like videos and audio into slides. True or False?",
        options: ["True", "False"],
        answer: 0,
        hint: "يمكنك إضافة ملفات الفيديو والصوت إلى الشرائح لجعل العرض التقديمي أكثر تفاعلية وجاذبية."
    },
    {
        id: 'ppt-q12',
        question: "Is the Quick Access Toolbar customizable in PowerPoint?",
        options: ["True", "False"],
        answer: 0,
        hint: "شريط الأدوات السريع قابل للتخصيص ويمكنك إضافة الأوامر التي تحتاجها بسهولة."
    },
    {
        id: 'ppt-q13',
        question: "Which of the following is NOT a view option in PowerPoint?",
        options: ["Normal View", "Slide Sorter View", "Print Layout View", "Reading View"],
        answer: 2,
        hint: "Print Layout View ليس خيارًا موجودًا في PowerPoint؛ الخيارات المتاحة هي Normal, Slide Sorter, Reading View."
    },
    {
        id: 'ppt-q14',
        question: "The 'Zoom Control' in PowerPoint is used to:",
        options: ["Change slide transition speed", "Adjust the magnification of the slide view", "Insert a new slide", "Edit slide content"],
        answer: 1,
        hint: "تُستخدم هذه الأداة لتغيير مستوى التكبير لرؤية الشرائح بشكل أفضل أثناء العمل عليها."
    },
    {
        id: 'ppt-q15',
        question: "What does the 'Insert' tab in PowerPoint allow you to add to your slides?",
        options: ["Only text", "Only images", "Text, images, charts, and multimedia", "Only charts"],
        answer: 2,
        hint: "تبويب Insert يحتوي على أدوات لإضافة أنواع مختلفة من المحتوى لتحسين العرض التقديمي."
    },
    {
        id: 'ppt-q16',
        question: "Which feature in PowerPoint allows you to hide the Ribbon to maximize the slide area?",
        options: ["Auto-hide Ribbon", "Slide Sorter", "Full Screen Mode", "Presenter View"],
        answer: 0,
        hint: "تُستخدم هذه الميزة لإخفاء الشريط مؤقتًا للحصول على مساحة أكبر أثناء العمل على الشرائح."
    },
    {
        id: 'ppt-q17',
        question: "The 'Presenter View' allows the presenter to see additional notes while the audience sees only the slide. True or False?",
        options: ["True", "False"],
        answer: 0,
        hint: "هذه الميزة تُساعد المقدم على تقديم العرض بشكل أكثر تنظيمًا دون إظهار الملاحظات للجمهور."
    },
    {
        id: 'ppt-q18',
        question: "The ruler, guides, and gridlines help you to ________ objects on your slides accurately.",
        options: ["Animate", "Design", "Align", "Print"],
        answer: 2,
        hint: "تُستخدم هذه الأدوات لترتيب العناصر وتنسيقها بطريقة دقيقة وجذابة."
    },
    {
        id: 'ppt-q19',
        question: "The 'Home' tab in PowerPoint contains the option to insert a new slide. True or False?",
        options: ["True", "False"],
        answer: 0,
        hint: "تبويب Home يحتوي على خيار 'New Slide' لإضافة شرائح جديدة بسهولة."
    },
    {
        id: 'ppt-q20',
        question: "PowerPoint presentations can include transitions between slides. True or False?",
        options: ["True", "False"],
        answer: 0,
        hint: "تأثيرات الانتقال تضيف جاذبية وتُستخدم عند الانتقال من شريحة إلى أخرى."
    },
    // More PowerPoint questions from Answered Questions Tutorial, Microsoft_Office_Questions, مراجعة مترجمة MS, MS Office Practical Exam, Assignment 2 MS -1
    {
        id: 'ppt-q21',
        question: "What is the extension of a Microsoft PowerPoint file?",
        options: [".jpg", ".ppt", ".html", "docs"],
        answer: 1, // .ppt (or .pptx, but .ppt is in options)
        hint: "الامتداد القياسي لملفات PowerPoint هو .pptx أو .ppt."
    },
    {
        id: 'ppt-q22',
        question: "PowerPoint is a part of the Microsoft Office package. It is a presentation software package that consists of a number of pages or slides and it may contain text, graphics, tables, videos, etc. (Definition)",
        options: ["True", "False"], // This is a definition, treating it as True/False for quiz purposes
        answer: 0, // True
        hint: "هذا هو التعريف الصحيح لبرنامج Microsoft PowerPoint."
    },
    {
        id: 'ppt-q23',
        question: "A 'Slideshow' is a presentation format used to display images or slides sequentially on the screen and to display information and tell a story. (Definition)",
        options: ["True", "False"],
        answer: 0, // True
        hint: "هذا هو التعريف الصحيح للعرض التقديمي (Slideshow)."
    },
    {
        id: 'ppt-q24',
        question: "How do you export a PowerPoint presentation to PDF?",
        options: ["File > Print", "File > Save As > PDF", "Insert > PDF", "Design > Export as PDF"],
        answer: 1, // File > Save As > PDF
        hint: "يتم تصدير العرض التقديمي إلى PDF من قائمة File ثم Save As ثم اختيار نوع PDF."
    },
    {
        id: 'ppt-q25',
        question: "Can SmartArt be added directly in Microsoft Outlook?",
        options: ["Yes", "No", "Only if Outlook is linked to PowerPoint", "Only if it's a new email"],
        answer: 1, // No
        hint: "لا يمكن إضافة SmartArt مباشرة في Outlook؛ يجب إنشاؤها في Word أو PowerPoint ثم إرفاقها."
    }
].forEach(q => addUniqueQuestion(q));

// --- Microsoft Access Questions ---
// L7, L8, L9 (Database Basics, Working with Tools, SQL)
[
    {
        id: 'access-q1',
        question: "What is Microsoft Access?",
        options: ["A word processor", "A spreadsheet program", "A relational database management system (RDBMS)", "A presentation software"],
        answer: 2,
        hint: "Access هو نظام إدارة قواعد بيانات علائقية يُستخدم لتخزين وإدارة وتحليل كميات كبيرة من البيانات."
    },
    {
        id: 'access-q2',
        question: "Which Access object stores raw data in a database?",
        options: ["Form", "Query", "Table", "Report"],
        answer: 2,
        hint: "الجدول (Table) هو أساس قاعدة البيانات ويخزن البيانات في صفوف (سجلات) وأعمدة (حقول)."
    },
    {
        id: 'access-q3',
        question: "Which view in Access is used to create the structure of a table, define field names, and assign data types?",
        options: ["Datasheet View", "Layout View", "Design View", "Form View"],
        answer: 2,
        hint: "عرض التصميم (Design View) يوفر تحكماً كاملاً في بنية الجدول، بما في ذلك أنواع البيانات والمفاتيح الأساسية."
    },
    {
        id: 'access-q4',
        question: "A 'Primary Key' in Access must be:",
        options: ["Null", "Duplicate", "Unique", "Text"],
        answer: 2,
        hint: "المفتاح الأساسي (Primary Key) هو معرف فريد لكل سجل في الجدول ويجب ألا يتكرر."
    },
    {
        id: 'access-q5',
        question: "Which Access object is used to select and retrieve data based on specific criteria?",
        options: ["Form", "Report", "Query", "Macro"],
        answer: 2,
        hint: "الاستعلام (Query) يُستخدم لاستخراج البيانات وتصفيتها من جدول واحد أو أكثر."
    },
    {
        id: 'access-q6',
        question: "Relationships in Access are created between what?",
        options: ["Forms and Reports", "Queries and Reports", "Tables", "Fields and Macros"],
        answer: 2,
        hint: "العلاقات (Relationships) تُستخدم لربط جدولين أو أكثر بناءً على حقول مشتركة."
    },
    {
        id: 'access-q7',
        question: "Is SQL (Structured Query Language) supported in Microsoft Access?",
        options: ["Yes", "No"],
        answer: 0,
        hint: "Access يدعم لغة SQL للتعامل مع البيانات واسترجاعها وتعديلها."
    },
    {
        id: 'access-q8',
        question: "Which SQL command is used to retrieve data from tables?",
        options: ["UPDATE", "DELETE", "INSERT INTO", "SELECT"],
        answer: 3,
        hint: "أمر SELECT هو الأمر الأساسي لاسترجاع البيانات من قاعدة البيانات."
    },
    {
        id: 'access-q9',
        question: "What is a 'Record' in an Access table?",
        options: ["A single piece of data", "A complete set of related fields (a row)", "A collection of tables", "A unique identifier"],
        answer: 1,
        hint: "السجل (Record) هو صف كامل من البيانات في الجدول، ويمثل كياناً واحداً."
    },
    {
        id: 'access-q10',
        question: "Which data type in Access is used for monetary values?",
        options: ["Short Text", "Number", "Date/Time", "Currency"],
        answer: 3,
        hint: "نوع البيانات Currency مصمم خصيصاً لتخزين القيم النقدية بدقة."
    },
    {
        id: 'access-q11',
        question: "Can tables in Access contain images?",
        options: ["Yes", "No"],
        answer: 0,
        hint: "يمكن للـ tables في Access أن تحتوي على أنواع مختلفة من البيانات، بما في ذلك الصور عبر حقول المرفقات (Attachments)."
    },
    {
        id: 'access-q12',
        question: "Which type of relationship means one record in the first table can match many records in the second table?",
        options: ["One-to-One", "Many-to-Many", "One-to-Many", "Self-Join"],
        answer: 2,
        hint: "علاقة 'One-to-Many' هي الأكثر شيوعاً، حيث يرتبط سجل واحد في الجدول الأول بعدة سجلات في الجدول الثاني."
    },
    {
        id: 'access-q13',
        question: "What is the purpose of a 'Foreign Key'?",
        options: ["To uniquely identify a record", "To define relationships between tables", "To count records", "To sort data"],
        answer: 1,
        hint: "المفتاح الأجنبي (Foreign Key) هو حقل في جدول يربط بسجل فريد في جدول آخر، مما ينشئ علاقة بينهما."
    },
    {
        id: 'access-q14',
        question: "Which SQL command is used to add new records to a table?",
        options: ["UPDATE", "DELETE", "INSERT INTO", "CREATE TABLE"],
        answer: 2,
        hint: "أمر INSERT INTO يُستخدم لإدراج صفوف جديدة من البيانات في جدول."
    },
    {
        id: 'access-q15',
        question: "To delete records from a table in Access, which SQL command would you use?",
        options: ["SELECT", "UPDATE", "DELETE", "DROP TABLE"],
        answer: 2,
        hint: "أمر DELETE يُستخدم لإزالة سجلات معينة من جدول."
    },
    {
        id: 'access-q16',
        question: "What does the SQL command 'CREATE TABLE' do?",
        options: ["Modifies an existing table", "Deletes a table", "Creates a new table in a database", "Inserts data into a table"],
        answer: 2,
        hint: "أمر CREATE TABLE يُستخدم لإنشاء هيكل جدول جديد في قاعدة البيانات."
    },
    {
        id: 'access-q17',
        question: "When launching Microsoft Access, which option do you typically select to start a new database?",
        options: ["Open Existing Database", "Blank Workbook", "Blank Presentation", "Blank Database"],
        answer: 3,
        hint: "لبدء قاعدة بيانات جديدة من الصفر، تختار 'Blank Database'."
    },
    {
        id: 'access-q18',
        question: "The 'Navigation Pane' in Access lists what?",
        options: ["Only tables", "All objects like Tables, Queries, Forms, Reports", "Recently opened files", "Database properties"],
        answer: 1,
        hint: "لوحة التنقل (Navigation Pane) تعرض جميع الكائنات الموجودة في قاعدة البيانات لسهولة الوصول إليها."
    },
    {
        id: 'access-q19',
        question: "Can you sort data in both tables and queries in Access?",
        options: ["True", "False"],
        answer: 0,
        hint: "يمكنك فرز البيانات تصاعدياً أو تنازلياً في كل من الجداول والاستعلامات."
    },
    {
        id: 'access-q20',
        question: "Access only supports one table per database. True or False?",
        options: ["True", "False"],
        answer: 1,
        hint: "تدعم Access إنشاء جداول متعددة ضمن قاعدة بيانات واحدة وربطها ببعضها."
    },
    // More Access questions from Rmid
    {
        id: 'access-q21',
        question: "Which object type is NOT valid in MS Access?",
        options: ["Table", "Query", "Slide", "Report"],
        answer: 2, // Slide
        hint: "Slide هي شريحة في PowerPoint وليست كائنًا في Access."
    },
    {
        id: 'access-q22',
        question: "Which view is used to create the structure of a table?",
        options: ["Datasheet View", "Design View", "Layout View", "Form View"],
        answer: 1, // Design View
        hint: "يستخدم Design View لتحديد الحقول وأنواع البيانات والمفاتيح الأساسية للجدول."
    },
    {
        id: 'access-q23',
        question: "Which of these is used to select and retrieve data?",
        options: ["Form", "Report", "Query", "Macro"],
        answer: 2, // Query
        hint: "الاستعلام (Query) هو الأداة المستخدمة لاسترداد وتصفية البيانات."
    },
    {
        id: 'access-q24',
        question: "A relationship in Access is created between:",
        options: ["Forms and Reports", "Queries and Reports", "Tables", "Fields and Macros"],
        answer: 2, // Tables
        hint: "تُنشأ العلاقات لربط البيانات بين الجداول المختلفة."
    },
    {
        id: 'access-q25',
        question: "Tables can only contain text data. (True/False)",
        options: ["True", "False"],
        answer: 1, // False
        hint: "الجداول يمكن أن تحتوي على أنواع متعددة من البيانات مثل النصوص والأرقام والتواريخ والصور."
    },
    {
        id: 'access-q26',
        question: "A primary key can have duplicate values. (True/False)",
        options: ["True", "False"],
        answer: 1, // False
        hint: "المفتاح الأساسي يجب أن يكون فريدًا ولا يتكرر أبدًا."
    },
    {
        id: 'access-q27',
        question: "Relationships are used to link two tables. (True/False)",
        options: ["True", "False"],
        answer: 0, // True
        hint: "العلاقات هي الوسيلة لربط البيانات بين الجداول."
    },
    {
        id: 'access-q28',
        question: "A query can be used to delete records. (True/False)",
        options: ["True", "False"],
        answer: 0, // True (Action Queries)
        hint: "بالإضافة إلى استرداد البيانات، يمكن للاستعلامات (Queries) تعديل أو حذف السجلات."
    },
    {
        id: 'access-q29',
        question: "Foreign keys are used to define relationships. (True/False)",
        options: ["True", "False"],
        answer: 0, // True
        hint: "المفاتيح الأجنبية تُستخدم لربط الجداول ببعضها البعض بناءً على المفاتيح الأساسية."
    },
    {
        id: 'access-q30',
        question: "What SQL command modifies existing records?",
        options: ["SELECT", "INSERT INTO", "UPDATE", "DELETE"],
        answer: 2, // UPDATE
        hint: "أمر UPDATE يُستخدم لتعديل البيانات في السجلات الموجودة."
    },
    {
        id: 'access-q31',
        question: "What SQL command removes records from a table?",
        options: ["SELECT", "INSERT INTO", "UPDATE", "DELETE"],
        answer: 3, // DELETE
        hint: "أمر DELETE يُستخدم لحذف سجلات من جدول."
    },
    {
        id: 'access-q32',
        question: "What SQL command adds new records to a table?",
        options: ["SELECT", "INSERT INTO", "UPDATE", "DELETE"],
        answer: 1, // INSERT INTO
        hint: "أمر INSERT INTO يُستخدم لإضافة سجلات جديدة."
    },
    {
        id: 'access-q33',
        question: "What SQL command deletes a table from a database?",
        options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"],
        answer: 2, // DROP TABLE
        hint: "أمر DROP TABLE يُستخدم لحذف جدول بالكامل من قاعدة البيانات."
    },
    {
        id: 'access-q34',
        question: "What SQL command creates a new table?",
        options: ["ADD TABLE", "MAKE TABLE", "BUILD TABLE", "CREATE TABLE"],
        answer: 3, // CREATE TABLE
        hint: "أمر CREATE TABLE يُستخدم لإنشاء جدول جديد بهيكل محدد."
    },
    {
        id: 'access-q35',
        question: "In SQL, what is the purpose of 'WHERE' clause?",
        options: ["To select all records", "To filter records based on a condition", "To order records", "To join tables"],
        answer: 1, // To filter records based on a condition
        hint: "تُستخدم عبارة WHERE لتحديد السجلات التي تتوافق مع شرط معين."
    },
    {
        id: 'access-q36',
        question: "In SQL, what is the purpose of 'ORDER BY' clause?",
        options: ["To filter records", "To group records", "To sort the result set", "To count records"],
        answer: 2, // To sort the result set
        hint: "تُستخدم عبارة ORDER BY لفرز نتائج الاستعلام تصاعديًا أو تنازليًا."
    },
].forEach(q => addUniqueQuestion(q));

// Function to get a subset of questions
const getQuizQuestions = (prefix, count) => {
    const filtered = uniqueQuestions.filter(q => q.id.startsWith(prefix));
    return shuffleArray(filtered).slice(0, count);
    
    {
        console.warn(`Not enough questions for prefix ${prefix}. Found ${filtered.length}, needed ${count}.`);
    }
    // Shuffle and pick `count` questions. If not enough, take all available.
    return shuffleArray(filtered).slice(0, Math.min(count, filtered.length));

};

// Data for Lectures, Summaries, and Quizzes
export const lecturesData = [
  {
        id: 'L1',
        title: "المحاضرة 1: أساسيات Microsoft Word",
        icon: "fa-file-word",
        audioSrc: "", // Placeholder for actual audio URL
        summary: {
            ar: `
                <h3>مقدمة في Microsoft Word</h3>
                <p>يعد Microsoft Word برنامج معالجة نصوص قويًا يتيح لك إنشاء مجموعة متنوعة من المستندات مثل الرسائل، النشرات، والتقارير. يسمح لك Word بإنجاز المزيد في مشروع معالجة النصوص الخاص بك بفضل أدواته وميزاته العديدة.</p>
                
                <h3>بدء مستند Word</h3>
                <p>عند فتح Word، تظهر شاشة البدء التي تسمح لك بإنشاء مستند جديد من صفحة فارغة أو باستخدام قوالب جاهزة. يمكنك البحث عن قوالب عبر الإنترنت أو اختيار القوالب المثبتة مسبقًا.</p>

                <h3>أجزاء واجهة Word</h3>
                <ul>
                    <li><strong>الشريط (Ribbon):</strong> يحتوي على جميع الأوامر التي ستحتاجها لأداء المهام الشائعة في Word. يتكون من علامات تبويب متعددة (مثل Home, Insert, Design)، كل منها يحتوي على مجموعات من الأوامر ذات الصلة (مثل Clipboard, Font, Paragraph).</li>
                    <li><strong>شريط أدوات الوصول السريع (Quick Access Toolbar):</strong> يتيح لك الوصول السريع إلى الأوامر المستخدمة بكثرة (مثل Save, Undo, Redo) بغض النظر عن علامة التبويب النشطة.</li>
                    <li><strong>منطقة المستند (Document Pane):</strong> هي المساحة الرئيسية التي تقوم فيها بكتابة وتحرير وتنسيق النص في مستندك.</li>
                    <li><strong>المسطرة (Ruler):</strong> تقع في أعلى ويسار المستند، وتسهل ضبط المحاذاة والمسافات.</li>
                    <li><strong>أشرطة التمرير (Scroll Bars):</strong> تسمح لك بالتحرك لأعلى ولأسفل (رأسيًا) أو يمينًا ويسارًا (أفقيًا) عبر صفحات المستند.</li>
                    <li><strong>شريط الحالة (Status Bar):</strong> يقع في أسفل الشاشة، ويعرض معلومات مثل عدد الصفحات والكلمات، ووضع العرض الحالي.</li>
                    <li><strong>أداة التكبير/التصغير (Zoom Control):</strong> تسمح لك بضبط مستوى التكبير/التصغير لعرض المستند.</li>
                    <li><strong>أداة 'Tell Me':</strong> شريط يمكنك استخدامه للبحث عن الأوامر والميزات إذا لم تتذكر مكانها.</li>
                </ul>

                <h3>إنشاء المستندات</h3>
                <p>يمكنك إنشاء مستند من صفحة فارغة أو استخدام قالب منسق. عند بدء الكتابة، يُدرج Word النص إلى يسار نقطة الإدراج ويستخدم الإعدادات الافتراضية للهوامش (1 بوصة من جميع الجوانب) وتباعد الأسطر (1.08) وتباعد الفقرات (8 نقاط).</p>

                <h3>الرموز غير القابلة للطباعة (Nonprinting Characters)</h3>
                <p>هي رموز مخفية (مثل علامات الفقرات، المسافات، علامات الجدولة) تساعدك في إنشاء وتعديل المستند. لا تظهر هذه الرموز عند الطباعة، ويمكن إظهارها/إخفائها بالنقر على زر Show/Hide (¶) في مجموعة Paragraph ضمن علامة التبويب Home.</p>

                <h3>حفظ المستندات</h3>
                <p>عند حفظ المستند لأول مرة، يجب تحديد اسم الملف، نوع الملف (عادةً .docx)، ومكان الحفظ. يجب أن يكون اسم الملف ذا معنى لتسهيل العثور عليه لاحقًا.</p>

                <h3>معاينة وطباعة المستند</h3>
                <p>أمر الطباعة موجود في علامة التبويب File. يتيح لك جزء المعاينة رؤية شكل المستند المطبوع، مما يساعدك على تصحيح الأخطاء قبل الطباعة. تتضمن خيارات الطباعة عدد النسخ، تحديد الصفحات، واتجاه الصفحة (Portrait/Landscape).</p>
            `,
            en: `
                <h3>Introduction to Microsoft Word</h3>
                <p>Microsoft Word is a powerful word processing program that allows you to create a variety of documents like letters, flyers, and reports. Word enables you to do more with your word processing projects thanks to its numerous tools and features.</p>
                
                <h3>Starting a Word Document</h3>
                <p>When you open Word, the Start screen appears, allowing you to create a new document from a blank page or by using pre-made templates. You can search for templates online or choose from pre-installed ones.</p>

                <h3>Parts of the Word Interface</h3>
                <ul>
                    <li><strong>Ribbon:</strong> Contains all the commands you will need to perform common tasks in Word. It consists of multiple tabs (e.g., Home, Insert, Design), each containing groups of related commands (e.g., Clipboard, Font, Paragraph).</li>
                    <li><strong>Quick Access Toolbar:</strong> Provides quick access to frequently used commands (e.g., Save, Undo, Redo) regardless of the active tab.</li>
                    <li><strong>Document Pane:</strong> This is the main area where you type, edit, and format the text of your document.</li>
                    <li><strong>Ruler:</strong> Located at the top and left of the document, it facilitates alignment and spacing adjustments.</li>
                    <li><strong>Scroll Bars:</strong> Allow you to move up and down (vertically) or left and right (horizontally) through document pages.</li>
                    <li><strong>Status Bar:</strong> Located at the bottom of the screen, it displays information such as page and word count, and the current view mode.</li>
                    <li><strong>Zoom Control:</strong> Allows you to adjust the zoom level of the document view.</li>
                    <li><strong>'Tell Me' Bar:</strong> A search bar you can use to find commands and features if you don't remember where to locate them.</li>
                </ul>

                <h3>Creating Documents</h3>
                <p>You can create a document from a blank page or use a formatted template. When you start typing, Word inserts text to the left of the insertion point and uses default settings for margins (1-inch on all sides), line spacing (1.08), and paragraph spacing (8 points).</p>

                <h3>Nonprinting Characters</h3>
                <p>These are hidden symbols (such as paragraph marks, spaces, tab marks) that help you create and edit your document. These symbols do not appear when printed and can be shown/hidden by clicking the Show/Hide (¶) button in the Paragraph group on the Home tab.</p>

                <h3>Saving Documents</h3>
                <p>When saving a document for the first time, you must specify a filename, file type (usually .docx), and a location. The filename should be meaningful for easy retrieval later.</p>

                <h3>Previewing and Printing a Document</h3>
                <p>The Print command is located on the File tab. The Preview pane allows you to see what your printed document will look like, helping you correct errors before printing. Printing options include the number of copies, page selection, and page orientation (Portrait/Landscape).</p>
            `
        },
        quiz: getQuizQuestions('word-q', 20)
    },
    {
        id: 'L2',
        title: "المحاضرة 2: العمل مع أدوات Word",
        icon: "fa-screwdriver-wrench",
        audioSrc: "",
        summary: {
            ar: `
                <h3>استخدام الشريط (Ribbon) بفعالية</h3>
                <p>يحتوي الشريط (Ribbon) على أوامر متعددة منظمة في علامات تبويب منفصلة. كل علامة تبويب تحتوي على عدة مجموعات (Groups) من الأوامر ذات الصلة. على سبيل المثال، في علامة التبويب "Home"، توجد مجموعات مثل "Clipboard"، "Font"، "Paragraph"، "Styles"، و"Editing".</p>
                <ul>
                    <li><strong>أيقونات الأوامر:</strong> كل مجموعة تحتوي على أيقونة أمر واحدة أو أكثر، بعضها يحتوي على قائمة منسدلة (Drop-down menu) أو قائمة خيارات.</li>
                    <li><strong>مشغل مربع الحوار (Dialog Box Launcher):</strong> بعض المجموعات تحتوي على سهم صغير في الزاوية السفلية اليمنى يُسمى "مشغل مربع الحوار". النقر عليه يفتح مربع حوار يعرض خيارات إضافية أو معلومات يمكنك استخدامها لتنفيذ أمر معين.</li>
                    <li><strong>التبويب النشط:</strong> الشريط يعرض الأوامر المتعلقة بنوع الكائن الذي فتحته ويظهر على الشاشة.</li>
                </ul>

                <h3>إظهار وإخفاء الشريط</h3>
                <p>يمكنك إظهار وإخفاء الشريط لزيادة مساحة العمل على الشاشة. يوجد سهم "خيارات عرض الشريط" (Ribbon Display Options) في الزاوية العلوية اليمنى من الشريط، والذي يعرض قائمة منسدلة بثلاثة خيارات:</p>
                <ul>
                    <li><strong>Auto-hide Ribbon:</strong> يُظهر المستند في وضع ملء الشاشة ويُخفي الشريط تمامًا. لإظهار الشريط، انقر على أمر "Expand Ribbon" في أعلى الشاشة.</li>
                    <li><strong>Show Tabs:</strong> يُخفي جميع مجموعات الأوامر، لكن علامات التبويب تظل مرئية. لإظهار الشريط، انقر ببساطة على علامة تبويب.</li>
                    <li><strong>Show Tabs and Commands:</strong> هذا الخيار يُكبر الشريط ويُظهر جميع علامات التبويب والأوامر بشكل دائم.</li>
                </ul>

                <h3>استخدام شريط أدوات الوصول السريع (Quick Access Toolbar)</h3>
                <p>يقع شريط أدوات الوصول السريع أسفل الشريط (أو يمكن نقله لأعلى) ويحتوي على الأوامر التي يستخدمها المستخدمون غالبًا. افتراضيًا، يظهر به أوامر "Save"، "Undo"، و"Repeat".</p>
                <ul>
                    <li><strong>تخصيص الشريط:</strong> يمكنك تخصيص محتوياته بالنقر على السهم المنسدل على الجانب الأيمن من الشريط واختيار الخيارات من القائمة.</li>
                    <li><strong>وضع اللمس/الماوس (Touch/Mouse Mode):</strong> تضمنته Microsoft في شريط أدوات الوصول السريع. إذا كان لديك جهاز يدعم اللمس، يمكنك استخدام وضع اللمس الذي يوفر مساحة أكبر بين الأزرار والأيقونات لمنع الضغط بالخطأ.</li>
                    <li><strong>وظائف الأوامر الافتراضية:</strong>
                        <ul>
                            <li><strong>Save:</strong> يحفظ المستند. عند الحفظ لأول مرة، يفتح شاشة "Save As" لتحديد اسم الملف ومكان الحفظ.</li>
                            <li><strong>Undo:</strong> يسمح لك بإلغاء آخر أمر أو إجراء قمت به في Word. يمكنك النقر على هذا الأمر عدة مرات للتراجع عن الأوامر المنفذة سابقًا.</li>
                            <li><strong>Repeat:</strong> يكرر آخر إجراء قمت به.</li>
                        </ul>
                    </li>
                </ul>

                <h3>العمل مع القوالب (Templates)</h3>
                <p>القالب هو مستند رئيسي بتخطيط صفحة محدد مسبقًا، وخطوط، وهوامش، وأنماط تُستخدم لإنشاء مستندات جديدة بنفس التنسيق الأساسي. يمكنك الاختيار من قوالب مختلفة (مثل الرسائل، السير الذاتية، الفاكسات) المثبتة مسبقًا أو المتوفرة عبر الإنترنت على Office.com.</p>
                <p><strong>البحث عن القوالب عبر الإنترنت:</strong> يمكنك البحث عن قالب عبر الإنترنت بتحديد كلمات مفتاحية في شريط البحث أو التصفية حسب الفئة.</p>

                <h3>معاينة وطباعة المستندات</h3>
                <p>أمر "Print" موجود في علامة التبويب "File". ستجد خيارات الطباعة، بما في ذلك خصائص وإعدادات الطابعة. يمنحك جزء "Preview" فرصة رؤية كيف سيبدو مستندك المطبوع، حتى تتمكن من تصحيح الأخطاء قبل الطباعة.</p>
                <ul>
                    <li><strong>العودة إلى المستند:</strong> للخروج من شاشة الطباعة، يمكنك النقر على أيقونة "Return to Document" أو الضغط على مفتاح Esc.</li>
                    <li><strong>خيارات الطباعة:</strong> تتضمن خيارات الطباعة عدد النسخ، طباعة المحتوى المحدد فقط، الصفحة الحالية، أو نطاق مخصص من الصفحات، بالإضافة إلى خيارات أخرى لخصائص الطباعة، والترتيب (Collation)، وتخطيط الصفحة.</li>
                </ul>
            `,
            en: `
                <h3>Using the Ribbon Effectively</h3>
                <p>The Ribbon contains multiple commands organized on separate tabs. Each tab contains several groups, or collections of related Word commands. For example, in the "Home" tab, groups are labeled "Clipboard," "Font," "Paragraph," "Styles," and "Editing."</p>
                <ul>
                    <li><strong>Command Icons:</strong> Each group contains one or more command icons, some of which have a drop-down menu or a list of options associated with them.</li>
                    <li><strong>Dialog Box Launcher:</strong> Some groups have a small arrow in the lower-right corner called a "Dialog Box Launcher." Clicking it opens a dialog box that displays additional options or information you can use to execute a command.</li>
                    <li><strong>Active Tab:</strong> The Ribbon displays commands related to the type of object you have open and onscreen.</li>
                </ul>

                <h3>Showing and Hiding the Ribbon</h3>
                <p>You can show and hide the Ribbon to maximize screen space. The "Ribbon Display Options" arrow in the upper-right corner of the Ribbon displays a drop-down menu with three options:</p>
                <ul>
                    <li><strong>Auto-hide Ribbon:</strong> Displays the document in full-screen mode and completely hides the Ribbon. To show the Ribbon, click the "Expand Ribbon" command at the top of the screen.</li>
                    <li><strong>Show Tabs:</strong> Hides all command groups, but tabs remain visible. To show the Ribbon, simply click a tab.</li>
                    <li><strong>Show Tabs and Commands:</strong> This option maximizes the Ribbon, displaying all tabs and commands permanently.</li>
                </ul>

                <h3>Using the Quick Access Toolbar</h3>
                <p>The Quick Access Toolbar is located below the Ribbon (or can be moved above it) and contains commands users access most often. By default, "Save," "Undo," and "Repeat" commands are displayed.</p>
                <ul>
                    <li><strong>Customizing the Toolbar:</strong> You can customize its contents by clicking the drop-down arrow on the right side of the toolbar and choosing options from the menu.</li>
                    <li><strong>Touch/Mouse Mode:</strong> Microsoft has included the Touch/Mouse Mode option in the Quick Access Toolbar. If you have a touch-capable device, Touch Mode provides more space between buttons and icons to prevent accidental presses.</li>
                    <li><strong>Default Command Functions:</strong>
                        <ul>
                            <li><strong>Save:</strong> Saves the document. When saving for the first time, it opens the "Save As" screen to specify filename and location.</li>
                            <li><strong>Undo:</strong> Allows you to cancel or undo your last Word command or action.</li>
                            <li><strong>Repeat:</strong> Repeats your last action.</li>
                        </ul>
                    </li>
                </ul>

                <h3>Working with Templates</h3>
                <p>A template is a master document with predefined page layout, fonts, margins, and styles used to create new documents with the same basic formatting. You can choose from various templates (e.g., letters, resumes, faxes) pre-installed or available online at Office.com.</p>
                <p><strong>Finding Templates Online:</strong> You can search for a template online by specifying keywords in the search bar or filtering by category.</p>

                <h3>Previewing and Printing Documents</h3>
                <p>The "Print" command is on the "File" tab. The "Preview" pane lets you see what your printed document will look like, helping you correct errors before printing. Printing options include the number of copies, selected content, current page, or a custom range, as well as properties, collation, and page layout.</p>
            `
        },
        quiz: getQuizQuestions('word-q', 20)
    },
    {
        id: 'L3',
        title: "المحاضرة 3: أساسيات Microsoft Excel",
        icon: "fa-file-excel",
        audioSrc: "",
        summary: {
            ar: `
                <h3>مقدمة في Microsoft Excel</h3>
                <p>يوفر Microsoft Excel أدوات قوية تمكن المستخدم من تنظيم وتحليل وإدارة ومشاركة المعلومات بسهولة. Excel هو تطبيق جداول بيانات قوي يُستخدم لمعالجة البيانات الرقمية، وإنشاء الرسوم البيانية، وإجراء العمليات الحسابية المعقدة.</p>

                <h3>أجزاء واجهة Excel</h3>
                <ul>
                    <li><strong>الشريط (Ribbon):</strong> في أعلى النافذة، مُنظم إلى علامات تبويب الأوامر. كل علامة تبويب مقسمة إلى مجموعات أوامر تحتوي على أوامر وخيارات (أيقونات) تتعلق باسم المجموعة.</li>
                    <li><strong>شريط أدوات الوصول السريع (Quick Access Toolbar):</strong> يقع على الجانب الأيسر من شريط العنوان (يمكن نقله لأسفل الشريط) ويوفر وصولاً سريعًا إلى الأدوات الأكثر استخدامًا مثل الحفظ، والتراجع، والإعادة. يمكنك تخصيصه ليحتوي على الأوامر التي تستخدمها بشكل متكرر.</li>
                    <li><strong>الخلية النشطة (Active cell):</strong> الخلية المحددة حاليًا والمميزة بمستطيل سميك حيث تُدخل المعلومات.</li>
                    <li><strong>شريط الصيغة (Formula bar):</strong> يعرض المحتوى الحقيقي للخلية النشطة، سواء كان نصًا، رقمًا، أو صيغة.</li>
                    <li><strong>اسم الخلية (Name Box):</strong> يعرض عنوان الخلية النشطة (مثال: A1).</li>
                    <li><strong>علامات تبويب الأوراق (Worksheet tabs):</strong> تقع أسفل الشاشة (Sheet1, Sheet2, إلخ) وتسمح بالتنقل بين أوراق العمل المختلفة. يمكنك إعادة تسمية الأوراق أو إضافة أوراق جديدة بزر (+).</li>
                    <li><strong>المصنف (Workbook):</strong> ملف Excel يتكون من ورقة عمل واحدة أو أكثر. عند الفتح، يظهر اسم الملف (Book1) واسم البرنامج (Excel) في شريط العنوان.</li>
                </ul>

                <h3>بدء استخدام Excel</h3>
                <p>عند فتح Excel، يمكنه فتح مصنف فارغ أو ملف سابق، ويمكنك الاختيار من قائمة القوالب. يحتوي المصنف الجديد على ورقة عمل واحدة (Sheet1) افتراضيًا حيث تُدخل المعلومات. إذا كان المصنف يحتوي على أوراق عمل إضافية، يمكنك استخدام علامات تبويب الأوراق للتنقل بينها.</p>
                <p><strong>أوراق العمل (Worksheets):</strong> كل ورقة عمل عبارة عن شبكة من الصفوف والأعمدة والخلايا:</p>
                <ul>
                    <li><strong>الأعمدة (Columns):</strong> تبدأ من أعلى ورقة العمل وتتجه إلى الأسفل، ويتم تحديدها بحرف (A, B, C, إلخ).</li>
                    <li><strong>الصفوف (Rows):</strong> تبدأ من الحافة اليسرى لورقة العمل وتستمر إلى اليمين، ويتم تحديدها برقم (1, 2, 3, إلخ).</li>
                    <li><strong>الخلايا (Cells):</strong> يتم تحديد كل خلية بتقاطع عمود وصف (مثال: A1). يمكنك إدخال المعلومات عن طريق الكتابة في الخلية المحددة أو النشطة.</li>
                </ul>

                <h3>تغيير طرق عرض المصنف والنافذة</h3>
                <p>تحتوي علامة التبويب "View" في الشريط على أوامر للتحكم في مظهر المصنف المعروض. يمكنك أيضًا فتح وتنسيق نوافذ جديدة وتقسيم النوافذ لعرض أجزاء مختلفة من المصنف جنبًا إلى جنب.</p>
                <ul>
                    <li><strong>طرق العرض:</strong> مثل Normal (العادي)، Page Layout (تخطيط الصفحة) حيث يمكنك رؤية الهوامش وفواصل الصفحات، و Page Break Preview (معاينة فواصل الصفحات).</li>
                    <li><strong>أمر التقسيم (Split command):</strong> يُمكّنك من عرض ورقة العمل في جزأين أو أربعة أرباع عندما تحتوي ورقة العمل على الكثير من البيانات.</li>
                </ul>
            `,
            en: `
                <h3>Introduction to Microsoft Excel</h3>
                <p>Microsoft Excel provides powerful tools that enable users to organize, analyze, manage, and share information easily. Excel is a robust spreadsheet application used for numerical data processing, chart creation, and complex calculations.</p>

                <h3>Parts of the Excel Interface</h3>
                <ul>
                    <li><strong>Ribbon:</strong> At the top of the window, organized into command tabs. Each tab is divided into command groups with related commands and options (icons).</li>
                    <li><strong>Quick Access Toolbar:</strong> Located on the left side of the title bar (can be moved below the Ribbon) and provides fast access to frequently used tools like Save, Undo, and Redo. It can be customized to contain only the commands you use most often.</li>
                    <li><strong>Active cell:</strong> The currently selected cell, outlined by a bold rectangle, where information is entered.</li>
                    <li><strong>Formula bar:</strong> Displays the actual content of the active cell, whether it's text, a number, or a formula.</li>
                    <li><strong>Name Box:</strong> Displays the address of the active cell (e.g., A1).</li>
                    <li><strong>Worksheet tabs:</strong> Located at the bottom of the screen (Sheet1, Sheet2, etc.), allowing navigation between different worksheets. You can rename sheets or add new ones with the (+) button.</li>
                    <li><strong>Workbook:</strong> An Excel file consisting of one or more worksheets. Upon opening, the filename (Book1) and program name (Excel) appear in the title bar.</li>
                </ul>

                <h3>Starting Excel</h3>
                <p>When you open Excel, it can open a blank workbook or a previous file, and you can select from a list of templates. A new workbook contains one worksheet (Sheet1) by default where you enter information. If a workbook has additional pages (or worksheets), you use the sheet tabs to navigate between them.</p>
                <p><strong>Worksheets:</strong> Each worksheet is a grid of rows, columns, and cells:</p>
                <ul>
                    <li><strong>Columns:</strong> Start at the top of the worksheet and go to the bottom, identified by a letter (A, B, C, etc.).</li>
                    <li><strong>Rows:</strong> Start at the left edge of the worksheet and continue to the right, identified by a number (1, 2, 3, etc.).</li>
                    <li><strong>Cells:</strong> Each cell on the grid is identified by the intersection of a column and a row (e.g., A1). You enter information by typing it into the selected or active cell.</li>
                </ul>

                <h3>Changing Workbook and Window Views</h3>
                <p>On the Ribbon, the "View" tab holds commands for controlling the appearance of the displayed workbook. You can also open and arrange new windows and split windows for side-by-side views of different parts of your workbook.</p>
                <ul>
                    <li><strong>Views:</strong> Such as Normal, Page Layout (where you can see margins and page breaks), and Page Break Preview.</li>
                    <li><strong>Split command:</strong> Enables you to view the worksheet in two panes or four quadrants when a worksheet contains a lot of data.</li>
                </ul>
            `
        },
        quiz: getQuizQuestions('excel-q', 20)
    },
    {
        id: 'L4',
        title: "المحاضرة 4: العمل مع البيانات والصيغ في Excel",
        icon: "fa-table-cells",
        audioSrc: "",
        summary: {
            ar: `
                <h3>علامة التبويب Home في Excel</h3>
                <p>علامة التبويب Home في Excel هي مركز الأدوات الأساسية لمعالجة البيانات. تحتوي على مجموعات أوامر مثل Clipboard (للقص والنسخ واللصق)، Font (لتغيير الخطوط والتنسيقات)، Alignment (للمحاذاة)، Number (لتنسيق الأرقام والعملات)، Styles (لتطبيق الأنماط الجاهزة)، Cells (لإدراج وحذف وتنسيق الخلايا)، وEditing (للتعديل والبحث والفرز).</p>

                <h3>أنواع البيانات في Excel</h3>
                <p>يمكنك إدخال ثلاثة أنواع من البيانات في Excel: النص (Text)، الأرقام (Numbers)، والصيغ (Formulas).</p>
                <ul>
                    <li><strong>النص:</strong> غالبًا ما تكون رؤوس الأعمدة أو التسميات.</li>
                    <li><strong>الأرقام:</strong> تستخدم للعمليات الحسابية.</li>
                    <li><strong>الصيغ:</strong> معادلات رياضية تبدأ بعلامة '=' وتستخدم لإجراء العمليات الحسابية على البيانات.</li>
                </ul>

                <h3>تغيير عرض الأعمدة والصفوف</h3>
                <p>في Excel، يعتمد عرض العمود على البيانات الموجودة. عندما تضيف إدخالًا في عمود يتجاوز عرضه، يصبح من الضروري ضبط عرض العمود. يمكنك تغيير عرض العمود يدويًا عن طريق سحب حدود العمود، أو النقر المزدوج على الحدود لضبطه تلقائيًا ليناسب المحتوى.</p>

                <h3>العمليات الحسابية في Excel (ترتيب العمليات)</h3>
                <p>تتبع Excel الترتيب القياسي للعمليات الحسابية (PEMDAS/BODMAS):</p>
                <ol>
                    <li>الأقواس (Parentheses)</li>
                    <li>الأسس (Exponents)</li>
                    <li>الضرب (Multiplication) والقسمة (Division) (من اليسار إلى اليمين)</li>
                    <li>الجمع (Addition) والطرح (Subtraction) (من اليسار إلى اليمين)</li>
                </ol>
                <p>على سبيل المثال: $7+8*3/2-4 = 15$</p>
                <p>أو: $((7+8)*(3/2))-4 = 18.5$</p>

                <h3>فرز البيانات (Sorting Data)</h3>
                <p>يمكن فرز المحتوى أبجديًا، رقميًا، وبطرق أخرى عديدة. يمكنك فرز البيانات في Excel بناءً على عمود واحد أو عدة أعمدة، تصاعديًا أو تنازليًا.</p>

                <h3>المخططات (Charts)</h3>
                <p>يحتوي Excel على عدة أنواع مختلفة من المخططات، مما يتيح لك اختيار النوع الأنسب لبياناتك.</p>
                <ul>
                    <li><strong>المخططات العمودية (Column Charts):</strong> تستخدم أشرطة رأسية لتمثيل البيانات وتُستخدم لمقارنة المعلومات.</li>
                    <li><strong>المخططات الخطية (Line Charts):</strong> تُوصل نقاط البيانات بخطوط، مما يُظهر الزيادات أو النقصانات بمرور الوقت.</li>
                    <li><strong>المخططات الدائرية (Pie Charts):</strong> تُستخدم لمقارنة النسب. كل قيمة تمثل نسبة مئوية من الدائرة الكلية.</li>
                    <li><strong>المخططات الشريطية (Bar Charts):</strong> تستخدم أشرطة أفقية لتمثيل البيانات ومقارنة المعلومات.</li>
                    <li><strong>المخططات المساحية (Area Charts):</strong> تُوصل نقاط البيانات بخطوط ويتم ملء المناطق تحت الخطوط، مما يُظهر حجم التغيير بمرور الوقت.</li>
                    <li><strong>مخططات السطح (Surface Charts):</strong> يتم عرض البيانات عبر منظر طبيعي ثلاثي الأبعاد، وتُستخدم مع مجموعات البيانات الكبيرة لإظهار جميع المعلومات في نفس الوقت.</li>
                </ul>
            `,
            en: `
                <h3>Excel Home Tab</h3>
                <p>The Home tab in Excel is the central hub for essential data manipulation tools. It contains command groups like Clipboard (for cutting, copying, and pasting), Font (for changing fonts and formatting), Alignment (for text alignment), Number (for number and currency formatting), Styles (for applying predefined styles), Cells (for inserting, deleting, and formatting cells), and Editing (for finding, replacing, and sorting).</p>

                <h3>Types of Data in Excel</h3>
                <p>You can enter three types of data into Excel: Text, Numbers, and Formulas.</p>
                <ul>
                    <li><strong>Text:</strong> Often column headers or labels.</li>
                    <li><strong>Numbers:</strong> Used for calculations.</li>
                    <li><strong>Formulas:</strong> Mathematical equations that start with an '=' sign and perform calculations on data.</li>
                </ul>

                <h3>Changing Column and Row Width</h3>
                <p>In Excel, column width is based on the existing data. When you add an entry in a column that exceeds the column's width, it is necessary to adjust the column width. You can manually change the column width by dragging the column boundary, or double-click the boundary to auto-fit the content.</p>

                <h3>Calculations in Excel (Order of Operations)</h3>
                <p>Excel follows the standard order of operations (PEMDAS/BODMAS):</p>
                <ol>
                    <li>Parentheses</li>
                    <li>Exponents</li>
                    <li>Multiplication and Division (left to right)</li>
                    <li>Addition and Subtraction (left to right)</li>
                </ol>
                <p>For example: $7+8*3/2-4 = 15$</p>
                <p>Or: $((7+8)*(3/2))-4 = 18.5$</p>

                <h3>Sorting Data</h3>
                <p>Content can be sorted alphabetically, numerically, and in many other ways. You can sort data in Excel based on one or multiple columns, in ascending or descending order.</p>

                <h3>Charts</h3>
                <p>Excel has several different types of charts, allowing you to choose the one that best fits your data.</p>
                <ul>
                    <li><strong>Column Charts:</strong> Use vertical bars to represent data and are used for comparing information.</li>
                    <li><strong>Line Charts:</strong> The data points are connected with lines, showing increases or decreases over time.</li>
                    <li><strong>Pie Charts:</strong> Used to compare proportions. Each value is a percentage of the pie.</li>
                    <li><strong>Bar Charts:</strong> Use horizontal bars to represent data and compare information.</li>
                    <li><strong>Area Charts:</strong> The data points are connected with lines and the areas under the lines are filled in, showing the magnitude of change over time.</li>
                    <li><strong>Surface Charts:</strong> Data is displayed across a 3D landscape, used with large datasets to show all information at the same time.</li>
                </ul>
            `
        },
        quiz: getQuizQuestions('excel-q', 20)
    },
    {
        id: 'L5',
        title: "المحاضرة 5: أساسيات Microsoft PowerPoint",
        icon: "fa-file-powerpoint",
        audioSrc: "",
        summary: {
            ar: `
                <h3>واجهة PowerPoint</h3>
                <p>عند فتح PowerPoint لأول مرة، تظهر شاشة البدء. يمكنك إنشاء عرض تقديمي جديد، واختيار قالب، والوصول إلى العروض التقديمية التي قمت بتحريرها مؤخرًا. من شاشة البدء، حدد "عرض تقديمي فارغ" (Blank Presentation) للوصول إلى واجهة PowerPoint.</p>

                <h3>العمل مع بيئة PowerPoint</h3>
                <p>يتضمن ذلك الشريط (Ribbon) وشريط أدوات الوصول السريع (Quick Access Toolbar)، حيث ستجد الأوامر اللازمة لأداء المهام الشائعة.</p>
                <ul>
                    <li><strong>الشريط:</strong> يحتوي على علامات تبويب متعددة، كل منها يحتوي على عدة مجموعات من الأوامر. على سبيل المثال، مجموعة "Font" في علامة التبويب "Home" تحتوي على أوامر لتنسيق النص في عرضك التقديمي.</li>
                    <li><strong>أشرطة التمرير:</strong> تُستخدم للتحرك في الشريحة.</li>
                    <li><strong>شريط الحالة:</strong> يُظهر معلومات مثل رقم الشريحة والكلمات.</li>
                    <li><strong>عناصر التحكم في التكبير/التصغير:</strong> تضبط حجم الشرائح على شاشتك.</li>
                    <li><strong>المسطرة، الإرشادات (Guides)، والشبكات (Gridlines):</strong> هذه الأدوات تسهل محاذاة الكائنات على الشرائح بدقة. ما عليك سوى النقر على مربعات الاختيار في مجموعة "Show" ضمن علامة التبويب "View" لإظهار وإخفاء هذه الأدوات.</li>
                </ul>

                <h3>طرق العرض في PowerPoint (View Options)</h3>
                <ul>
                    <li><strong>العرض العادي (Normal View):</strong> هو العرض الافتراضي، حيث تقوم بإنشاء وتحرير الشرائح. تظهر الشريحة الكبيرة في المنتصف، وقائمة بالشرائح المصغرة (Thumbnails) على اليسار.</li>
                    <li><strong>عرض فارز الشرائح (Slide Sorter View):</strong> نسخة مصغرة لكل شريحة. يمكنك سحب وإفلات الشرائح لإعادة ترتيبها بسرعة.</li>
                    <li><strong>عرض القراءة (Reading View):</strong> لعرض معاينة لعرضك التقديمي في وضع ملء الشاشة، ولكن مع وجود شريط مهام متاح في الأسفل.</li>
                    <li><strong>عرض الشرائح (Slide Show View):</strong> لتقديم العرض أمام الجمهور. يبدأ هذا الأمر العرض التقديمي من الشريحة الحالية. يمكنك أيضًا الضغط على F5 لبدء العرض من البداية.</li>
                    <li><strong>عرض مقدم العرض (Presenter View):</strong> يتيح للمقدم رؤية الملاحظات الإضافية والشريحة التالية، بينما يرى الجمهور الشريحة الحالية فقط.</li>
                </ul>

                <h3>التعامل مع الشرائح</h3>
                <p>يمكنك إضافة شرائح جديدة من علامة التبويب "Home". لكل شريحة، يمكنك اختيار تخطيط (Layout) محدد لتنظيم المحتوى (مثل عنوان ومحتوى، عنوان فقط، شريحة فارغة).</p>
            `,
            en: `
                <h3>PowerPoint Interface</h3>
                <p>When you open PowerPoint for the first time, the Start Screen will appear. You can create a new presentation, choose a template, and access your recently edited presentations. From the Start Screen, locate and select "Blank Presentation" to access the PowerPoint interface.</p>

                <h3>Working with the PowerPoint Environment</h3>
                <p>This includes the Ribbon and Quick Access Toolbar, where you will find the commands to perform common tasks.</p>
                <ul>
                    <li><strong>The Ribbon:</strong> Contains multiple tabs, each with several groups of commands. For example, the "Font" group on the "Home" tab contains commands for formatting text in your presentation.</li>
                    <li><strong>Scroll bars:</strong> Used to navigate in the slide.</li>
                    <li><strong>Status bar:</strong> Shows information like slide number and words.</li>
                    <li><strong>Zoom controls:</strong> Adjust how large the slides appear on your screen.</li>
                    <li><strong>Ruler, guides, and gridlines:</strong> These tools make it easier to align objects on your slides accurately. Simply click the check boxes in the "Show" group on the "View" tab to show and hide these tools.</li>
                </ul>

                <h3>PowerPoint View Options</h3>
                <ul>
                    <li><strong>Normal View:</strong> The default view, where you create and edit slides. The large slide appears in the center, and a list of thumbnail slides appears on the left.</li>
                    <li><strong>Slide Sorter View:</strong> A thumbnail version of each slide. You can drag and drop slides to reorder them quickly.</li>
                    <li><strong>Reading View:</strong> To see a preview of your presentation in a full-screen mode, but with a taskbar available at the bottom.</li>
                    <li><strong>Slide Show View:</strong> To present to an audience. This command will begin the presentation from the current slide. You can also press F5 on the keyboard to start from the beginning.</li>
                    <li><strong>Presenter View:</strong> Allows the presenter to see additional notes and the next slide, while the audience sees only the current slide.</li>
                </ul>

                <h3>Dealing with Slides</h3>
                <p>You can add new slides from the "Home" tab. For each slide, you can choose a specific layout to organize content (e.g., Title and Content, Title Only, Blank Slide).</p>
            `
        },
        quiz: getQuizQuestions('ppt-q', 20)
    },
    {
        id: 'L6',
        title: "المحاضرة 6: تصميم وتخصيص العروض التقديمية في PowerPoint",
        icon: "fa-brush",
        audioSrc: "",
        summary: {
            ar: `
                <h3>تصميم الشرائح (Designs)</h3>
                <p>تحتوي علامة التبويب "Design" على مجموعات من السمات (Themes) التي توفر مظاهر احترافية لعرضك التقديمي. يمكن أن تتضمن هذه السمات ألوانًا مختلفة (Variants) وخطوطًا وتأثيرات وأنماط خلفية. يمكنك أيضًا تخصيص الألوان والخطوط والخلفيات لإنشاء سمة فريدة.</p>
                <ul>
                    <li><strong>السمات (Themes):</strong> مجموعة من التنسيقات المعدة مسبقًا التي تُطبق على العرض التقديمي بالكامل.</li>
                    <li><strong>الأنماط المختلفة (Variants):</strong> هي خيارات ألوان وأنماط مختلفة داخل نفس السمة.</li>
                    <li><strong>تخصيص الألوان والخطوط:</strong> يمكنك تعديل الألوان والخطوط المستخدمة في السمة لتتناسب مع احتياجاتك.</li>
                </ul>

                <h3>إضافة الجداول إلى الشرائح (Adding Tables to Slides)</h3>
                <p>يمكنك إضافة الجداول من علامة التبويب "Insert" لتنظيم البيانات وعرضها بشكل منظم. بعد إدراج الجدول، تظهر "أدوات الجدول" (Table Tools) مع علامتي تبويب جديدتين: "Design" و"Layout" لتنسيق الجدول وتعديل بنيته.</p>
                <ul>
                    <li><strong>أدوات الجدول - Design:</strong> لتغيير أنماط الجدول (Table Styles)، التظليل (Shading)، والحدود (Borders).</li>
                    <li><strong>أدوات الجدول - Layout:</strong> لتعديل بنية الجدول، مثل إضافة أو حذف صفوف/أعمدة، ودمج الخلايا (Merge Cells)، وتغيير حجمها.</li>
                </ul>

                <h3>إضافة الرسوم البيانية إلى الشرائح (Adding Charts to Slides)</h3>
                <p>يمكنك إدراج الرسوم البيانية من علامة التبويب "Insert" لتوضيح البيانات الرقمية بصريًا. عند إدراج رسم بياني، يفتح Excel تلقائيًا لإدخال البيانات، ويتيح PowerPoint لك اختيار نوع الرسم البياني (عمودي، دائري، خطي، إلخ).</p>
                <ul>
                    <li><strong>أدوات المخطط (Chart Tools):</strong> بعد إدراج المخطط، تظهر علامتا تبويب "Design" و"Format" لتخصيص المخطط وتنسيقه.</li>
                </ul>

                <h3>إضافة ملفات الوسائط إلى الشرائح (Adding Media Files)</h3>
                <p>يمكنك إضافة ملفات صوتية ومقاطع فيديو إلى شرائحك لتعزيز التفاعل وجذب الجمهور.</p>
                <ul>
                    <li><strong>إضافة مقطع صوتي (Audio Clip):</strong> من علامة التبويب "Insert" > "Audio". يمكنك اختيار ملف صوتي من جهاز الكمبيوتر أو تسجيل صوت. بعد إدراج الصوت، تظهر علامة تبويب "Playback" التي تتيح لك التحكم في خيارات التشغيل (مثل التشغيل التلقائي، التشغيل عبر الشرائح، تكرار التشغيل، مستوى الصوت).</li>
                    <li><strong>إضافة مقطع فيديو (Video Clip):</strong> من علامة التبويب "Insert" > "Video". يمكنك إدراج فيديو من ملف على جهاز الكمبيوتر، أو فيديو عبر الإنترنت (مثل YouTube). بعد إدراج الفيديو، تظهر علامتا تبويب "Format" و"Playback" للتحكم في مظهر الفيديو وخيارات التشغيل.</li>
                </ul>
            `,
            en: `
                <h3>Designing Slides (Designs)</h3>
                <p>The "Design" tab contains groups of themes that provide professional looks for your presentation. These themes can include different colors (Variants), fonts, effects, and background styles. You can also customize colors, fonts, and backgrounds to create a unique theme.</p>
                <ul>
                    <li><strong>Themes:</strong> A set of predefined formats applied to the entire presentation.</li>
                    <li><strong>Variants:</strong> Different color and style options within the same theme.</li>
                    <li><strong>Customizing Colors and Fonts:</strong> You can modify the colors and fonts used in the theme to suit your needs.</li>
                </ul>

                <h3>Adding Tables to Slides</h3>
                <p>You can add tables from the "Insert" tab to organize and display data systematically. After inserting a table, "Table Tools" appear with two new tabs: "Design" and "Layout" to format and modify the table structure.</p>
                <ul>
                    <li><strong>Table Tools - Design:</strong> For changing table styles, shading, and borders.</li>
                    <li><strong>Table Tools - Layout:</strong> For modifying table structure, such as adding or deleting rows/columns, merging cells, and resizing them.</li>
                </ul>

                <h3>Adding Charts to Slides</h3>
                <p>You can insert charts from the "Insert" tab to visualize numerical data. When you insert a chart, Excel automatically opens for data entry, and PowerPoint allows you to choose the chart type (column, pie, line, etc.).</p>
                <ul>
                    <li><strong>Chart Tools:</strong> After inserting the chart, "Design" and "Format" tabs appear for customizing and formatting the chart.</li>
                </ul>

                <h3>Adding Media Files to Slides</h3>
                <p>You can add audio and video clips to your slides to enhance interaction and engage the audience.</p>
                <ul>
                    <li><strong>Adding an Audio Clip:</strong> From the "Insert" tab > "Audio." You can choose an audio file from your computer or record audio. After inserting the audio, a "Playback" tab appears, allowing you to control playback options (e.g., start automatically, play across slides, loop until stopped, volume).</li>
                    <li><strong>Adding a Video Clip:</strong> From the "Insert" tab > "Video." You can insert a video from a file on your computer or an online video (e.g., YouTube). After inserting the video, "Format" and "Playback" tabs appear to control video appearance and playback options.</li>
                </ul>
            `
        },
        quiz: getQuizQuestions('ppt-q', 20)
    },
    {
        id: 'L7',
        title: "المحاضرة 7: أساسيات Microsoft Access",
        icon: "fa-database",
        audioSrc: "",
        summary: {
            ar: `
                <h3>ما هو Microsoft Access؟</h3>
                <p>Microsoft Access هو نظام إدارة قواعد بيانات علائقية (RDBMS) تم تطويره بواسطة Microsoft. يجمع بين واجهة مستخدم رسومية وأدوات تطوير برامج، ويُستخدم لتخزين وإدارة وتحليل كميات كبيرة من البيانات المترابطة بكفاءة. يُستخدم غالبًا في حلول قواعد البيانات الصغيرة والمتوسطة.</p>

                <h3>مفاهيم قواعد البيانات الرئيسية</h3>
                <ul>
                    <li><strong>قاعدة البيانات العلائقية (Relational Database):</strong> مجموعة من المعلومات تنظم البيانات في علاقات محددة مسبقًا حيث يتم تخزين البيانات في جدول واحد أو أكثر من الأعمدة والصفوف، مما يسهل رؤية وفهم كيفية ارتباط هياكل البيانات المختلفة ببعضها البعض.</li>
                    <li><strong>الجدول (Table):</strong> هو أساس قاعدة البيانات؛ ويخزن البيانات في صفوف (سجلات) وأعمدة (حقول).</li>
                    <li><strong>السجل (Record):</strong> مجموعة كاملة من الحقول المترابطة (صف في الجدول).</li>
                    <li><strong>الحقل (Field):</strong> قطعة واحدة من البيانات أو سمة لسجل (عمود في الجدول).</li>
                    <li><strong>المفتاح الأساسي (Primary Key):</strong> معرف فريد لكل سجل في الجدول. لا يمكن أن يحتوي على قيم مكررة أو فارغة (Null).</li>
                </ul>

                <h3>نموذج قاعدة البيانات العلائقية</h3>
                <p>يدعم Access النموذج العلائقي: يمكن ربط جداول متعددة باستخدام المفاتيح (الأساسية والأجنبية). هذا يقلل من تكرار البيانات ويساعد في الحفاظ على تكامل البيانات واتساقها.</p>

                <h3>واجهة Access</h3>
                <ul>
                    <li><strong>شريط الأدوات (Ribbon Toolbar):</strong> يحتوي على أوامر مجمعة (Home, Create, External Data, إلخ).</li>
                    <li><strong>لوحة التنقل (Navigation Pane):</strong> تسرد جميع الكائنات – الجداول (Tables)، الاستعلامات (Queries)، النماذج (Forms)، التقارير (Reports).</li>
                    <li><strong>علامات تبويب الكائنات (Object Tabs):</strong> تسمح بفتح كائنات متعددة في وقت واحد.</li>
                    <li><strong>شريط الحالة (Status Bar):</strong> يُظهر الحالة وخيارات العرض.</li>
                </ul>

                <h3>إنشاء الجداول - عرض ورقة البيانات (Datasheet View)</h3>
                <p>يُمكّن إدخال البيانات مباشرة مثل Excel. يتم إنشاء أسماء الحقول تلقائيًا ولكن يمكن إعادة تسميتها. يتم استنتاج أنواع الحقول ولكن يجب مراجعتها.</p>

                <h3>إنشاء الجداول - عرض التصميم (Design View)</h3>
                <p>يوفر تحكمًا كاملاً:</p>
                <ul>
                    <li>تحديد أسماء الحقول.</li>
                    <li>تعيين أنواع البيانات (نص قصير، رقم، تاريخ، عملة، إلخ).</li>
                    <li>إضافة أوصاف للتوثيق.</li>
                    <li>تعيين المفتاح الأساسي.</li>
                </ul>

                <h3>أنواع البيانات الشائعة في Access</h3>
                <ul>
                    <li><strong>نص قصير (Short Text):</strong> للأسماء، التسميات، النصوص القصيرة (255 حرفًا كحد أقصى).</li>
                    <li><strong>نص طويل (Long Text):</strong> للملاحظات الأطول.</li>
                    <li><strong>رقم (Number):</strong> للحسابات.</li>
                    <li><strong>عملة (Currency):</strong> للقيم النقدية.</li>
                    <li><strong>تاريخ/وقت (Date/Time):</strong> للتواريخ والأوقات.</li>
                    <li><strong>ترقيم تلقائي (AutoNumber):</strong> لتوليد أرقام فريدة تلقائيًا.</li>
                    <li><strong>نعم/لا (Yes/No):</strong> للقيم المنطقية (True/False).</li>
                    <li><strong>كائن OLE (OLE Object):</strong> لتخزين كائنات من تطبيقات أخرى (مثل الصور).</li>
                    <li><strong>ارتباط تشعبي (Hyperlink):</strong> لعناوين الويب أو البريد الإلكتروني.</li>
                    <li><strong>مرفق (Attachment):</strong> لإرفاق ملفات مثل الصور والمستندات.</li>
                    <li><strong>محسوب (Calculated):</strong> لنتائج التعبيرات التي تحددها.</li>
                </ul>
            `,
            en: `
                <h3>What is Microsoft Access?</h3>
                <p>Microsoft Access is a Relational Database Management System (RDBMS) developed by Microsoft. It combines a graphical user interface with software development tools, used for storing, managing, and analyzing large volumes of related data efficiently. It is often used in small-to-medium-sized database solutions.</p>

                <h3>Key Database Concepts</h3>
                <ul>
                    <li><strong>Relational Database:</strong> A collection of information that organizes data in predefined relationships where data is stored in one or more tables of columns and rows, making it easy to see and understand how different data structures relate to each other.</li>
                    <li><strong>Table:</strong> The foundation of a database; stores data in rows (records) and columns (fields).</li>
                    <li><strong>Record:</strong> A complete set of related fields (a row in a table).</li>
                    <li><strong>Field:</strong> A single piece of data or attribute for a record.</li>
                    <li><strong>Primary Key:</strong> A unique identifier for each record in a table. It cannot contain duplicate or Null values.</li>
                </ul>

                <h3>Relational Database Model</h3>
                <p>Access supports the relational model: Multiple tables can be related using keys (Primary and Foreign). This eliminates data redundancy and helps maintain data integrity and consistency.</p>

                <h3>Access Interface</h3>
                <ul>
                    <li><strong>Ribbon Toolbar:</strong> Contains grouped commands (Home, Create, External Data, etc.).</li>
                    <li><strong>Navigation Pane:</strong> Lists all objects – Tables, Queries, Forms, Reports.</li>
                    <li><strong>Object Tabs:</strong> Allows multiple objects to be opened at once.</li>
                    <li><strong>Status Bar:</strong> Shows status and view options.</li>
                </ul>

                <h3>Creating Tables - Datasheet View</h3>
                <p>Enables direct data entry like Excel. Field names are auto-generated but can be renamed. Field types are inferred but should be reviewed.</p>

                <h3>Creating Tables - Design View</h3>
                <p>Provides complete control:</p>
                <ul>
                    <li>Define field names.</li>
                    <li>Assign data types (Short Text, Number, Date, etc.).</li>
                    <li>Add descriptions for documentation.</li>
                    <li>Set Primary Key.</li>
                </ul>

                <h3>Common Data Types in Access</h3>
                <ul>
                    <li><strong>Short Text:</strong> For names, labels, short descriptions (max 255 characters).</li>
                    <li><strong>Long Text:</strong> For longer notes.</li>
                    <li><strong>Number:</strong> For calculations.</li>
                    <li><strong>Currency:</strong> For monetary values.</li>
                    <li><strong>Date/Time:</strong> For dates and times.</li>
                    <li><strong>AutoNumber:</strong> For automatically generated unique numbers.</li>
                    <li><strong>Yes/No:</strong> For logical values (True/False).</li>
                    <li><strong>OLE Object:</strong> To embed objects from other applications (e.g., images).</li>
                    <li><strong>Hyperlink:</strong> For web or email addresses.</li>
                    <li><strong>Attachment:</strong> To attach files like images and documents.</li>
                    <li><strong>Calculated:</strong> For results of expressions you define.</li>
                </ul>
            `
        },
        quiz: getQuizQuestions('access-q', 20)
    },
    {
        id: 'L8',
        title: "المحاضرة 8: العمل مع الجداول، النماذج، والاستعلامات في Access",
        icon: "fa-table",
        audioSrc: "",
        summary: {
            ar: `
                <h3>العمل مع الجداول (Working with Tables)</h3>
                <p>بعد إنشاء الجدول في عرض التصميم (Design View) وإضافة الحقول وأنواع البيانات، يمكنك إدخال البيانات في عرض ورقة البيانات (Datasheet View).</p>
                <ul>
                    <li><strong>فرز السجلات (Sorting Records):</strong> يمكنك فرز البيانات في الجدول أبجديًا، رقميًا، أو حسب التاريخ. يسمح لك Access بالفرز تصاعديًا (A-Z, 0-9) أو تنازليًا (Z-A, 9-0) باستخدام أزرار الفرز في علامة التبويب Home.</li>
                    <li><strong>تصفية السجلات (Filtering Records):</strong> تتيح لك تصفية البيانات عرض مجموعة فرعية من السجلات التي تلبي معايير محددة. يمكنك تطبيق عوامل تصفية سريعة من رأس العمود، أو استخدام عامل تصفية النص/الرقم/التاريخ لتصفية أكثر تعقيدًا.</li>
                </ul>

                <h3>العمل مع العلاقات (Working with Relationships)</h3>
                <p>تُعد العلاقات أساس قواعد البيانات العلائقية، حيث تربط الجداول ببعضها البعض لتقليل تكرار البيانات وضمان تكاملها.</p>
                <ul>
                    <li><strong>أنواع العلاقات:</strong>
                        <ul>
                            <li><strong>علاقة رأس بأطراف (One-to-Many):</strong> السجل الواحد في الجدول الأول (الجدول الرئيسي) يمكن أن يرتبط بسجلات متعددة في الجدول الثاني (الجدول الفرعي). هذا هو النوع الأكثر شيوعًا.</li>
                            <li><strong>علاقة رأس برأس (One-to-One):</strong> السجل الواحد في الجدول الأول يرتبط بسجل واحد فقط في الجدول الثاني. تُستخدم عندما يكون هناك الكثير من الحقول في جدول واحد أو لأسباب أمنية.</li>
                            <li><strong>علاقة أطراف بأطراف (Many-to-Many):</strong> السجل الواحد في الجدول الأول يمكن أن يرتبط بسجلات متعددة في الجدول الثاني، والعكس صحيح. تتطلب هذه العلاقة وجود "جدول وسيط" (Junction Table) لحل العلاقة.</li>
                        </ul>
                    </li>
                    <li><strong>إنشاء العلاقات:</strong> يتم إنشاء العلاقات عبر نافذة "Relationships" في علامة التبويب "Database Tools". تقوم بسحب المفتاح الأساسي من جدول إلى المفتاح الأجنبي في الجدول الآخر.</li>
                    <li><strong>الرسم التخطيطي للعلاقات (Entity Relationship Diagram - ERD):</strong> تمثيل مرئي للجداول والعلاقات بينها، يوضح كيفية ارتباط البيانات.</li>
                </ul>

                <h3>العمل مع الاستعلامات (Working with Queries)</h3>
                <p>الاستعلامات هي كائنات قاعدة بيانات تُستخدم لاسترداد البيانات من جدول واحد أو أكثر بناءً على معايير محددة، ثم عرض تلك البيانات بتنسيق محدد.</p>
                <ul>
                    <li><strong>إنشاء استعلام:</strong> من علامة التبويب "Create"، يمكنك اختيار "Query Wizard" (معالج الاستعلامات) لإنشاء استعلامات بسيطة، أو "Query Design" (تصميم الاستعلام) للتحكم الكامل.</li>
                    <li><strong>تصميم الاستعلام:</strong> في عرض تصميم الاستعلام، يمكنك:
                        <ul>
                            <li>إضافة الجداول التي تحتوي على البيانات التي تريد استردادها.</li>
                            <li>تحديد الحقول التي تريد عرضها في نتائج الاستعلام.</li>
                            <li>تعيين المعايير (Criteria) لتصفية السجلات (مثل <code>Score > 80</code>).</li>
                            <li>تحديد ترتيب الفرز (Sort order) (تصاعدي/تنازلي).</li>
                        </ul>
                    </li>
                    <li><strong>أنواع الاستعلامات:</strong>
                        <ul>
                            <li><strong>استعلامات التحديد (Select Queries):</strong> لاسترداد البيانات.</li>
                            <li><strong>استعلامات الإجراء (Action Queries):</strong> لتعديل البيانات (مثل Update Query لتحديث السجلات، Delete Query لحذف السجلات، Append Query لإضافة سجلات، Make-Table Query لإنشاء جدول جديد من نتائج الاستعلام).</li>
                        </ul>
                    </li>
                </ul>
            `,
            en: `
                <h3>Working with Tables</h3>
                <p>After creating a table in Design View and adding fields and data types, you can enter data in Datasheet View.</p>
                <ul>
                    <li><strong>Sorting Records:</strong> You can sort data in a table alphabetically, numerically, or by date. Access allows you to sort in ascending (A-Z, 0-9) or descending (Z-A, 9-0) order using the sort buttons on the Home tab.</li>
                    <li><strong>Filtering Records:</strong> Filtering data allows you to display a subset of records that meet specific criteria. You can apply quick filters from a column header or use text/number/date filters for more complex filtering.</li>
                </ul>

                <h3>Working with Relationships</h3>
                <p>Relationships are the foundation of relational databases, linking tables together to reduce data redundancy and ensure data integrity.</p>
                <ul>
                    <li><strong>Types of Relationships:</strong>
                        <ul>
                            <li><strong>One-to-Many:</strong> One record in the first table (parent table) can match many records in the second table (child table). This is the most common type.</li>
                            <li><strong>One-to-One:</strong> One record in the first table matches exactly one record in the second table. Used when there are too many fields in one table or for security reasons.</li>
                            <li><strong>Many-to-Many:</strong> One record in the first table can match many records in the second table, and vice-versa. This relationship requires an intermediary "Junction Table" to resolve it.</li>
                        </ul>
                    </li>
                    <li><strong>Creating Relationships:</strong> Relationships are created via the "Relationships" window in the "Database Tools" tab. You drag the Primary Key from one table to the Foreign Key in another.</li>
                    <li><strong>Entity Relationship Diagram (ERD):</strong> A visual representation of tables and their relationships, showing how data is interconnected.</li>
                </ul>

                <h3>Working with Queries</h3>
                <p>Queries are database objects used to retrieve data from one or more tables based on specified criteria, and then display that data in a specified format.</p>
                <ul>
                    <li><strong>Creating a Query:</strong> From the "Create" tab, you can choose "Query Wizard" for simple queries, or "Query Design" for full control.</li>
                    <li><strong>Query Design:</strong> In Query Design view, you can:
                        <ul>
                            <li>Add tables that contain the data you want to retrieve.</li>
                            <li>Select the fields you want to display in the query results.</li>
                            <li>Set criteria to filter records (e.g., <code>Score > 80</code>).</li>
                            <li>Specify the sort order (ascending/descending).</li>
                        </ul>
                    </li>
                    <li><strong>Types of Queries:</strong>
                        <ul>
                            <li><strong>Select Queries:</strong> For retrieving data.</li>
                            <li><strong>Action Queries:</strong> For modifying data (e.g., Update Query, Delete Query, Append Query, Make-Table Query).</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        quiz: getQuizQuestions('access-q', 20)
    },
    {
        id: 'L9',
        title: "المحاضرة 9: استخدام أوامر SQL مع Microsoft Access",
        icon: "fa-code",
        audioSrc: "",
        summary: {
            ar: `
                <h3>مقدمة إلى SQL</h3>
                <p>SQL (Structured Query Language) هي لغة قياسية للوصول إلى قواعد البيانات ومعالجتها. أصبحت SQL معيارًا لمعهد المعايير الوطنية الأمريكية (ANSI) في عام 1986، والمنظمة الدولية للتوحيد القياسي (ISO) في عام 1987. يدعم Microsoft Access استخدام أوامر SQL القوية للتعامل مع البيانات وهيكل قاعدة البيانات.</p>

                <h3>ماذا يمكن أن تفعله SQL في MS Access؟</h3>
                <ul>
                    <li>يمكن لـ SQL تنفيذ الاستعلامات واسترداد البيانات من قاعدة البيانات.</li>
                    <li>يمكن لـ SQL إدراج سجلات في قاعدة البيانات (INSERT INTO).</li>
                    <li>يمكن لـ SQL تحديث سجلات في قاعدة البيانات (UPDATE).</li>
                    <li>يمكن لـ SQL حذف سجلات من قاعدة البيانات (DELETE).</li>
                    <li>يمكن لـ SQL إنشاء جداول جديدة في قاعدة البيانات (CREATE TABLE).</li>
                    <li>يمكن لـ SQL حذف جداول من قاعدة البيانات (DROP TABLE).</li>
                    <li>يمكن لـ SQL تعديل هيكل الجداول في قاعدة البيانات (ALTER TABLE).</li>
                </ul>

                <h3>أنواع الاستعلامات الرئيسية في Access باستخدام SQL</h3>
                <ul>
                    <li><strong>SELECT:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> استرداد البيانات من الجداول.</li>
                            <li><strong>مثال:</strong> <code>SELECT * FROM Scores2;</code> (يحدد جميع الأعمدة من جدول Scores2)</li>
                            <li><strong>مع JOIN:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID;</code> (يجمع البيانات من جداول متعددة).</li>
                            <li><strong>مع WHERE:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID WHERE Scores2.Score > 80;</code> (يصفي السجلات بناءً على شرط).</li>
                            <li><strong>مع ORDER BY:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID WHERE Scores2.Score > 80 ORDER BY Students.Name;</code> (يفرز النتائج).</li>
                        </ul>
                    </li>
                    <li><strong>UPDATE:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> تعديل السجلات الموجودة.</li>
                            <li><strong>مثال:</strong> <code>UPDATE Scores2 SET Score = 50 WHERE Score < 50 AND Score >= 47;</code> (يحدث قيمة Score لشروط معينة).</li>
                        </ul>
                    </li>
                    <li><strong>DELETE:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> إزالة سجلات من جدول.</li>
                            <li><strong>مثال:</strong> <code>DELETE FROM Scores2 WHERE Std_ID = 1 AND Subject_Id = 1;</code> (يحذف سجلًا محددًا).</li>
                        </ul>
                    </li>
                    <li><strong>INSERT INTO:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> إضافة سجلات جديدة إلى جدول.</li>
                            <li><strong>مثال:</strong> <code>INSERT INTO Scores2 (Std_ID, Subject_Id, Score) VALUES (1, 1, 95);</code> (يضيف سجلًا جديدًا).</li>
                        </ul>
                    </li>
                    <li><strong>CREATE TABLE:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> إنشاء جدول جديد.</li>
                            <li><strong>مثال:</strong> <code>CREATE TABLE Courses (CourseID AUTOINCREMENT PRIMARY KEY, CourseName TEXT(100), Credits INT);</code> (ينشئ جدول Courses).</li>
                        </ul>
                    </li>
                    <li><strong>DROP TABLE:</strong>
                        <ul>
                            <li><strong>الغرض:</strong> حذف جدول بالكامل من قاعدة البيانات.</li>
                            <li><strong>مثال:</strong> <code>DROP TABLE Courses;</code> (يحذف جدول Courses).</li>
                        </ul>
                    </li>
                </ul>
            `,
            en: `
                <h3>Introduction to SQL</h3>
                <p>SQL (Structured Query Language) is a standard language for accessing and manipulating databases. SQL became a standard of the American National Standards Institute (ANSI) in 1986, and the International Organization for Standardization (ISO) in 1987. Microsoft Access supports the use of powerful SQL commands to interact with data and database structure.</p>

                <h3>What Can SQL do in MS Access?</h3>
                <ul>
                    <li>SQL can execute queries and retrieve data from a database.</li>
                    <li>SQL can insert records in a database (INSERT INTO).</li>
                    <li>SQL can update records in a database (UPDATE).</li>
                    <li>SQL can delete records from a database (DELETE).</li>
                    <li>SQL can create new tables in a database (CREATE TABLE).</li>
                    <li>SQL can delete tables from a database (DROP TABLE).</li>
                    <li>SQL can alter tables structure in a database (ALTER TABLE).</li>
                </ul>

                <h3>Main SQL Query Types in Access</h3>
                <ul>
                    <li><strong>SELECT:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Retrieve data from tables.</li>
                            <li><strong>Example:</strong> <code>SELECT * FROM Scores2;</code> (Selects all columns from Scores2 table)</li>
                            <li><strong>With JOIN:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID;</code> (Combines data from multiple tables).</li>
                            <li><strong>With WHERE:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID WHERE Scores2.Score > 80;</code> (Filters records based on a condition).</li>
                            <li><strong>With ORDER BY:</strong> <code>SELECT Students.Name, Subjects.Name, Scores2.Score FROM (Scores2 LEFT JOIN Students ON Students.ID = Scores2.Std_ID) LEFT JOIN Subjects ON Scores2.Subject_Id = Subjects.ID WHERE Scores2.Score > 80 ORDER BY Students.Name;</code> (Sorts the results).</li>
                        </ul>
                    </li>
                    <li><strong>UPDATE:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Modify existing records.</li>
                            <li><strong>Example:</strong> <code>UPDATE Scores2 SET Score = 50 WHERE Score < 50 AND Score >= 47;</code> (Updates the Score value for specific conditions).</li>
                        </ul>
                    </li>
                    <li><strong>DELETE:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Remove records from a table.</li>
                            <li><strong>Example:</strong> <code>DELETE FROM Scores2 WHERE Std_ID = 1 AND Subject_Id = 1;</code> (Deletes a specific record).</li>
                        </ul>
                    </li>
                    <li><strong>INSERT INTO:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Add new records to a table.</li>
                            <li><strong>Example:</strong> <code>INSERT INTO Scores2 (Std_ID, Subject_Id, Score) VALUES (1, 1, 95);</code> (Adds a new record).</li>
                        </ul>
                    </li>
                    <li><strong>CREATE TABLE:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Create a new table.</li>
                            <li><strong>Example:</strong> <code>CREATE TABLE Courses (CourseID AUTOINCREMENT PRIMARY KEY, CourseName TEXT(100), Credits INT);</code> (Creates the Courses table).</li>
                        </ul>
                    </li>
                    <li><strong>DROP TABLE:</strong>
                        <ul>
                            <li><strong>Purpose:</strong> Delete a table entirely from a database.</li>
                            <li><strong>Example:</strong> <code>DROP TABLE Courses;</code> (Deletes the Courses table).</li>
                        </ul>
                    </li>
                </ul>
            `
        },
        quiz: getQuizQuestions('access-q', 20)
    },
    {
        id: 'L7_office',
        title: "Microsoft Office Concepts",
        icon: "fa-lightbulb",
        audioSrc: "",
        summary: {
            ar: `
                <h3>مفاهيم عامة في Microsoft Office</h3>
                <p>تتناول هذه المحاضرة بعض المفاهيم الأساسية المشتركة عبر تطبيقات Microsoft Office المختلفة، مما يساعد على فهم أعمق للبيئة المتكاملة التي توفرها Microsoft.</p>

                <h4>المفاهيم المشتركة:</h4>
                <ul>
                    <li><strong>الشريط (Ribbon):</strong> هو واجهة المستخدم الرئيسية في معظم تطبيقات Office الحديثة، وتنظم الأوامر في علامات تبويب ومجموعات لسهولة الوصول إليها.</li>
                    <li><strong>شريط أدوات الوصول السريع (Quick Access Toolbar):</strong> شريط قابل للتخصيص يوفر وصولاً سريعًا للأوامر الأكثر استخدامًا مثل الحفظ، والتراجع، والإعادة.</li>
                    <li><strong>القوالب (Templates):</strong> مستندات أو عروض تقديمية أو جداول بيانات مصممة مسبقًا توفر بنية وتنسيقًا جاهزًا للمستخدمين للبدء بسرعة.</li>
                    <li><strong>الرأس والتذييل (Header and Footer):</strong> أقسام تظهر في أعلى وأسفل كل صفحة (في Word) أو شريحة (في PowerPoint)، وتستخدم لإضافة معلومات متكررة مثل أرقام الصفحات، التواريخ، أو شعارات الشركة.</li>
                    <li><strong>طرق العرض (Views):</strong> تتيح طرق العرض المختلفة للمستخدمين التفاعل مع المستند أو العرض التقديمي بطرق مختلفة (مثل Print Layout, Read Mode, Slide Sorter).</li>
                    <li><strong>عناصر التحكم في التكبير/التصغير (Zoom Control):</strong> أداة لضبط مستوى التكبير أو التصغير للمحتوى المعروض على الشاشة.</li>
                </ul>

                <h4>التعريفات والمصطلحات:</h4>
                <ul>
                    <li><strong>Microsoft Word:</strong> برنامج معالجة كلمات لإنشاء وتحرير وتنسيق المستندات.</li>
                    <li><strong>Microsoft Excel:</strong> تطبيق جداول بيانات لتنظيم وتحليل وتصور البيانات.</li>
                    <li><strong>Microsoft PowerPoint:</strong> برنامج عروض تقديمية لإنشاء الشرائح التقديمية.</li>
                    <li><strong>Nonprinting Characters:</strong> رموز مخفية (مثل المسافات وعلامات الفقرات) تساعد في تنسيق المستند ولكن لا تظهر في الطباعة.</li>
                    <li><strong>Document Pane:</strong> المنطقة الرئيسية في Word حيث يتم كتابة وتحرير النص.</li>
                    <li><strong>Workbook (Excel):</strong> ملف يحتوي على ورقة عمل واحدة أو أكثر.</li>
                    <li><strong>Cell (Excel):</strong> التقاطع بين صف وعمود في ورقة العمل.</li>
                    <li><strong>Formula (Excel):</strong> معادلة رياضية تُدخل لإجراء حسابات.</li>
                    <li><strong>Slide (PowerPoint):</strong> صفحة واحدة في العرض التقديمي.</li>
                    <li><strong>Transition (PowerPoint):</strong> تأثير بصري بين الشرائح.</li>
                    <li><strong>Animation (PowerPoint):</strong> حركة أو تأثير بصري يطبق على كائن واحد على الشريحة.</li>
                    <li><strong>Slide Master (PowerPoint):</strong> شريحة رئيسية تتحكم في التخطيط العام وتصميم جميع الشرائح في العرض التقديمي.</li>
                </ul>

                <h4>أمثلة على المهام المشتركة:</h4>
                <ul>
                    <li>إدراج صور أو رسوم بيانية في مستندات Word و Excel وعروض PowerPoint.</li>
                    <li>تنسيق النصوص والأرقام باستخدام مجموعات Font و Paragraph في Word و Excel.</li>
                    <li>استخدام الاختصارات الشائعة (مثل Ctrl+S للحفظ، Ctrl+Z للتراجع).</li>
                    <li>تطبيق السمات والقوالب لتوفير مظهر موحد واحترافي.</li>
                </ul>
            `,
            en: `
                <h3>General Concepts in Microsoft Office</h3>
                <p>This lecture covers some fundamental concepts common across various Microsoft Office applications, helping to deepen understanding of the integrated environment Microsoft provides.</p>

                <h4>Common Concepts:</h4>
                <ul>
                    <li><strong>Ribbon:</strong> The primary user interface in most modern Office applications, organizing commands into tabs and groups for easy access.</li>
                    <li><strong>Quick Access Toolbar:</strong> A customizable toolbar providing quick access to frequently used commands like Save, Undo, and Redo.</li>
                    <li><strong>Templates:</strong> Pre-designed documents, presentations, or spreadsheets that offer a ready-made structure and formatting for users to start quickly.</li>
                    <li><strong>Header and Footer:</strong> Sections appearing at the top and bottom of each page (in Word) or slide (in PowerPoint), used to add repeating information like page numbers, dates, or company logos.</li>
                    <li><strong>Views:</strong> Different views allow users to interact with the document or presentation in various ways (e.g., Print Layout, Read Mode, Slide Sorter).</li>
                    <li><strong>Zoom Control:</strong> A tool to adjust the magnification level of the content displayed on the screen.</li>
                </ul>

                <h4>Definitions and Terminology:</h4>
                <ul>
                    <li><strong>Microsoft Word:</strong> A word-processing software for creating, editing, and formatting documents.</li>
                    <li><strong>Microsoft Excel:</strong> A spreadsheet application for data organization, analysis, and visualization.</li>
                    <li><strong>Microsoft PowerPoint:</strong> A presentation software for creating slideshows.</li>
                    <li><strong>Nonprinting Characters:</strong> Hidden symbols (like spaces and paragraph marks) that aid in document formatting but do not appear in print.</li>
                    <li><strong>Document Pane:</strong> The main area in Word where text is typed and edited.</li>
                    <li><strong>Workbook (Excel):</strong> A file containing one or more worksheets.</li>
                    <li><strong>Cell (Excel):</strong> The intersection of a row and a column in a worksheet.</li>
                    <li><strong>Formula (Excel):</strong> A mathematical equation entered to perform calculations.</li>
                    <li><strong>Slide (PowerPoint):</strong> A single page in a presentation.</li>
                    <li><strong>Transition (PowerPoint):</strong> A visual effect applied when moving between slides.</li>
                    <li><strong>Animation (PowerPoint):</strong> A movement or visual effect applied to a single object on a slide.</li>
                    <li><strong>Slide Master (PowerPoint):</strong> A master slide that controls the overall layout and design of all slides in the presentation.</li>
                </ul>

                <h4>Examples of Common Tasks:</h4>
                <ul>
                    <li>Inserting images or charts into Word documents, Excel sheets, and PowerPoint presentations.</li>
                    <li>Formatting text and numbers using the Font and Paragraph groups in Word and Excel.</li>
                    <li>Using common shortcuts (e.g., Ctrl+S for Save, Ctrl+Z for Undo).</li>
                    <li>Applying themes and templates to ensure a consistent and professional look.</li>
                </ul>
            `
        },
        // Combine questions related to general Office concepts
        quiz: shuffleArray(uniqueQuestions.filter(q => ['word-q5', 'word-q6', 'word-q14', 'word-q17', 'word-q18', 'excel-q1', 'excel-q2', 'excel-q3', 'excel-q17', 'ppt-q1', 'ppt-q2', 'ppt-q3', 'ppt-q4', 'ppt-q11', 'ppt-q12', 'ppt-q13', 'ppt-q14', 'ppt-q15', 'ppt-q16', 'ppt-q17', 'ppt-q18', 'ppt-q19', 'ppt-q20', 'ppt-q21', 'ppt-q22', 'ppt-q23', 'ppt-q24', 'ppt-q25'].includes(q.id)))
            .slice(0, 20)
    },
    {
        id: 'L9_new', // Renamed to avoid conflict if L9 was already Access
        title: "Office مراجعة شاملة لأساسيات وتطبيقات   ",
        icon: "fa-hand-sparkles",
        audioSrc: "",
        summary: {
            ar: `
                <h3>مراجعة شاملة لبرامج Office</h3>
                <p>تعتبر هذه المحاضرة بمثابة مراجعة عامة لأهم المفاهيم والأدوات في برامج Microsoft Office الثلاثة الأساسية: Word، Excel، و PowerPoint، بالإضافة إلى Access. نهدف إلى تعزيز فهمك للميزات المشتركة والمتقدمة التي تمكنك من العمل بكفاءة عالية.</p>

                <h4>Microsoft Word:</h4>
                <ul>
                    <li><strong>التحرير والتنسيق:</strong> مراجعة شاملة لأدوات التحرير المتقدمة، مثل استخدام الأنماط، الجداول، الصور، الرؤوس والتذييلات.</li>
                    <li><strong>التعاون والمراجعة:</strong> كيفية استخدام ميزات التتبع والتغييرات والتعليقات للعمل الجماعي.</li>
                    <li><strong>الاختصارات الفعالة:</strong> مجموعة من الاختصارات الرئيسية التي تزيد من سرعة العمل.</li>
                </ul>

                <h4>Microsoft Excel:</h4>
                <ul>
                    <li><strong>العمليات الحسابية المتقدمة:</strong> تطبيق الدوال الشرطية (IF)، البحث (VLOOKUP)، الدوال الإحصائية (AVERAGE, COUNT, MAX, MIN)، وترتيب العمليات الحسابية.</li>
                    <li><strong>تحليل البيانات:</strong> استخدام الفرز، التصفية، والتنسيق الشرطي لتحليل مجموعات البيانات الكبيرة.</li>
                    <li><strong>الرسوم البيانية:</strong> اختيار النوع المناسب للرسم البياني لتمثيل البيانات بفعالية (عمودي، خطي، دائري، شريطي، مساحي، سطحي).</li>
                </ul>

                <h4>Microsoft PowerPoint:</h4>
                <ul>
                    <li><strong>تصميم الشرائح:</strong> استخدام السمات (Themes)، الأنماط (Variants)، Slide Master لتخصيص التصميم.</li>
                    <li><strong>إضافة الوسائط المتعددة:</strong> دمج الصوت والفيديو والصور بفعالية في العروض التقديمية.</li>
                    <li><strong>التحولات والرسوم المتحركة:</strong> تطبيق التحولات بين الشرائح والرسوم المتحركة على الكائنات لإنشاء عروض تقديمية ديناميكية.</li>
                </ul>
                
                <h4>Microsoft Access:</h4>
                <ul>
                    <li><strong>بناء قواعد البيانات:</strong> مراجعة مفاهيم الجداول، الحقول، السجلات، والمفاتيح الأساسية والأجنبية.</li>
                    <li><strong>العلاقات:</strong> فهم أنواع العلاقات (One-to-Many, One-to-One, Many-to-Many) وأهمية الجداول الوسيطة.</li>
                    <li><strong>الاستعلامات (Queries):</strong> استخدام استعلامات التحديد، التحديث، الحذف، والإدراج، بالإضافة إلى الأوامر الأساسية في SQL مثل SELECT, WHERE, ORDER BY, UPDATE, INSERT, DELETE.</li>
                </ul>

                <p>تساعد هذه المراجعة على تجميع كل المعرفة المكتسبة وتطبيقها في سيناريوهات عملية، مما يعزز قدرتك على استخدام برامج Office بكفاءة في بيئة العمل أو الدراسة.</p>
            `,
            en: `
                <h3>Comprehensive Review of Office Applications</h3>
                <p>This lecture serves as a general review of the most important concepts and tools in the three core Microsoft Office programs: Word, Excel, and PowerPoint, in addition to Access. We aim to reinforce your understanding of common and advanced features that enable you to work with high efficiency.</p>

                <h4>Microsoft Word:</h4>
                <ul>
                    <li><strong>Editing and Formatting:</strong> A comprehensive review of advanced editing tools, such as using styles, tables, images, headers, and footers.</li>
                    <li><strong>Collaboration and Review:</strong> How to use track changes and comment features for collaborative work.</li>
                    <li><strong>Effective Shortcuts:</strong> A set of key shortcuts that increase work speed.</li>
                </ul>

                <h4>Microsoft Excel:</h4>
                <ul>
                    <li><strong>Advanced Calculations:</strong> Applying conditional functions (IF), lookup functions (VLOOKUP), statistical functions (AVERAGE, COUNT, MAX, MIN), and understanding the order of operations.</li>
                    <li><strong>Data Analysis:</strong> Using sorting, filtering, and conditional formatting to analyze large datasets.</li>
                    <li><strong>Charts:</strong> Choosing the appropriate chart type to effectively represent data (column, line, pie, bar, area, surface).</li>
                </ul>

                <h4>Microsoft PowerPoint:</h4>
                <ul>
                    <li><strong>Slide Design:</strong> Using Themes, Variants, and the Slide Master to customize design.</li>
                    <li><strong>Adding Multimedia:</strong> Effectively integrating audio, video, and images into presentations.</li>
                    <li><strong>Transitions and Animations:</strong> Applying transitions between slides and animations to objects to create dynamic presentations.</li>
                </ul>
                
                <h4>Microsoft Access:</h4>
                <ul>
                    <li><strong>Database Building:</strong> Reviewing concepts of tables, fields, records, primary, and foreign keys.</li>
                    <li><strong>Relationships:</strong> Understanding relationship types (One-to-Many, One-to-One, Many-to-Many) and the importance of junction tables.</li>
                    <li><strong>Queries:</strong> Using select, update, delete, and append queries, as well as basic SQL commands like SELECT, WHERE, ORDER BY, UPDATE, INSERT, DELETE.</li>
                </ul>

                <p>This review helps consolidate all acquired knowledge and apply it in practical scenarios, enhancing your ability to use Office programs efficiently in work or study environments.</p>
            `
        },
        quiz: shuffleArray(uniqueQuestions) // Use all unique questions for comprehensive review
            .slice(0, 20) // Ensure at least 20 unique questions are available and selected
    }
];


export const assignmentsData = [

{
        id: 'A1',
        title: "الواجب الأول",
        icon: "fa-pencil-alt",
        summary: {
            ar: `يتضمن الواجب الأول مجموعة من الأسئلة حول استخدام أدوات مايكروسوفت وورد الأساسية، مثل إدراج الصور وتغيير أحجامها وإضافة التسميات التوضيحية (Captions)، بالإضافة إلى إدراج المراجع والاقتباسات (Citations) وتنسيق الفقرات والنصوص باستخدام الخطوط والألوان والأنماط المختلفة.`,
            en: `Assignment 1 includes questions on basic Microsoft Word tools, such as inserting and resizing images, adding captions, inserting citations, and formatting text with different fonts, colors, and styles.`
        },
        quiz: [
            {
                id: 'assignment1-q1',
                question: "How do you insert an image in Word?",
                options: ["Copy-paste from web", "Drag and drop from desktop", "Using the Insert tab, then Pictures option", "Typing image name"],
                answer: 2,
                hint: "التبويب Insert هو المكان الصحيح لإدراج الكائنات."
            },
            {
                id: 'assignment1-q2',
                question: "Which tab is used to insert reference citations in Word?",
                options: ["Home", "Review", "Layout", "References"],
                answer: 3,
                hint: "التبويب References مخصص لإدارة المراجع والاقتباسات."
            },
            {
                id: 'assignment1-q3',
                question: "To make text bold in Word, which shortcut is used?",
                options: ["Ctrl + U", "Ctrl + I", "Ctrl + E", "Ctrl + B"],
                answer: 3,
                hint: "اختصار شائع لتطبيق التنسيق الغامق."
            },
            {
                id: 'assignment1-q4',
                question: "To center-align text in Word, which shortcut is used?",
                options: ["Ctrl + R", "Ctrl + J", "Ctrl + L", "Ctrl + E"],
                answer: 3,
                hint: "اختصار لمحاذاة النص في المنتصف."
            },
            {
                id: 'assignment1-q5',
                question: "What is the primary purpose of a 'caption' for an image?",
                options: ["To change image size", "To apply effects to the image", "To hide the image", "To provide a brief description or title for the image"],
                answer: 3,
                hint: "الوصف التوضيحي يساعد في فهم محتوى الصورة."
            },
        ]
    },
    {
        id: 'A2',
        title: "الواجب الثاني",
        icon: "fa-pencil-alt",
        summary: {
            ar: `الواجب الثاني يركز على مهارات Excel المتقدمة، مثل إنشاء المعادلات والدوال المنطقية والمالية، واستخدام التنسيق الشرطي (Conditional Formatting)، وإنشاء الرسوم البيانية المتخصصة مثل (Scatter Plots) و (Surface Charts) ، وإدارة البيانات الكبيرة من خلال الفرز والتصفية المتقدمة.`,
            en: `Assignment 2 focuses on advanced Excel skills, such as creating logical and financial formulas and functions, using Conditional Formatting, creating specialized charts like Scatter Plots and Surface Charts, and managing large datasets through advanced sorting and filtering.`
        },
        quiz: [
            {
                id: 'assignment2-q1',
                question: "Which Excel function checks if a condition is met, and returns one value if true, and another if false?",
                options: ["SUM", "COUNT", "AVERAGE", "IF"],
                answer: 3,
                hint: "هذه الدالة تستخدم لاتخاذ قرارات منطقية."
            },
            {
                id: 'assignment2-q2',
                question: "Which type of chart is best for showing trends over time?",
                options: ["Pie Chart", "Bar Chart", "Scatter Plot", "Line Chart"],
                answer: 3,
                hint: "المخطط الذي يربط النقاط لإظهار التغير عبر فترة زمنية."
            },
            {
                id: 'assignment2-q3',
                question: "To sort data from Z to A in Excel, you use:",
                options: ["Ascending Sort", "Custom Sort", "Numerical Sort", "Descending Sort"],
                answer: 3,
                hint: "يُستخدم هذا النوع من الفرز لترتيب البيانات تنازلياً."
            },
            {
                id: 'assignment2-q4',
                question: "What does 'Conditional Formatting' do in Excel?",
                options: ["Adds borders to cells", "Changes font size automatically", "Calculates sums based on conditions", "Applies formatting to cells based on their content meeting certain criteria"],
                answer: 3,
                hint: "يساعد في تمييز البيانات بناءً على قواعد محددة."
            },
            {
                id: 'assignment2-q5',
                question: "Which chart displays data across a 3D landscape, used with large datasets to show all information at the same time?",
                options: ["Column chart", "Line chart", "Pie chart", "Surface chart"],
                answer: 3, // Surface chart
                hint: "مخطط السطح مناسب لعرض البيانات ثلاثية الأبعاد."
            },
        ]
    },
    {
        id: 'A3',
        title: "الواجب الثالث",
        icon: "fa-pencil-alt",
        summary: {
            ar: `الواجب الثالث يغطي استخدام PowerPoint في تصميم عروض تقديمية فعالة، بما في ذلك تطبيق السمات (Themes) والانتقالات (Transitions) بين الشرائح، وتطبيق الرسوم المتحركة (Animations) على العناصر داخل الشريحة، وإدراج الوسائط المتعددة مثل الصوت والفيديو، بالإضافة إلى استخدام (Slide Master) لتنسيق العرض بالكامل.`,
            en: `Assignment 3 covers using PowerPoint to design effective presentations, including applying themes and transitions between slides, applying animations to elements within a slide, inserting multimedia such as audio and video, and using the Slide Master to format the entire presentation.`
        },
        quiz: [
            {
                id: 'assignment3-q1',
                question: "What is the purpose of a 'Theme' in PowerPoint?",
                options: ["To add new slides", "To insert charts", "To record audio", "To provide a consistent design (colors, fonts, effects) across all slides"],
                answer: 3,
                hint: "السمة هي مجموعة جاهزة من التنسيقات لتجميل العرض."
            },
            {
                id: 'assignment3-q2',
                question: "To apply an effect to text or objects within a single slide, you would use:",
                options: ["Transitions", "Slide Master", "Design Tab", "Animations"],
                answer: 3,
                hint: "الرسوم المتحركة تُطبق على عناصر محددة داخل الشريحة."
            },
            {
                id: 'assignment3-q3',
                question: "Which view in PowerPoint is used to set the background and fonts for all slides at once?",
                options: ["Normal View", "Reading View", "Slide Show View", "Slide Master View"],
                answer: 3,
                hint: "الشريحة الرئيسية (Slide Master) تتحكم في التنسيق العام."
            },
            {
                id: 'assignment3-q4',
                question: "Can you embed a YouTube video directly into a PowerPoint slide?",
                options: ["No, only links are allowed", "Yes, but only in older versions", "No, it's not supported", "Yes, through the Insert tab"],
                answer: 3,
                hint: "PowerPoint يدعم إدراج الفيديوهات من YouTube."
            },
            {
                id: 'assignment3-q5',
                question: "Which feature allows the presenter to see their notes while the audience sees only the slide?",
                options: ["Normal View", "Slide Sorter View", "Reading View", "Presenter View"],
                answer: 3,
                hint: "هذا العرض يساعد المحاضر على تقديم العرض بكفاءة."
            },
        ]
    },
];


// --- Comprehensive Review Data ---
export const comprehensiveReviewData = {
    id: 'comprehensive-review',
    title: "مراجعة شاملة",
    icon: "fa-book-reader",
    summary: {
        ar: `
            <h3>مراجعة شاملة لبرامج Office</h3>
            <p>تعتبر هذه المحاضرة بمثابة مراجعة عامة لأهم المفاهيم والأدوات في برامج Microsoft Office الثلاثة الأساسية: Word، Excel، و PowerPoint، بالإضافة إلى Access. نهدف إلى تعزيز فهمك للميزات المشتركة والمتقدمة التي تمكنك من العمل بكفاءة عالية.</p>

            <h4>Microsoft Word:</h4>
            <ul>
                <li><strong>التحرير والتنسيق:</strong> مراجعة شاملة لأدوات التحرير المتقدمة، مثل استخدام الأنماط، الجداول، الصور، الرؤوس والتذييلات.</li>
                <li><strong>التعاون والمراجعة:</strong> كيفية استخدام ميزات التتبع والتغييرات والتعليقات للعمل الجماعي.</li>
            </ul>

            <h4>Microsoft Excel:</h4>
            <ul>
                <li><strong>العمليات الحسابية المتقدمة:</strong> تطبيق الدوال الشرطية (IF)، البحث (VLOOKUP)، الدوال الإحصائية، وترتيب العمليات.</li>
                <li><strong>تحليل البيانات:</strong> استخدام الفرز، التصفية، والتنسيق الشرطي.</li>
            </ul>

            <h4>Microsoft PowerPoint:</h4>
            <ul>
                <li><strong>تصميم الشرائح:</strong> استخدام السمات، الأنماط، و Slide Master.</li>
                <li><strong>الوسائط المتعددة والتحولات:</strong> دمج الصوت والفيديو وتطبيق التحولات والرسوم المتحركة.</li>
            </ul>
            
            <h4>Microsoft Access:</h4>
            <ul>
                <li><strong>بناء قواعد البيانات:</strong> مراجعة مفاهيم الجداول، العلاقات، والاستعلامات.</li>
                <li><strong>أوامر SQL:</strong> استخدام SELECT, WHERE, ORDER BY, UPDATE, INSERT, DELETE.</li>
            </ul>
        `,
        en: `
            <h3>Comprehensive Review of Office Applications</h3>
            <p>This lecture serves as a general review of the key concepts and tools in Word, Excel, PowerPoint, and Access.</p>

            <h4>Microsoft Word:</h4>
            <ul>
                <li><strong>Editing & Formatting:</strong> Reviewing advanced tools like styles, tables, images, and headers/footers.</li>
                <li><strong>Collaboration:</strong> Using track changes and comments.</li>
            </ul>

            <h4>Microsoft Excel:</h4>
            <ul>
                <li><strong>Advanced Calculations:</strong> Applying functions like IF, VLOOKUP, and statistical functions.</li>
                <li><strong>Data Analysis:</strong> Using sorting, filtering, and conditional formatting.</li>
            </ul>

            <h4>Microsoft PowerPoint:</h4>
            <ul>
                <li><strong>Slide Design:</strong> Using Themes, Variants, and Slide Master.</li>
                <li><strong>Multimedia & Transitions:</strong> Integrating media and applying animations.</li>
            </ul>
            
            <h4>Microsoft Access:</h4>
            <ul>
                <li><strong>Database Building:</strong> Reviewing tables, relationships, and queries.</li>
                <li><strong>SQL Commands:</strong> Using SELECT, WHERE, ORDER BY, UPDATE, INSERT, DELETE.</li>
            </ul>
        `
    },
    // استخدم كل الأسئلة المتاحة، اخلطها، ثم اختر 40 سؤالاً منها
    quiz: shuffleArray(uniqueQuestions).slice(0, 40)
};


export const videosData = [
    
    {
        id: 'vid_excel_L2',
        title: 'Lecture 4 Excel',
        youtubeId: 'JQ75cSSInbk'
    },
    {
        id: 'vid_ppt_L3',
        title: 'Lecture 5 Power Point',
        youtubeId: 'YH0Te4oGTnw'
    },
    // --- الفيديو الجديد بالمعرف الصحيح ---
    {
        id: 'vid_tools_productivity',
        title: 'Lecture 10 MS Office Revision Exam Tutorial Part 2',
        youtubeId: '1zCMvgJ7Brs' 
    }
];
// Midterm Exam Data
export const midtermExamData = {
    id: 'midterm-exam',
    title: "امتحان الميدتيرم",
    icon: "fa-file-signature",
    quiz: shuffleArray([
        // Questions from MS Office Midterm Exam 2023.pdf
        {
            id: 'midterm-q1',
            question: "The _______ gives a fast and easy access to the tools.",
            options: ["Ribbon", "Document pane", "Quick Access Toolbar", "Ruler"],
            answer: 2,
            hint: "يُعرف شريط أدوات الوصول السريع بقدرته على توفير وصول سريع للأوامر."
        },
        {
            id: 'midterm-q2',
            question: "Applying printing options, fit everything (column & rows) on worksheet, select....",
            options: ["Fit Sheet on One Page", "Fit All Rows on One Page", "No scaling", "Fit All Columns on One Page"],
            answer: 0,
            hint: "هذا الخيار يضمن احتواء كامل محتوى ورقة العمل على صفحة واحدة عند الطباعة."
        },
        {
            id: 'midterm-q3',
            question: "In equation $A/B+(C^{*}D-E^{\\wedge}3)$ calculated in the order of:",
            options: ["(),*,/,+, ^and", "^, (),*,/, + and -", "(), ^, *, -, /, and +", "+,^,*,/,() and -."],
            answer: 2, // () then ^ then *, then -, then /, then +
            hint: "ترتيب العمليات يتبع قواعد الأقواس، ثم الأسس، ثم الضرب/القسمة، ثم الجمع/الطرح."
        },
        {
            id: 'midterm-q4',
            question: "_______ displays your document in full-screen mode.",
            options: ["Print layout", "Tell Me", "Web layout", "Read Mode"],
            answer: 3,
            hint: "وضع Read Mode يوفر عرضًا بملء الشاشة للقراءة المريحة."
        },
        {
            id: 'midterm-q5',
            question: "Use _______ to move up & down through the document pages.",
            options: ["Tell Me", "vertical scroll bar", "ruler", "ribbon"],
            answer: 1,
            hint: "يُستخدم شريط التمرير الرأسي للتنقل بين صفحات المستند."
        },
        {
            id: 'midterm-q6',
            question: "The margin defaults are set to _______ top, bottom, left, and right margins.",
            options: ["1 inch", "No space", "1.08", "8 points"],
            answer: 0,
            hint: "الهوامش الافتراضية في Word تكون عادةً 1 بوصة من كل جانب."
        },
        // True/False from Midterm Exam
        {
            id: 'midterm-tf1',
            question: "In Microsoft Word, each row is identified by a letter. (True/False)",
            options: ["True", "False"],
            answer: 1, // False
            hint: "الصفوف في Word (خاصة في الجداول) تُعرف بالأرقام، وليس بالحروف."
        },
        {
            id: 'midterm-tf2',
            question: "Nonprinting characters are hidden and can create and edit your document. (True/False)",
            options: ["True", "False"],
            answer: 0, // True
            hint: "تساعد الرموز غير القابلة للطباعة في التنسيق ولا تظهر عند الطباعة."
        },
        {
            id: 'midterm-tf3',
            question: "Use Tell Me bar to see the number of words and pages in your document. (True/False)",
            options: ["True", "False"],
            answer: 1, // False
            hint: "شريط الحالة (Status Bar) هو الذي يعرض عدد الكلمات والصفحات."
        },
        {
            id: 'midterm-tf4',
            question: "In Excel, column width is based on the existing sheets. (True/False)",
            options: ["True", "False"],
            answer: 1, // False (It's based on content, or can be manually adjusted)
            hint: "عرض العمود في Excel يعتمد على البيانات التي يحتويها، وليس على الأوراق الأخرى."
        },
        {
            id: 'midterm-tf5',
            question: "Use area charts to display data across a 3D landscape. (True/False)",
            options: ["True", "False"],
            answer: 1, // False (Surface charts do this)
            hint: "مخططات السطح (Surface Charts) هي التي تعرض البيانات في منظر طبيعي ثلاثي الأبعاد، وليست مخططات المساحة."
        },
        {
            id: 'midterm-tf6',
            question: "Each cell in word on grid is identified by the intersection of column and row. (True/False)",
            options: ["True", "False"],
            answer: 1, // False (This is Excel, not Word's general grid)
            hint: "هذا ينطبق على الخلايا في جداول بيانات Excel، وليس على مستندات Word بشكل عام."
        },
        {
            id: 'midterm-tf7',
            question: "In equation $A+B^{*}(C/D^{\\wedge3}-E)$ calculated in order of (), ^, /,-, * and + (True/False)",
            options: ["True", "False"],
            answer: 0, // True (Follows PEMDAS/BODMAS)
            hint: "الترتيب الصحيح للعمليات: الأقواس، ثم الأس، ثم القسمة، ثم الطرح داخل القوس، ثم الضرب، ثم الجمع."
        },
        {
            id: 'midterm-tf8',
            question: "Microsoft Word creates different documents like letters, flyers, and reports. (True/False)",
            options: ["True", "False"],
            answer: 0, // True
            hint: "Word هو برنامج معالجة نصوص متعدد الاستخدامات ويمكنه إنشاء أنواع مختلفة من المستندات."
        },
        // Adding more questions to reach 20 for midterm (drawing from overall unique questions)
        ...getQuizQuestions('word-q', 5), // Add some more general Word questions
        ...getQuizQuestions('excel-q', 5)  // Add some general Excel questions
    ]).slice(0, 20) // Ensure exactly 20 questions for the exam
};

// Final Exam Data
export const finalExamData = {
    id: 'final-exam',
    title: "الامتحان النهائي",
    icon: "fa-graduation-cap",
    summary: {
        ar: `<p>هذا هو الامتحان النهائي للمادة. يغطي جميع المحاضرات. بالتوفيق!</p>`,
        en: `<p>This is the final exam for the course. It covers all lectures. Good luck!</p>`
    },
    quiz: shuffleArray(uniqueQuestions).slice(0, 40) // Longer final exam
};

// Export all questions for the "Comprehensive Review" feature
export const allQuizQuestions = uniqueQuestions;