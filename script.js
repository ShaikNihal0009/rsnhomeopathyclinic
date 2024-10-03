document.querySelector('.hamburger').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.toggle('open'); // Toggle the 'open' class to show the menu
});

document.querySelector('.hamburger-menu .close').addEventListener('click', function() {
    const menu = document.querySelector('.hamburger-menu');
    menu.classList.remove('open'); // Remove the 'open' class to hide the menu
});

// Slideshow logic
let currentImage = 0;
const images = document.querySelectorAll('.slideshow-image');
setInterval(() => {
    images[currentImage].style.display = 'none';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.display = 'block';
}, 10000);

// Show section logic
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}
