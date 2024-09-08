

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

document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
}); document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('show');
});

