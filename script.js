// Henter elementer fra DOM
const lifeCountElement = document.getElementById('life-count');
const quizLifeCountElement = document.getElementById('quiz-life-count'); 
const categoryButtons = document.querySelectorAll('.category');
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const winScreen = document.getElementById('win-screen');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const restartButton = document.getElementById('restart-button');
const restartButtonWin = document.getElementById('restart-button-win');

let lives = 3;
let completedCategories = [];
let currentCategory = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;
let shuffledQuestions = [];

const questions = {
    matte: [
        { question: "Hva er 5 + 7?", answers: ["10", "11", "12", "13"], correct: 2 },
        { question: "Hva er 9 x 6?", answers: ["54", "56", "48", "52"], correct: 0 },
        { question: "Hva er kvadratroten av 121?", answers: ["10", "11", "12", "13"], correct: 1 },
        { question: "Hva er 15 - 8?", answers: ["6", "7", "8", "9"], correct: 1 },
        { question: "Hva er 7²?", answers: ["42", "45", "49", "56"], correct: 2 },
        { question: "Hva er 1000 ÷ 10?", answers: ["10", "100", "1000", "10000"], correct: 1 },
        { question: "Hva er 14 + 28?", answers: ["32", "38", "42", "44"], correct: 2 },
        { question: "Hva er 0,5 x 8?", answers: ["2", "3", "4", "5"], correct: 2 },
        { question: "Hva er 20% av 50?", answers: ["5", "10", "15", "20"], correct: 1 },
        { question: "Hva er summen av vinklene i en trekant?", answers: ["90°", "180°", "270°", "360°"], correct: 1 },
    ],
    naturfag: [
        { question: "Hva er det kjemiske symbolet for gull?", answers: ["Ag", "Au", "G", "Go"], correct: 1 },
        { question: "Hva er den største planeten i solsystemet vårt?", answers: ["Jupiter", "Saturn", "Neptun", "Mars"], correct: 0 },
        { question: "Hva heter prosessen der planter omdanner lys til energi?", answers: ["Respirasjon", "Fotosyntese", "Fermentering", "Osmose"], correct: 1 },
        { question: "Hvilket organ pumper blod i kroppen?", answers: ["Lungene", "Hjertet", "Nyrene", "Leveren"], correct: 1 },
        { question: "Hva er hovedgassen i jordens atmosfære?", answers: ["Oksygen", "Karbondioksid", "Nitrogen", "Hydrogen"], correct: 2 },
        { question: "Hva er den røde planeten?", answers: ["Venus", "Mars", "Jupiter", "Merkur"], correct: 1 },
        { question: "Hvor mange kromosomer har et menneske?", answers: ["23", "46", "69", "92"], correct: 1 },
        { question: "Hva er det hardeste naturlige materialet?", answers: ["Diamant", "Granitt", "Kvarts", "Stål"], correct: 0 },
        { question: "Hvilken enhet måler elektrisk strøm?", answers: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1 },
        { question: "Hva er pH-verdien til rent vann?", answers: ["7", "0", "14", "5"], correct: 0 },
    ],
    samfunnsfag: [
        { question: "Hva er hovedstaden i Norge?", answers: ["Bergen", "Oslo", "Trondheim", "Stavanger"], correct: 1 },
        { question: "Hvilken verdensdel ligger Egypt i?", answers: ["Asia", "Afrika", "Europa", "Sør-Amerika"], correct: 1 },
        { question: "Hvem er Norges konge?", answers: ["Kong Harald V", "Kong Olav V", "Kong Haakon VII", "Kong Carl XVI Gustaf"], correct: 0 },
        { question: "Når fikk kvinner stemmerett i Norge?", answers: ["1905", "1913", "1920", "1945"], correct: 1 },
        { question: "Hva er FN en forkortelse for?", answers: ["Fellesforbundet", "Folkets Nasjon", "Forente Nasjoner", "Fredsforbundet"], correct: 2 },
        { question: "Hvilket land brukte først demokratiet?", answers: ["Roma", "Hellas", "Egypt", "Kina"], correct: 1 },
        { question: "Hva heter valutaen i USA?", answers: ["Euro", "Pund", "Dollar", "Yen"], correct: 2 },
        { question: "Hvilket hav ligger mellom Afrika og Australia?", answers: ["Atlanterhavet", "Det indiske hav", "Stillehavet", "Nordishavet"], correct: 1 },
        { question: "Hva er verdens største land etter areal?", answers: ["Canada", "USA", "Russland", "Kina"], correct: 2 },
        { question: "Hvem var Norges første statsminister?", answers: ["Jens Stoltenberg", "Frederik Stang", "Gro Harlem Brundtland", "Einar Gerhardsen"], correct: 1 },
    ],
    norsk: [
        { question: "Hvem skrev 'Peer Gynt'?", answers: ["Henrik Ibsen", "Knut Hamsun", "Bjørnstjerne Bjørnson", "Sigrid Undset"], correct: 0 },
        { question: "Hva er et synonym for 'rask'?", answers: ["Langsom", "Hurtig", "Stor", "Liten"], correct: 1 },
        { question: "Hva er antonymet til 'høy'?", answers: ["Lav", "Tynn", "Mørk", "Lys"], correct: 0 },
        { question: "Hvilken bokstav kommer etter 'H' i det norske alfabetet?", answers: ["I", "J", "K", "L"], correct: 0 },
        { question: "Hva er et verb?", answers: ["Beskriver en handling", "Navn på ting", "Beskriver egenskaper", "Navn på steder"], correct: 0 },
        { question: "Hva er den norske nasjonalsangen?", answers: ["Ja, vi elsker", "Gud signe vårt dyre fedreland", "Norge i rødt, hvitt og blått", "Mitt lille land"], correct: 0 },
        { question: "Hvem skrev 'Sult'?", answers: ["Henrik Ibsen", "Knut Hamsun", "Alexander Kielland", "Amalie Skram"], correct: 1 },
        { question: "Hva er en 'metafor'?", answers: ["En sammenligning uten 'som'", "En overdrivelse", "Et lydhermende ord", "Et rim"], correct: 0 },
        { question: "Hva er 'substantiv'?", answers: ["Navn på en person, sted eller ting", "Beskriver en handling", "Beskriver en egenskap", "Beskriver et antall"], correct: 0 },
        { question: "Hva betyr 'antonym'?", answers: ["Et ord med motsatt betydning", "Et ord med samme betydning", "Et beskrivende ord", "Et uvanlig ord"], correct: 0 },
    ],
    engelsk: [
        { question: "Hva betyr 'apple' på norsk?", answers: ["Ananas", "Eple", "Pære", "Banan"], correct: 1 },
        { question: "Hva er det engelske ordet for 'katt'?", answers: ["Dog", "Cat", "Mouse", "Bird"], correct: 1 },
        { question: "Hva er preteritum av 'go'?", answers: ["Goes", "Went", "Gone", "Going"], correct: 1 },
        { question: "Hva betyr 'beautiful'?", answers: ["Stygg", "Vakker", "Slem", "Snill"], correct: 1 },
        { question: "Hva er flertallsformen av 'child'?", answers: ["Childs", "Children", "Childes", "Child"], correct: 1 },
        { question: "Hva er motsatt av 'old'?", answers: ["Young", "New", "Ancient", "Modern"], correct: 0 },
        { question: "Hva betyr 'to run'?", answers: ["Å gå", "Å hoppe", "Å løpe", "Å sitte"], correct: 2 },
        { question: "Hva er riktig oversettelse av 'bok'?", answers: ["Book", "Back", "Buck", "Bike"], correct: 0 },
        { question: "Hva betyr 'house'?", answers: ["Hus", "Muse", "Hest", "Lus"], correct: 0 },
        { question: "Hva er det engelske ordet for 'skole'?", answers: ["School", "Shoel", "Skool", "Shool"], correct: 0 },
    ],
    krle: [
        { question: "Hvem er sentral i kristendommen?", answers: ["Muhammed", "Buddha", "Jesus", "Moses"], correct: 2 },
        { question: "Hva heter islams hellige bok?", answers: ["Bibelen", "Torahen", "Koranen", "Vedaene"], correct: 2 },
        { question: "Hvor mange bud er det i de ti bud?", answers: ["5", "7", "10", "12"], correct: 2 },
        { question: "Hvilken religion feirer Ramadan?", answers: ["Kristendom", "Islam", "Jødedom", "Hinduisme"], correct: 1 },
        { question: "Hva er etikk?", answers: ["Læren om rett og galt", "Læren om universet", "Læren om planter", "Læren om tall"], correct: 0 },
        { question: "Hvem var Siddhartha Gautama?", answers: ["Grunnleggeren av buddhismen", "En kristen apostel", "En hinduistisk gud", "En islamsk profet"], correct: 0 },
        { question: "Hva symboliserer duen i kristendommen?", answers: ["Fred", "Krig", "Lykke", "Sorg"], correct: 0 },
        { question: "Hvilken religion praktiserer yoga som en del av sin tradisjon?", answers: ["Kristendom", "Hinduisme", "Jødedom", "Islam"], correct: 1 },
        { question: "Hva betyr 'ateist'?", answers: ["En som ikke tror på noen gud", "En som tror på én gud", "En som er usikker på om gud eksisterer", "En som tror på mange guder"], correct: 0 },
        { question: "Hva er den gyldne regel?", answers: ["Gjør mot andre det du vil at andre skal gjøre mot deg", "Den som har gull, har makt", "Vinn for enhver pris", "Følg alltid reglene"], correct: 0 },
    ],
};


// Håndtere kategorivalg
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        if (completedCategories.includes(category)) return;
        startQuiz(category);
    });
});

// Funksjon for å stokke en array 
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Starte quizzen
function startQuiz(category) {
    currentCategory = category;
    correctAnswers = 0;
    lifeCountElement.innerText = lives;
    updateQuizLivesDisplay();

    // Stokk spørsmålene og ta de første 10
    const categoryQuestions = [...questions[currentCategory]];
    shuffledQuestions = shuffle(categoryQuestions).slice(0, 10);
    currentQuestionIndex = 0;

    homeScreen.style.display = 'none';
    quizScreen.style.display = 'block';

    showQuestion();
}

// Funksjon for å oppdatere livsindikatoren på quizskjermen
function updateQuizLivesDisplay() {
    let livesDisplay = '';
    for (let i = 0; i < lives; i++) {
        livesDisplay += '❤';
    }
    quizLifeCountElement.innerText = livesDisplay;
}

// Vise spørsmål
function showQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    questionText.innerText = questionData.question;
    answersDiv.innerHTML = '';

    questionData.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.addEventListener('click', () => checkAnswer(index));
        answersDiv.appendChild(btn);
    });
}

// Sjekke svar
function checkAnswer(selectedIndex) {
    const questionData = shuffledQuestions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        correctAnswers++;
        if (correctAnswers === 3) {
            categoryCompleted(currentCategory);
            return;
        }
    } else {
        lives--;
        lifeCountElement.innerText = lives;
        updateQuizLivesDisplay();
        if (lives <= 0) {  
            gameOver();
            return;
        }
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        categoryCompleted(currentCategory);
    }
}

// Fullføre kategori
function categoryCompleted(category) {
    completedCategories.push(category);
    quizScreen.style.display = 'none';
    homeScreen.style.display = 'block';

    const categoryButton = document.querySelector(`button[data-category="${category}"]`);
    categoryButton.classList.add('completed');

    if (completedCategories.length === categoryButtons.length) {
        winGame();
    }
}

// Game Over
function gameOver() {
    quizScreen.style.display = 'none';
    gameOverScreen.style.display = 'block';
}

// Vinn spillet
function winGame() {
    homeScreen.style.display = 'none';
    winScreen.style.display = 'block';
}

// Restart funksjonalitet
restartButton.addEventListener('click', resetGame);
restartButtonWin.addEventListener('click', resetGame);

function resetGame() {
    lives = 3;
    lifeCountElement.innerText = lives;
    updateQuizLivesDisplay();

    completedCategories = [];
    categoryButtons.forEach(button => {
        button.classList.remove('completed');
    });

    gameOverScreen.style.display = 'none';
    winScreen.style.display = 'none';
    homeScreen.style.display = 'block';
}
