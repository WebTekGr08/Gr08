const questions = {
    matte: [
        { 
            question: "Hva er 25 % av 320?", 
            options: ["15", "50", "80", "110"], 
            correctAnswer: 2 
        },
        { 
            question: "Hva er differansen mellom 123 og 78?", 
            options: ["48", "55", "50", "45"], 
            correctAnswer: 3 
        },
        { 
            question: "Hva er arealet av et rektangel med lengde 7 cm og bredde 5 cm?", 
            options: ["25 cm^2", "30 cm^2", "35 cm^2", "40 cm^2"], 
            correctAnswer: 2 
        },
        { 
            question: "Hva er 0,75 + 1,2?", 
            options: ["2,1", "1,15", "2,05", "1,95"], 
            correctAnswer: 3
        },
        { 
            question: "Hvis en bok koster 120 kroner og det får 20 % rabatt, hvor mye må du betale??", 
            options: ["100 kr", "96 kr", "108 kr", "112 kr"], 
            correctAnswer: 1
        },

    ],
    naturfag: [
        { 
            question: "Hva heter den største planeten i solsystemet?", 
            options: ["Amfibier", "Reptiler", "Fugler", "Pattedyr"], 
            correctAnswer: 0
        },
        { 
            question: "Hvor mange planeter er det i solsystemet?", 
            options: ["8", "7", "9", "10"], 
            correctAnswer: 0 
        },
        { 
            question: "Hvor beskytter jorda mot skadelige stråler fra sola?", 
            options: ["Atmosfæren", "Ozonlaget", "Skyer", "Månen"], 
            correctAnswer: 1 
        },
        { 
            question: "Hva kalles det øverste laget av jordkloden?", 
            options: ["Mantelen", "Jordskorpa", "Ytterskallet", "Havoverflaten"], 
            correctAnswer: 1 
        },
        { 
            question: "Hva kalles forandringen fra larve til sommerfugl?", 
            options: ["Fotosyntese", "Fordamping", "Metamorfose", "Symbiose"], 
            correctAnswer: 2
        },
    ],
    samfunnsfag: [
        { 
            question: "Hva heter den nest største byen i Norge?", 
            options: ["Bergen", "Stavanger", "Trondheim", "Oslo"], 
            correctAnswer: 0
        },
        { 
            question: "Hvem var Norges første konge?", 
            options: ["Olav Tryggvason", "Harald Hårfagre", "Haakon den Gode", "Olav den Hellige"], 
            correctAnswer: 1 
        },
        { 
            question: "Hvilket land er kjent som Solens rike?", 
            options: ["Kina", "Thailand", "Malaysia", "Japan"], 
            correctAnswer: 3
        },
        { 
            question: "Hvilken by er ikke hovedstad i sitt land?", 
            options: ["Roma", "Madrid", "Bern", "Sydney"], 
            correctAnswer: 3
        },
        { 
            question: "Hva heter den historiske handelsruten som forbinder Europa og Asia?", 
            options: ["Krydderveien", "Gullveien", "Silkeveien", "Kullruta"], 
            correctAnswer: 2
        },
    ],
    krle: [
        { 
            question: "Hvilken religion er knyttet til moskeer?", 
            options: ["Kristendom", "Hinduisme", "Islam", "Buddhismen"], 
            correctAnswer: 2
        },
        { 
            question: "Hva er en guru i hinduismen?", 
            options: ["En religiøs lærer", "En tempelprest", "En guddom", "En helgen"], 
            correctAnswer: 0
        },
        { 
            question: "Hva kalles de ti reglene Moses mottok fra Gud på Sinaifjellet?", 
            options: ["Bergprekenen", "De ti dyder", "De ti bud", "Apostlenes regler"], 
            correctAnswer: 2
        },
        { 
            question: "Hvilket symbol er mest kjent for jødedommen?", 
            options: ["Korset", "Davidstjernen", "Halvmånen", "Hjulet"], 
            correctAnswer: 1
        },
        { 
            question: "Hvem grunnla buddhismen?", 
            options: ["Konfucius", "Siddharta Gautama (Buddha)", "Krishna", "Muhammad"], 
            correctAnswer: 1
        },
    ],
    engelsk: [
        { 
            question: "Hva heter papegøye på engelsk?", 
            options: ["Turquoise", "Parrot", "Cheetah", "Deer"], 
            correctAnswer: 1
        },
        { 
            question: "Hva heter tallet 5 på engelsk?", 
            options: ["Three", "Seven", "Five", "Nine"], 
            correctAnswer: 2
        },
        { 
            question: "Kan du si setningen 'Jeg liker å spille fotball' på engelsk?", 
            options: ["I play like football", "I like play football", "I like to play fotbal", "I like to play football"], 
            correctAnswer: 3
        },
        { 
            question: "Kan du oversette det norske ordet 'katt' til engelsk og stave det?", 
            options: ["C-A-P", "K-A-T", "C-A-T-T", "C-A-T"], 
            correctAnswer: 3
        },
        { 
            question: "Hva er de engelske navnene på fargene rød, blå og grønn?", 
            options: ["Red, Blue, Green", "Blue, Gren, Reed", "Brown, Grey, Blue", "Rød, Blå, Grønn"], 
            correctAnswer: 1
        },
    ],
    norsk: [
        { 
            question: "Hva er et substantiv?", 
            options: ["En handling", "Et sted, en ting eller en person", "Et følelse", "Et spørsmål"], 
            correctAnswer: 1
        },
        { 
            question: "Hva er en synonym for ordet 'glad'?", 
            options: ["Lei seg", "Trist", "Lykkelig", "Slem"], 
            correctAnswer: 2
        },
        { 
            question: "Hva betyr ordet 'fortelling'?", 
            options: ["En liste med navn", "En historie", "En tegning", "Et spørsmål"], 
            correctAnswer: 1
        },
        { 
            question: "Hva betyr det at en setning er en helsetning?", 
            options: ["Den har flere komma", "Den slutter med spørsmålstegn", "Den starter med stor bokstav", "Den gir mening alene"], 
            correctAnswer: 3
        },
        { 
            question: "Hvilket av disse ordene er et verb?", 
            options: ["Hoppet", "Skogen", "Sommer", "Fortelling"], 
            correctAnswer: 0
        },
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
