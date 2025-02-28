// Script principal para el sitio de RFC México

document.addEventListener('DOMContentLoaded', function() {
    // Detectar la página actual para resaltar el elemento de navegación correspondiente
    highlightCurrentNavItem();
    
    // Inicializar comportamiento de scroll suave para enlaces internos
    initSmoothScroll();
    
    // Inicializar el banner de cookies
    initCookieConsent();
});

/**
 * Resalta el elemento de navegación correspondiente a la página actual
 */
function highlightCurrentNavItem() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Si la ruta del enlace coincide con la página actual o
        // si estamos en la página de inicio y el enlace es a index.html
        if (currentPage.includes(linkPath) || 
            (currentPage.endsWith('/') && linkPath === 'index.html') ||
            (currentPage.endsWith('index.html') && linkPath === 'index.html')) {
            link.style.fontWeight = 'bold';
            link.style.backgroundColor = 'rgba(0, 104, 71, 0.1)';
        }
    });
}

/**
 * Inicializa el comportamiento de scroll suave para enlaces internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Ajuste para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Inicializa el banner de consentimiento de cookies
 */
function initCookieConsent() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    
    // Verificar si el usuario ya aceptó las cookies
    if (localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'none';
        return;
    }
    
    // Mostrar el banner
    cookieConsent.style.display = 'block';
    
    // Configurar el botón de aceptar
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }
}

/**
 * Función para mostrar/ocultar elementos de contenido desplegable
 * (para posible uso futuro en secciones de preguntas frecuentes)
 */
function toggleContent(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}


// Cookie consent
document.getElementById('acceptCookies').addEventListener('click', function() {
    document.getElementById('cookieConsent').style.display = 'none';
    // Aquí se puede añadir código para guardar la preferencia del usuario
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
