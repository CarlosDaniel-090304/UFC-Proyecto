const track = document.getElementById('carouselTrack');
const buttons = document.querySelectorAll('.carousel-btn');
let currentIndex = 0;

function moveToSlide(index) {
    // Si pasa del último, vuelve al primero
    if (index >= buttons.length) {
        index = 0;
    }
    // Si va antes del primero, va al último
    if (index < 0) {
        index = buttons.length - 1;
    }

    track.style.transform = `translateX(-${index * 100}%)`;
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');
    currentIndex = index;
}

function prevSlide() {
    moveToSlide(currentIndex - 1);
}

function nextSlide() {
    moveToSlide(currentIndex + 1);
}