
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerHandler = null;

function fetchQuestions() {
    return fetch('js/preguntas.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('La respuesta al cargar los datos no fue correcta');
            }
            return response.json();
        })
        .catch((error) => {
            console.error('Error al cargar las preguntas:', error);
        });
}

function shuffleQuestions(question) {
    for (let i = question.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [question[i], question[j]] = [question[j], question[i]];
    }
    return question;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Siguiente';
    fetchQuestions()
        .then((data) => {
            question = data; // Asigna los datos del JSON a la variable 'question'
            shuffleQuestions(question);
            showQuestion();
        });
}

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.index = index; // Agregar atributo personalizado
        answerButtons.appendChild(button);

        button.addEventListener('click', () => selectAnswer(index));
    });
}


function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    selectedAnswerHandler = null;
}

function selectAnswer(index) {
    const selectedBtn = answerButtons.querySelector(`[data-index="${index}"]`);
    const isCorrect = question[currentQuestionIndex].answer[index].correct;

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');

        // Mostrar la respuesta correcta
        const correctIndex = question[currentQuestionIndex].answer.findIndex(answer => answer.correct);
        const correctBtn = answerButtons.querySelector(`[data-index="${correctIndex}"]`);
        correctBtn.classList.add('correct');
    }

    // Bloquear los botones después de la selección
    const buttons = answerButtons.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}


function showScore() {
    resetState();
    questionElement.innerHTML = `Juego final. Tu puntaje final es ${score} de ${question.length}!`;
    nextButton.innerHTML = 'Jugar de nuevo';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Iniciar el quiz
startQuiz();