function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger-menu');
const closeButton = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.style.display = 'block'; // Show the hamburger menu
});

closeButton.addEventListener('click', () => {
    menu.style.display = 'none'; // Hide the hamburger menu
});

// Close the menu when a link is clicked
const menuLinks = menu.querySelectorAll('ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.style.display = 'none'; // Hide the menu on link
