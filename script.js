// Main Script - Navigation and Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeScrollEffects();
    initializeFormHandling();
    initializeSmoothAnchors();
    initializeThemeToggle();
    simulateLoading();
});

function simulateLoading() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progress = loadingScreen.querySelector('.loading-progress');
    
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 30;
        if (width > 100) width = 100;
        progress.style.width = width + '%';
        
        if (width === 100) {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.pointerEvents = 'none';
            }, 500);
        }
    }, 200);
}

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Mobile hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Close mobile menu when link is clicked
    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        }
    });
}

function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll(
        '.content-card, .social-card, .game-card, .feature-card, .info-card'
    );

    elementsToObserve.forEach((element) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function initializeFormHandling() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const inputs = form.querySelectorAll('input, textarea, select');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderBottomColor = '#ff006e';
                } else {
                    input.style.borderBottomColor = '';
                }
            });

            if (!isValid) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            const email = form.querySelector('input[type="email"]').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            showNotification('Message sent successfully! I will get back to you soon.', 'success');
            form.reset();
            console.log('Form submitted:', Object.fromEntries(formData));
        });
    }
}

function initializeSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    document.body.className = savedTheme === 'light' ? 'light-mode' : '';
    updateThemeToggleIcon(savedTheme === 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDarkMode = document.body.classList.contains('light-mode');
            document.body.classList.toggle('light-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            updateThemeToggleIcon(!isDarkMode);
        });
    }
}

function updateThemeToggleIcon(isLight) {
    const icon = document.getElementById('themeToggle').querySelector('i');
    icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1.2rem 2rem;
        background-color: ${type === 'success' ? '#3db88a' : '#ff006e'};
        color: white;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    const style = document.createElement('style');
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes slideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const scrollPosition = window.scrollY;
        heroVisual.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});

// Add subtle mouse parallax to 3D container
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.hero-3d-container');
    if (container) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
        container.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
    }
});
