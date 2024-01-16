
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
    const titleElement = startScreen.querySelector("h1");
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
    const restartButton = document.getElementById("restart-button");

    let currentQuestionIndex = 0;
    
//質問内容
    const questions = [
        {
            question: "プロサッカー選手のクリスティアーノ・ロナウド選手は過去何回バロンドール賞を受賞したことがあるでしょう？",
            options: ["5回", "6回", "7回"],
            correctAnswer: "5回"
        },
        {
            question: "2023シーズンのJ1優勝チームはどこでしょう？",
            options: ["鹿島アントラーズ", "ヴィッセル神戸", "川崎フロンターレ"],
            correctAnswer: "ヴィッセル神戸"
        },
        {
            question: "サッカー日本代表の久保建英選手が所属しているチームはどこでしょう？",
            options: ["レアル・マドリード", "レアル・ソシエダ", "レアル・ベティス"],
            correctAnswer: "レアル・ソシエダ"
        }
    ];

    startButton.addEventListener("click", startGame);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartGame);

//ゲームを開始する時の処理
    function startGame() {
        startButton.classList.add("hidden");
        titleElement.classList.add("hidden");
        quizContainer.classList.remove("hidden");
        nextButton.classList.add("hidden");
        restartButton.classList.add("hidden");
        currentQuestionIndex = 0;
        showQuestion();
    }

//質問を表示するときの処理
    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.onclick = function () { checkAnswer(option); };
            optionsContainer.appendChild(optionButton);
        });

        resultElement.textContent = "";
    }

//答えを表示するときの処理
    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            resultElement.textContent = "正解！";
        } else {
            resultElement.textContent = "不正解。正解は " + currentQuestion.correctAnswer + " です。";
        }
        
        if (currentQuestionIndex < questions.length - 1) {
            nextButton.classList.remove("hidden");
        } else {
            resultElement.textContent += "これでクイズは終了です。";
            
            nextButton.classList.add("hidden");
            restartButton.classList.remove("hidden");
        }
    }

//次の問題へ移るときの処理
function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            showQuestion();
            nextButton.classList.add("hidden");
        } else {
            endGame();
        }
    }

//ゲームが終わったときの処理
    function endGame() {
        questionElement.textContent = "終了";
        optionsContainer.innerHTML = "";
        resultElement.textContent = "";
        nextButton.classList.add("hidden");
        restartButton.classList.remove("hidden");
        titleElement.classList.remove("hidden");
    }

//ゲームを再開するときの処理
    function restartGame() {
        quizContainer.classList.add("hidden");
        startButton.classList.remove("hidden");
        
    }
});