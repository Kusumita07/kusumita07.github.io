document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".sidebar ul li a");

    // Make "About Me" section visible by default, hide others
    sections.forEach(section => {
        if (section.id !== "about") {
            section.classList.add("hidden");
        } else {
            section.classList.add("visible");
        }
    });

    // Function to scroll to the selected section
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Hide all sections except the target
        sections.forEach(section => {
            if (section === targetSection) {
                section.classList.remove("hidden");
                section.classList.add("visible");
            } else {
                section.classList.add("hidden");
                section.classList.remove("visible");
            }
        });

        // Smooth scroll to the selected section
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    }

    // Add click event listeners to all sidebar links
    links.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    // Initial sidebar animation
    document.querySelectorAll(".sidebar ul li").forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
    });
});
