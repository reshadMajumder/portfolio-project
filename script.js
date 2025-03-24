// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update the animation settings
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Enhanced animation for portfolio items
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'all 0.8s ease-out';
    item.style.transitionDelay = `${index * 0.2}s`;
    observer.observe(item);
});

// Add hover effect to portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'scale(1.03)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'scale(1)';
    });
});

// Banner image rotation
function rotateBannerImages() {
    const images = document.querySelectorAll('.banner-image');
    let currentIndex = 0;

    setInterval(() => {
        // Remove active class from all images
        images.forEach(img => img.classList.remove('active'));
        
        // Add active class to next image
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 1000);
}

// Simplify the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', rotateBannerImages);

// Animate services on scroll
const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '50px'
});

serviceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    card.style.transitionDelay = `${index * 0.1}s`;
    serviceObserver.observe(card);
});

// Counter animation for portfolio number
function animateCounter() {
    const counterSection = document.querySelector('.portfolio-counter');
    let started = false;

    window.addEventListener('scroll', () => {
        if (counterSection.getBoundingClientRect().top < window.innerHeight && !started) {
            started = true;
            let count = 0;
            const target = 300;
            const duration = 2000;
            const increment = target / (duration / 16);

            const counter = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(counter);
                }
                counterSection.querySelector('span').textContent = Math.floor(count);
            }, 16);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.portfolio-counter')) {
        animateCounter();
    }
}); 