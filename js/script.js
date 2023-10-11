// Preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Qué selección nunca ganó una Copa América?",
        respuestas: [
            { letra: "a", respuesta: "Colombia" },
            { letra: "b", respuesta: "Bolivia" },
            { letra: "c", respuesta: "Jamaica" }
        ],
        respuestaCorrecta: "c"
    },
    {
        pregunta: "¿Cual es el equipo con más Copas Libertadores de América?",
        respuestas: [
            { letra: "a", respuesta: "Peñarol" },
            { letra: "b", respuesta: "Fluminense" },
            { letra: "c", respuesta: "Independiente de Avellaneda" }
        ],
        respuestaCorrecta: "c"
    },
    {
        pregunta: "¿Quién es el máximo goleador en Mundiales?",
        respuestas: [
            { letra: "a", respuesta: "Klose (Alemania)" },
            { letra: "b", respuesta: "Pelé (Brasil)" },
            { letra: "c", respuesta: "Ronaldo (Brasil)" }
        ],
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Quién es el máximo goleador en la historia de la Copa Libertadores?",
        respuestas: [
            { letra: "a", respuesta: "Alberto Spencer (Ecuador)" },
            { letra: "b", respuesta: "Fernando Morena (Uruguay)" },
            { letra: "c", respuesta: "Diego Maradona (Argentina)" }
        ],
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Cuál es el actual Campeón del Mundo?",
        respuestas: [
            { letra: "a", respuesta: "Alemania" },
            { letra: "b", respuesta: "Argentina" },
            { letra: "c", respuesta: "Chile" }
        ],
        respuestaCorrecta: "b"
    }
];

// Función para mezclar las preguntas y no salgan ordenadas
function mezclarPreguntas(preguntas) {
    for (let i = preguntas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
    }
    return preguntas;
}

// Función para ejecutar el juego 
function jugarQuiz() {
    let puntaje = 0;
    const preguntasMezcladas = mezclarPreguntas([...preguntas]);

    for (let i = 0; i < preguntasMezcladas.length; i++) {
        const preguntaActual = preguntasMezcladas[i];
        const respuesta = prompt(`${preguntaActual.pregunta}\n${preguntaActual.respuestas.map(r => `(${r.letra}) ${r.respuesta}`).join('\n')}`);

        if (respuesta === null) {
            // El usuario ha cancelado el juego
            mostrarMensajeFinal(puntaje, true);
            return;
        }

        if (respuesta && respuesta.toLowerCase() === preguntaActual.respuestaCorrecta) {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert(`Respuesta incorrecta. La respuesta correcta es: (${preguntaActual.respuestaCorrecta}) ${preguntaActual.respuestas.find(r => r.letra === preguntaActual.respuestaCorrecta).respuesta}`);
        }
    }

    mostrarMensajeFinal(puntaje, false);
}

// Función para mostrar el mensaje final
function mostrarMensajeFinal(puntaje, cancelado) {
    if (cancelado) {
        alert("El juego ha sido cancelado.");
    } else {
        alert(`El juego ha finalizado. ¡Gracias por jugar!\nPuntaje total: ${puntaje} de 5`);
    }
}

// Iniciar el juego al cargar la página
jugarQuiz();