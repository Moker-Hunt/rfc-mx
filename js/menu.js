const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
        
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    navToggle.classList.toggle('active');
});
        
// Handle dropdown menus
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('dropdown-active');
                
        // Close other dropdowns
        dropdownToggles.forEach(otherToggle => {
            if (otherToggle !== toggle) {
                otherToggle.parentElement.classList.remove('dropdown-active');
            }
        });
    });
});
        
// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('dropdown-active');
        });
    }
});

const menu = document.querySelector("header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
        
    if (scrollTop > lastScrollTop) {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;
});