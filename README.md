# Actividad: Hola Mundo en JavaScript (Semana 5)

Este proyecto demuestra las 4 formas básicas de salida de datos en JavaScript.

## Estructura del Proyecto
* `index.html`: Archivo principal de la aplicación.
* `actividad.js`: Lógica de programación en JavaScript.
* `img/`: Carpeta con las evidencias (capturas de pantalla).

## Cómo ejecutar
1. Abre el archivo `index.html` en tu navegador.
2. Acepta la alerta inicial para permitir que el resto del script se ejecute.
3. Presiona `F12` para ver la pestaña **Consola**.

## Reflexión
¿Qué ventajas/desventajas tiene cada método (alert, DOM, consola, div)?
A. Alerta Emergente (alert)
Ventajas: Es imposible de ignorar, esto detiene todo lo que está pasando en la página hasta que el usuario interactúa, lo cual es útil para avisos legales o errores críticos que impiden seguir usando la web.
Desventajas: Es intrusiva y molesta, rompe la experiencia del usuario, y además, pausa la ejecución de todo el JavaScript.

Estilo: No se puede personalizar con CSS, y se ve según el diseño del sistema operativo del usuario.

B. Mensaje en el Documento 
Ventajas: Es la forma más rápida de añadir contenido de texto simple, y se integra perfectamente con el flujo de lectura de la página.
Desventajas: Si solo usas textContent, pierdes la capacidad de dar formato (negritas, colores, etc.) dentro de ese texto, y es menos flexible que un contenedor estructurado.

C. Impresión en Consola (console.log)
Ventajas: Invisible para el usuario final, pero nos permite a los programadores ver datos complejos (como arreglos o bases de datos) sin ensuciar la interfaz visual
Desventajas: Si olvidas borrarlos antes de subir tu web a internet, otros programadores podrán ver tus mensajes de prueba (y a veces datos sensibles) al presionar F12.

D. Contenedor DIV (div)
Ventajas: Es el "estándar de oro" para interfaces modernas, porque al usar innerHTML o manipular sus clases, puedes crear alertas personalizadas, banners, ventanas flotantes y componentes complejos que sí se pueden diseñar con CSS.
Desventajas: Requiere un poco más de código y cuidado para no romper la estructura visual (el diseño) del sitio.

¿Cuál usarías para depurar (debug) y cuál para mostrar información al usuario final? ¿Por qué?
Cuando los programas, necesitas saber qué está pasando detrás de cámaras, podemos imaginar que estás calculando el total de una compra, y se usas la consola para ver el precio antes de impuestos, el IVA y el total, si usaramos la alert, tendrías que dar clic en "Aceptar" en cada paso del cálculo, lo cual es ineficiente. La consola te permite dejar un rastro de migajas de pan para encontrar errores sin que el cliente se entere de que algo falló durante tus pruebas.

Para el Usuario Final: El DOM (div y elementos HTML)
Control Visual: Puedes hacer que el div desaparezca suavemente con una animación.
No es Bloqueante: El usuario puede seguir leyendo o haciendo scroll mientras el mensaje está ahí.
Profesionalismo: Una web que usa muchos alert se siente antigua o incluso sospechosa, como los virus de los años 2000, de una web moderna usa componentes dentro del DOM.
