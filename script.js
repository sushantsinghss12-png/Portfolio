// ===============================
// Typing Animation
// ===============================
const roles = [
    "Frontend Developer",
    "Python Developer",
    "Web Designer",
    "UI/UX Enthusiast",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;

function type() {
    const currentRole = roles[roleIndex];
    const typingElement = document.querySelector(".typing-text");
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex--);
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex++);
        typingSpeed = 120;
    }
    
    if (!isDeleting && charIndex > currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }
    
    setTimeout(type, typingSpeed);
}

// Start typing animation
type();


// ===============================
// Particles Background
// ===============================
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ffa6"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffa6",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


// ===============================
// Scroll Animations
// ===============================
ScrollReveal().reveal('.hero-content', {
    delay: 200,
    distance: '50px',
    origin: 'bottom'
});

ScrollReveal().reveal('.about-image', {
    delay: 300,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('.about-content', {
    delay: 400,
    distance: '50px',
    origin: 'right'
});

ScrollReveal().reveal('.skills-category', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.project-card', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 150
});

ScrollReveal().reveal('.timeline-item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 200
});

ScrollReveal().reveal('.contact-info', {
    delay: 200,
    distance: '50px',
    origin: 'left'
});

ScrollReveal().reveal('.contact-form-wrapper', {
    delay: 300,
    distance: '50px',
    origin: 'right'
});


// ===============================
// Skill Bar Animation on Scroll
// ===============================
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const progressBar = item.querySelector('.skill-progress');
        
        if (isElementInViewport(item)) {
            setTimeout(() => {
                progressBar.style.width = percent + '%';
            }, 300);
        }
    });
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', animateSkillBars);


// ===============================
// Mobile Menu Toggle
// ===============================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.width = '100%';
    nav.style.background = 'rgba(10,10,10,0.95)';
    nav.style.padding = '20px';
    nav.style.gap = '15px';
});


// ===============================
// Navbar Background on Scroll
// ===============================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10,10,10,0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,255,166,0.1)';
    } else {
        header.style.background = 'rgba(10,10,10,0.85)';
        header.style.boxShadow = 'none';
    }
});


// ===============================
// Contact Form Handling
// ===============================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Show success message (in production, you'd send this to a server)
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon!`);
    
    // Reset form
    contactForm.reset();
});


// ===============================
// Smooth Scroll for Navigation
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                nav.style.display = 'none';
            }
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ===============================
// Active Navigation Link on Scroll
// ===============================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});


// ===============================
// Add CSS for active nav link
// ===============================
const style = document.createElement('style');
style.textContent = `
    nav a.active {
        color: #00ffa6 !important;
    }
    nav a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);


// ===============================
// Scroll Progress Bar
// ===============================
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00ffa6, #00d4ff);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});


// ===============================
// Initialize Skill Bars on Load
// ===============================
window.addEventListener('load', () => {
    setTimeout(animateSkillBars, 500);
});


// ===============================
// Console Welcome Message
// ===============================
console.log('%c🎨 Portfolio Created by Sushant Kumar', 'color: #00ffa6; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to customize and make it your own!', 'color: #888; font-size: 14px;');
