

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const onceObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-left');
const hiddenElements2 = document.querySelectorAll('.hidden-right');
const hiddenFixedElements2 = document.querySelectorAll('.hidden-right-once');
const hiddenFixedElements = document.querySelectorAll('.hidden-left-once');

const hiddenUpElements = document.querySelectorAll('.hidden-up');
const hiddenUpOnceElements = document.querySelectorAll('.hidden-up-once');
const hiddenDownElements = document.querySelectorAll('.hidden-down');
const hiddenDownOncesElements = document.querySelectorAll('.hidden-down-once');

hiddenUpElements.forEach((el) => observer.observe(el));
hiddenUpOnceElements.forEach((el) => observer.observe(el));
hiddenDownElements.forEach((el) => onceObserver.observe(el));
hiddenDownOncesElements.forEach((el) => onceObserver.observe(el));

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenFixedElements.forEach((el) => onceObserver.observe(el));
hiddenFixedElements2.forEach((el) => onceObserver.observe(el));


document.querySelectorAll('.groovy').forEach(function (element) {
    element.addEventListener('mouseenter', function () {
        element.style.animation = 'pulse 1s infinite';
    });

    element.addEventListener('mouseleave', function () {
        element.style.animation = 'none';
    });
});


// Detectar si hay una preferencia de tema en el almacenamiento local o sistema
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.body.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode');

// Función para alternar el tema
const toggleTheme = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
};


// Escuchar el clic para alternar el modo
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);