const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');
const body = document.body;
const menu = document.getElementById("menu");

const scroll_label = document.getElementById('scroll-label');
const scroll_icon = document.getElementById('scroll-icon');

function toggleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    // At bottom → scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Not at bottom → scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    document.getElementById("github-icon").setAttribute('src', 'github-mark-white.svg');
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

(function() {
            emailjs.init({
              publicKey: "JxZGUfM1ucG5LHohR",
            });
        })();

type="text/javascript"
window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('service_wr3nofp', 'template_z0ujbfj', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }