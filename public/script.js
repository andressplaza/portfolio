const inicio = document.getElementById('inicio');
const sobremi = document.getElementById('sobremi');
const servicios = document.getElementById('servicios');
const skills = document.getElementById('skills');
const portfolio = document.getElementById('portfolio');
const secciones = [inicio, sobremi, servicios, skills, portfolio];

let elementoActualIndex = 0;
let desplazamientoEnProceso = false;

// Función para obtener el índice del elemento actualmente visible
function obtenerElementoActualIndex() {
    let index = 0;
    let distanciaMinima = Number.MAX_VALUE;

    secciones.forEach((seccion, i) => {
        const rect = seccion.getBoundingClientRect();
        const distancia = Math.abs(rect.top);
        
        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            index = i;
        }
    });

    return index;
}

// Función para realizar el desplazamiento suave hacia el elemento siguiente o anterior
function scrollSuaveHaciaElemento(elemento) {
    desplazamientoEnProceso = true;
    elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Asignar el evento de desplazamiento a la ventana
window.addEventListener('wheel', function(event) {
    if (!desplazamientoEnProceso) {
        const nuevoElementoActualIndex = obtenerElementoActualIndex();

        if (nuevoElementoActualIndex !== elementoActualIndex) {
            if (event.deltaY > 0 && nuevoElementoActualIndex < secciones.length - 1) {
                // Scroll hacia abajo
                elementoActualIndex = nuevoElementoActualIndex + 1;
                scrollSuaveHaciaElemento(secciones[elementoActualIndex]);
            } else if (event.deltaY < 0 && nuevoElementoActualIndex > 0) {
                // Scroll hacia arriba
                elementoActualIndex = nuevoElementoActualIndex - 1;
                scrollSuaveHaciaElemento(secciones[elementoActualIndex]);
            }
        }
    }
});

// Agregar un evento de finalización de desplazamiento suave
window.addEventListener('scroll', function() {
    desplazamientoEnProceso = false;
});

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function () { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}






