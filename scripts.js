document.addEventListener("DOMContentLoaded", function () {
    // Delay and show sections with fade-in effect
    const sections = document.querySelectorAll(".content section");
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.remove("hidden");
            section.style.opacity = "1";
        }, 1000 * (index + 1));
    });

    // Smooth scroll to section
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });
});
