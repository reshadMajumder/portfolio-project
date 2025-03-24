// Contact information data
const contactInfo = [
    {
        icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>`,
        title: "Address",
        details: ["198 West 21th Street, Suite 721", "New York NY 10016"]
    },
    {
        icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>`,
        title: "Contact Number",
        details: ["+880 1627076527"]
    },
    {
        icon: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
            </svg>`,
        title: "Email Address",
        details: ["contact@jahidulhassanreshad.co"]
    },
    {
        icon: `<i class="fab fa-github "></i>`,
        title: "GitHub",
        details: ["https://github.com/reshadMajumder"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Generate contact cards
    const contactCardsContainer = document.querySelector('.contact-cards');
    contactCardsContainer.innerHTML = contactInfo.map(info => `
        <div class="contact-card">
            <div class="icon">
                ${info.icon}
            </div>
            <h3>${info.title}</h3>
            ${info.details.map(detail => `<p>${detail}</p>`).join('')}
        </div>
    `).join('');

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);
        
        try {
            // Here you would typically send the form data to your server
            console.log('Form submitted:', formObject);
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            alert('Message sent successfully!');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });

    // Add hover effects to contact cards
    const cards = document.querySelectorAll('.contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 