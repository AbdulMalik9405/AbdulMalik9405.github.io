const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');
const body = document.body;
const menu = document.getElementById("menu");

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
    document.getElementById("github-icon").setAttribute('src', isDark ? 'github-mark-white.svg' : 'github-mark.svg');
});

document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('menu-toggle').checked = false;
            });
        });

document.addEventListener('click', (event) => {
    console.log('You clicked:', event.target);
    if (!menu.contains(event.target) && 
        !document.getElementById("menu-toggle").contains(event.target) &&
        !document.getElementById("menu-icon").contains(event.target))
        {
            document.getElementById("menu-toggle").checked = false;
        }
});