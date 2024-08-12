// Pop up sections one by one after the page loads
window.onload = function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('show');
        }, index * 500); // Delays each section by 0.5 seconds
    });
};
