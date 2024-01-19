const questions = [
    { question: "JavaScriptのファンクションはどれか？", options: ["関数", "メソッド", "フィールド"], correctAnswer: "関数" },
    { question: "HTMLの拡張子は何か？", options: [".html", ".js", ".css"], correctAnswer: ".html" },
    { question: "CSSのセレクタの例はどれか？", options: ["#id", ".class", "*"], correctAnswer: ".class" },
    // ... 追加の質問をここに追加できます。
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        displayQuestion(currentQuestion);
        resetQuizUI();
    } else {
        endQuiz();
    }
}

function displayQuestion(question) {
    document.getElementById("question").textContent = question.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        correctAnswers++;
    }

    document.getElementById("options").style.pointerEvents = "none";
    document.getElementById("username").disabled = true;
    document.getElementById("next-btn").style.display = "block";
}

function resetQuizUI() {
    document.getElementById("options").style.pointerEvents = "auto";
    document.getElementById("username").disabled = false;
    document.getElementById("next-btn").style.display = "none";
}

function checkAnswer() {
    const selectedOption = document.querySelector('button:focus').textContent;
    selectOption(selectedOption);
}

function endQuiz() {
    const resultMessage = `あなたは${questions.length}問中${correctAnswers}問正解でした。`;
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-message").textContent = resultMessage;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById("result-container").style.display = "none";
    document.getElementById("start-container").style.display = "block";
    document.getElementById("username").value = "";
}