const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('menu-toggle').checked = false;
            });
        });