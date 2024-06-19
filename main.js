window.addEventListener('scroll', function() {
    var image = document.getElementById('movingImage');
    var scrollPosition = window.scrollY;

    // Ajusta el factor de desplazamiento para controlar la velocidad de movimiento de la imagen
    var movementFactor = 0.1; // Cambiar a un valor más pequeño para movimiento más lento

    image.style.transform = 'translateY(' + ((scrollPosition * movementFactor) - 50) + 'vh)';

    // Ocultar la imagen cuando está en la parte superior
    if (scrollPosition <= 0) {
        image.style.opacity = '0';
        image.style.visibility = 'hidden';
    } else {
        image.style.opacity = '1';
        image.style.visibility = 'visible';
    }
});

document.getElementById('movingImage').addEventListener('click', function() {
    // Lleva la página a la parte superior al hacer clic en la imagen
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal functionality
/*document.getElementById('openModalBtn').addEventListener('click', function() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();*/

    // video 
    document.getElementById('toggleVideoBtn').addEventListener('click', function() {
        var videoContainer = document.getElementById('videoContainer');
        if (videoContainer.classList.contains('hidden')) {
            videoContainer.classList.remove('hidden');
        } else {
            videoContainer.classList.add('hidden');
        }
    });

    document.querySelector('.btn-close-custom').addEventListener('click', function() {
        var videoContainer = document.getElementById('videoContainer');
        videoContainer.classList.add('hidden');
    });


