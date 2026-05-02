const text = ["Full Stack Developer", "Angular Developer", "JavaScript Expert"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const element = document.querySelector(".typing");

    if (i >= text.length) {
        i = 0;  
    }

    if (!isDeleting && j <= text[i].length) {
        currentText = text[i].substring(0, j++);
    } 
    else if (isDeleting && j >= 0) {
        currentText = text[i].substring(0, j--);
    }

    element.textContent = currentText;

    if (j === text[i].length) {
        isDeleting = true;
    }

    if (j === 0 && isDeleting) {
        isDeleting = false;
        i++; // kalon te fjala tjetër
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active-link");
        }
    });
});


const faders = document.querySelectorAll(".section, .hero-card, .skill-card, .project-card");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(el => {
    el.classList.add("fade-in");
    appearOnScroll.observe(el);
});


const reveals = document.querySelectorAll(".section, .hero-card, .skill-card, .project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});