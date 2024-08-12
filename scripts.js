document.addEventListener("DOMContentLoaded", function () {
    // Show sections with fade-in and slide-up effect
    const sections = document.querySelectorAll(".content section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                entry.target.classList.remove("hidden");
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add("hidden");
        observer.observe(section);
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

            // Highlight active link
            sidebarLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
