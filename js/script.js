// Función para ejecutar el juego de quiz
function jugarQuiz() {
    let puntaje = 0;

    // Pregunta 1
    const respuesta1 = prompt("¿Qué equipo nunca ganó una Copa América?\n (a) Colombia\n (b) Bolivia\n (c) Jamaica");
    if (respuesta1.toLowerCase() === "c" || respuesta1.toLowerCase() === "jamaica") {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: (c) Jamaica");
    }

    // Pregunta 2
    const respuesta2 = prompt("¿Cual es el equipo con más Copas Libertadores de América?\n(a) Peñarol \n(b) Fluminense \n(c) Independiente de Avellaneda");
    if (respuesta2.toLowerCase() === "c" || respuesta1.toLowerCase() === "independiente de avellaneda") {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: (c) Independiente de Avellaneda");
    }

    // Pregunta 3
    const respuesta3 = prompt("¿Quién es el máximo goleador en Mundiales?\n(a) Klose (Alemania) \n(b) Pelé (Brasil) \n(c) Ronaldo (Brasil)");
    if (respuesta3.toLowerCase() === "a" || respuesta3.toLowerCase() === "klose (alemania)") {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: (a) Klose (Alemania)");
    }

    // Pregunta 4
    const respuesta4 = prompt("¿Quién es el máximo goleador en la historia de la Copa Libertadores?\n(a) Alberto Spencer (Ecuador) \n(b) Fernando Morena (Uruguay) \n(c) Diego Maradona (Argentina)");
    if (respuesta4.toLowerCase() === "a" || respuesta4.toLowerCase() === "alberto spencer (ecuador)") {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: (a) Alberto Spencer (Ecuador)");
    }

    // Pregunta 5
    const respuesta5 = prompt("¿Cuál es el actual Campeón del Mundo'?\n(a) Alemania \n(b) Argentina \n(c) Chile");
    if (respuesta5.toLowerCase() === "b" || respuesta5.toLowerCase() === "argentina") {
        puntaje++;
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: (b) Argentina");
    }

    console.log("Juego terminado. Tu puntaje es: " + puntaje + " de 5");
}

// Iniciar el juego al cargar la página
jugarQuiz();