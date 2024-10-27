let currentColorIndex = 0;
let currentThemeColorIndex = 0;

document.getElementById('colorBtn').addEventListener('click', function() {
    const colors = ['#a1f4a1', '#a1f4f4', '#a1a1f4', '#f4a1f4', '#f4a1a1', '#f4f4a1'];
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    }

    themeToggleBtn.addEventListener('click', function () {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});