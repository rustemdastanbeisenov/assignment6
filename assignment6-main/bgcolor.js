const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const sections = document.querySelectorAll('section');

let currentTheme = localStorage.getItem('theme') || 'light';

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-bs-theme', 'dark');
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
        themeIcon.src = 'moon-icon.png';
        
        sections.forEach(section => {
            if (section.classList.contains('bg-light')) {
                section.classList.remove('bg-light');
                section.classList.add('bg-dark');
                section.classList.add('text-white');
            }
        });
        
        sections.forEach(section => {
            if (section.classList.contains('bg-warning')) {
                section.classList.remove('bg-warning');
                section.classList.add('bg-danger');
                section.classList.add('text-white');
            }
        });
    } else {
        document.body.removeAttribute('data-bs-theme');
        document.body.style.backgroundColor = '#f4f4a1';
        document.body.style.color = '#000000';
        themeIcon.src = 'sun-icon.png';

        sections.forEach(section => {
            if (section.classList.contains('bg-dark')) {
                section.classList.remove('bg-dark');
                section.classList.add('bg-light');
                section.classList.remove('text-white');
            }
        });
        
        sections.forEach(section => {
            if (section.classList.contains('bg-danger')) {
                section.classList.remove('bg-danger');
                section.classList.add('bg-warning');
                section.classList.remove('text-white');
            }
        });
    }
}

applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', function() {
    const newTheme = document.body.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});