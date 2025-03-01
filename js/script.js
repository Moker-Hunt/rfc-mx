// Cookie Consent Management
document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.classList.remove('hidden');
    } else {
        cookieConsent.classList.add('hidden');
    }
    
    // Handle cookie acceptance
    acceptCookiesBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.add('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (if needed in the future)
    // const menuToggle = document.getElementById('menu-toggle');
    // const navMenu = document.querySelector('nav ul');
    
    // if (menuToggle && navMenu) {
    //     menuToggle.addEventListener('click', function() {
    //         navMenu.classList.toggle('active');
    //     });
    // }
});
