// Esto muestra una ventana con un botón de aceptar
alert("Hola Mundo - Alerta Emergente");

// Primero busco el párrafo por su ID "mensaje-p"
var miParrafo = document.getElementById("mensaje-p");
// Luego le cambio el texto de adentro
miParrafo.textContent = "Hola Mundo - Visualizado en un elemento <p>";

// Para ver esto hay que apretar F12 en el navegador
console.log("Hola Mundo - Mensaje en Consola");

// Uso innerHTML porque me permite poner la etiqueta <strong> para las negritas
var miContenedor = document.getElementById("mensaje-div");
miContenedor.innerHTML = "<strong>Hola Mundo</strong> <div>";