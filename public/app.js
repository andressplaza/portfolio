const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log((entry))
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');

    // Alternar entre el ícono de hamburguesa y el de cerrar
    const barsIcon = this.querySelector('.fa-bars');
    const timesIcon = this.querySelector('.fa-times');
    barsIcon.style.display = barsIcon.style.display === 'none' ? 'block' : 'none';
    timesIcon.style.display = timesIcon.style.display === 'none' ? 'block' : 'none';
});


window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});

document.querySelectorAll('.groovy').forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        element.style.animation = 'pulse 1s infinite';
    });

    element.addEventListener('mouseleave', function() {
        element.style.animation = 'none';
    });
});
