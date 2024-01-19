const startContainer = document.getElementById('start-container');
const startButton = document.getElementById('start-button');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;
let userName;


startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    userName = prompt('名前を入力してください:');
    if (userName) {
        startContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        currentQuestionIndex = 0;
        score = 0;
        showQuestion(chooseRandomQuestions());
        
    }
}

function nextQuestion() {
    if (currentQuestionIndex < 2) {
        currentQuestionIndex++;
        showQuestion(chooseRandomQuestions());
    } else {
        showResult();
    }
}

function chooseRandomQuestions() {
    const randomQuestions = [];
    const availableQuestions = [...questions];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        randomQuestions.push(availableQuestions.splice(randomIndex, 1)[0]);
    }
    return randomQuestions;
}

function showQuestion(questionSet) {
    const question = questionSet[currentQuestionIndex];
    questionContainer.innerText = question.question;
    clearAnswerButtons();
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(answer));
        answerButtonsContainer.appendChild(button);
    });
}

function clearAnswerButtons() {
    while (answerButtonsContainer.firstChild) {
        answerButtonsContainer.removeChild(answerButtonsContainer.firstChild);
    }
}

function checkAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    if (currentQuestionIndex < 2) {
        currentQuestionIndex++;
        showQuestion(chooseRandomQuestions());
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    resultText.innerText = `${userName}さん、${score}問正解でした。`;
}

function restartQuiz() {
    startContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultContainer.classList.add('hidden');
   
}
const questions = [
    {
        question: 'サッカー日本代表のFIFAランキングは何位でしょう？',
        answers: [
            { text: '17位', correct: true },
            { text: '18位', correct: false },
            { text: '20位', correct: false },
            { text: '21位', correct: false }
        ]
    },
    {
        question: '現サッカー日本代表の背番号10番は誰でしょう？',
        answers: [
            { text: '久保建英選手', correct: false },
            { text: '堂安律選手', correct: true },
            { text: '三苫薫選手', correct: false },
            { text: '南野拓実選手', correct: false }
        ]
    },
    {
        question: '去年2023年のJ1優勝チームはどこでしょう？',
        answers: [
            { text: 'ヴィッセル神戸', correct: true },
            { text: '鹿島アントラーズ', correct: false },
            { text: '横浜F･マリノス', correct: false },
            { text: '川崎フロンターレ', correct: false }
        ]
    },
    {
        question: 'サッカー選手のクリスティアーノ・ロナウド選手は現在何歳でしょう？',
        answers: [
            { text: '36歳', correct: false },
            { text: '37歳', correct: false },
            { text: '38歳', correct: true },
            { text: '39歳', correct: false }
        ]
    },
    {
        question: 'クリスティアーノ・ロナウド選手は世界一のサッカー選手に送られるバロンドール賞を過去何回受賞したことがあるでしょう？',
        answers: [
            { text: '1回', correct: false },
            { text: '3回', correct: false },
            { text: '4回', correct: false },
            { text: '5回', correct: true }
        ]
    },
    {
        question: '前回のワールドカップの優勝国はどこ？',
        answers: [
            { text: 'アルゼンチン', correct: true },
            { text: 'フランス', correct: false },
            { text: '日本', correct: false },
            { text: 'ブラジル', correct: false }
        ]
    },
    {
        question: 'サッカーの発祥国はどこでしょう？',
        answers: [
            { text: 'アメリカ', correct: false },
            { text: 'イタリア', correct: false },
            { text: 'イングランド', correct: true },
            { text: 'スペイン', correct: false }
        ]
    },
    {
        question: '日本代表の三苫薫選手の現所属チームはどこでしょう？',
        answers: [
            { text: 'ブライトン', correct: true },
            { text: '川崎フロンターレ', correct: false },
            { text: 'バルセロナ', correct: false },
            { text: 'マンチェスター・シティ', correct: false }
        ]
    },
    {
        question: '日本代表の久保建英選手の現所属チームはどこでしょう？',
        answers: [
            { text: 'レアル・ベティス', correct: false },
            { text: 'レアル・ソシエダ', correct: true },
            { text: 'レアルマドリード', correct: false },
            { text: 'バルセロナ', correct: false }
        ]
    },
    {
        question: 'ワールドカップで話題となった「◯◯の1ミリ」の◯◯に入る言葉はなんでしょう？',
        answers: [
            { text: '前田', correct: false },
            { text: '三苫', correct: true },
            { text: '上田', correct: false },
            { text: '浅野', correct: false }
        ]
    },
]
