// Preguntas y respuestas
const question = [
    {
        question: "¿Qué selección nunca ganó una Copa América?",
        answer: [
            { text: "Colombia", correct: false },
            { text: "Bolivia", correct: false },
            { text: "Jamaica", correct: true },
        ]
    },
    {
        question: "¿Cual es el equipo con más Copas Libertadores de América?",
        answer: [
            { text: "Peñarol", correct: false },
            { text: "Fluminense", correct: false },
            { text: "Independiente de Avellaneda", correct: true }
        ]
    },
    {
        question: "¿Quién es el máximo goleador en Mundiales?",
        answer: [
            { text: "Klose (Alemania)", correct: true },
            { text: "Pelé (Brasil)", correct: false },
            { text: "Ronaldo (Brasil)", correct: false }
        ]
    },
    {
        question: "¿Quién es el máximo goleador en la historia de la Copa Libertadores?",
        answer: [
            { text: "Alberto Spencer (Ecuador)", correct: true },
            { text: "Fernando Morena (Uruguay)", correct: false },
            { text: "Diego Maradona (Argentina)", correct: false }
        ]
    },
    {
        question: "¿Cuál es el actual Campeón del Mundo?",
        answer: [
            { text: "Alemania", correct: false },
            { text: "Argentina", correct: true },
            { text: "Chile", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Función para barajar las preguntas en el array 'question'
function shuffleQuestions(question) {
    for (let i = question.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question[i], question[j]] = [question[j], question[i]];
    }
    return question;
}
// Función para comenzar el quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente";
    // Barajar las preguntas
    shuffleQuestions(question);
    showQuestion();
}
// Función para mostrar una pregunta
function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}
// Función para reiniciar el estado del juego
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// Función para manejar la selección de una respuesta
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
// Función para mostrar la puntuación final
function showScore() {
    resetState();
    questionElement.innerHTML = `Juego final. Tu puntaje final es ${score} de ${question.length}!`;
    nextButton.innerHTML = "Jugar de nuevo";
    nextButton.style.display = "block";
}
// Función para manejar el botón "Siguiente"
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}
// Manejo del evento click en el botón "Siguiente"
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
// Iniciar el quiz
startQuiz();