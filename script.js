const questions = {
    matte: [
        { 
            question: "Hva er 5 + 7?", 
            options: ["10", "12", "13", "14"], 
            correctAnswer: 1 
        },
        { 
            question: "Hva er 15 - 6?", 
            options: ["11", "9", "10", "12"], 
            correctAnswer: 1 
        },
        { 
            question: "Hva er 4 x 3?", 
            options: ["6", "9", "12", "15"], 
            correctAnswer: 2 
        }
    ],
    naturfag: [
        { 
            question: "Hva heter den største planeten i solsystemet?", 
            options: ["Mars", "Jorden", "Jupiter", "Venus"], 
            correctAnswer: 2 
        },
        { 
            question: "Hva er vannets kjemiske formel?", 
            options: ["H2O", "O2", "CO2", "H2"], 
            correctAnswer: 0 
        },
        { 
            question: "Hvor mange planeter er det i solsystemet?", 
            options: ["8", "7", "9", "10"], 
            correctAnswer: 0 
        }
    ],
    samfunnsfag: [
        { 
            question: "Hva er hovedstaden i Norge?", 
            options: ["Bergen", "Oslo", "Stavanger", "Trondheim"], 
            correctAnswer: 1 
        },
        { 
            question: "Hvem var Norges første konge?", 
            options: ["Olav Tryggvason", "Harald Hårfagre", "Haakon den Gode", "Olav den Hellige"], 
            correctAnswer: 1 
        },
        { 
            question: "I hvilket år ble Norge selvstendig fra Sverige?", 
            options: ["1814", "1905", "1945", "1918"], 
            correctAnswer: 1 
        }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let timer;
let timeLeft = 10;
let progressStep;

const questionElement = document.getElementById('question');
const optionButtons = document.getElementsByClassName('option');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const livesElement = document.getElementById('lives');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const progressElement = document.getElementById('progress');
const timeLeftElement = document.getElementById('time-left');
const quizContainer = document.getElementById('quiz-container');
const categorySelect = document.getElementById('category-select');
const statusElement = document.getElementById('status');

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    timeLeft = 10;
    progressStep = 100 / questions[category].length;
    
    quizContainer.style.display = 'block';
    categorySelect.style.display = 'none';
    statusElement.style.display = 'block';
    
    loadQuestion();
    updateStatus();
    startTimer();
}

function loadQuestion() {
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].textContent = currentQuestion.options[i];
    }
    
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
    progressElement.style.width = progressStep * (currentQuestionIndex + 1) + '%';
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentCategory][currentQuestionIndex];
    stopTimer();

    if (selectedOption === currentQuestion.correctAnswer) {
        score += timeLeft;  // Ekstra poeng basert på tid igjen
        feedbackElement.textContent = "Riktig!";
        feedbackElement.style.color = "#4caf50";
    } else {
        lives--;
        feedbackElement.textContent = "Feil!";
        feedbackElement.style.color = "#f44336";
    }
    
    updateStatus();
    nextButton.style.display = 'block';
    
    if (lives <= 0) {
        endGame();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= questions[currentCategory].length) {
        endGame();
    } else {
        timeLeft = 10;
        loadQuestion();
        startTimer();
    }
}

function updateStatus() {
    scoreElement.textContent = `Poeng: ${score}`;
    livesElement.textContent = `Liv igjen: ${lives}`;
    timeLeftElement.textContent = timeLeft;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            lives--;
            feedbackElement.textContent = "Tiden er ute!";
            feedbackElement.style.color = "#f44336";
            nextButton.style.display = 'block';
            updateStatus();
            
            if (lives <= 0) {
                endGame();
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function endGame() {
    stopTimer();
    questionElement.textContent = lives > 0 ? "Gratulerer! Du har fullført quizen!" : "Game Over!";
    feedbackElement.textContent = `Du fikk ${score} poeng!`;
    
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].style.display = 'none';
    }
    
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
}

function restartQuiz() {
    restartButton.style.display = 'none';
    
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].style.display = 'block';
    }
    
    categorySelect.style.display = 'block';
    quizContainer.style.display = 'none';
    statusElement.style.display = 'none';
}

loadQuestion();
