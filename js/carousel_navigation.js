// Sélection des éléments du carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

const slideWidth = slides[0].getBoundingClientRect().width;

// Positionner les slides les unes à côté des autres
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

// Fonction pour déplacer le carousel
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Gérer les boutons
const updateButtons = (slides, prevButton, nextButton, targetIndex) => {
    prevButton.disabled = targetIndex === 0;

    nextButton.disabled = targetIndex === slides.length - 1;
};

// Gestion des événements pour bouton "Suivant"
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.indexOf(nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateButtons(slides, prevButton, nextButton, nextIndex);
});

// Gestion des événements pour bouton "Précédent"
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.indexOf(prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateButtons(slides, prevButton, nextButton, prevIndex);
});

// Initial State : Désactiver le bouton "Précédent" au départ
prevButton.disabled = true;