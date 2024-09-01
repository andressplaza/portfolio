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
const hiddenFixedElements2 = document.querySelectorAll('.hidden-right-onces');
const hiddenFixedElements = document.querySelectorAll('.hidden-left-onces');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));

hiddenFixedElements.forEach((el) => onceObserver.observe(el));
hiddenFixedElements2.forEach((el) => onceObserver.observe(el));


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

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
  });

  "use client";
 
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
 

