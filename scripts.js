// Pop up the About Me section after a few seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('about').classList.remove('hidden');
    }, 3000); // 3-second delay
};
