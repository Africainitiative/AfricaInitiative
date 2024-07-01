// JavaScript functionality can be added here if needed
// JavaScript for toggle button functionality
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('nav ul');

    toggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});

