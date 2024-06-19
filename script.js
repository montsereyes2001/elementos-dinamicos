let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-play functionality
function autoPlay() {
    nextSlide();
    setTimeout(autoPlay, 3000); // Change slide every 3 seconds
}

// Initialize the first slide and start auto-play
showSlide(currentIndex);
setTimeout(autoPlay, 3000);

// Obtener la pluma
const penContainer = document.querySelector('.pen-container');

// Función para mostrar u ocultar la pluma según el desplazamiento de la página
function togglePen() {
    if (window.scrollY > 100) { // Cambia 100 por el umbral de desplazamiento deseado
        penContainer.style.display = 'block'; // Mostrar la pluma cuando el desplazamiento es suficiente
    } else {
        penContainer.style.display = 'none'; // Ocultar la pluma cuando el desplazamiento es insuficiente
    }
}

// Escuchar el evento de desplazamiento de la página y llamar a la función togglePen
window.addEventListener('scroll', togglePen);

