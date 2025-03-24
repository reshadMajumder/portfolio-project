// Load and display portfolio items
async function loadPortfolio() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();
        const container = document.getElementById('portfolio-items');

        data.works.forEach((item, index) => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.style.transitionDelay = `${index * 0.1}s`;

            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-item-content">
                    <div class="portfolio-item-category">${item.category}</div>
                    <h3 class="portfolio-item-title">${item.title}</h3>
                    <p class="portfolio-item-description">${item.description}</p>
                </div>
            `;

            container.appendChild(portfolioItem);
        });

        // Animate items on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '50px'
        });

        document.querySelectorAll('.portfolio-item').forEach(item => {
            observer.observe(item);
        });

        // Add hover effects
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('img').style.transform = 'scale(1.05)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.querySelector('img').style.transform = 'scale(1)';
            });
        });

    } catch (error) {
        console.error('Error loading portfolio:', error);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', loadPortfolio);

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
}); 