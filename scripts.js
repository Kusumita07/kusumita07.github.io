// JavaScript for handling section animations and smooth scrolling

window.onload = function() {
    // Fade in sections one by one after the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 500); // Delay each section by 0.5 seconds
    });
};

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
