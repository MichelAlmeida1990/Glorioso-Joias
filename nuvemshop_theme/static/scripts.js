document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            if (header) header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            if (header) header.style.boxShadow = "none";
        }
    });

    // Mobile Menu Toggle (Se necessário conforme as classes da Nuvemshop)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }
});
