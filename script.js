// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// Language Switching
// ============================================
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    
    elements.forEach(el => {
        if (lang === 'my') {
            el.innerHTML = el.getAttribute('data-my');
        } else {
            el.innerHTML = el.getAttribute('data-en');
        }
    });

    // Update active button state
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-my').classList.toggle('active', lang === 'my');
    
    // Store preference
    localStorage.setItem('preferredLang', lang);
}

// ============================================
// Dark Mode Toggle
// ============================================
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Store preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update button emoji
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// Load saved theme
function loadTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').textContent = '☀️';
    }
}

// ============================================
// GSAP Animations
// ============================================
function initAnimations() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from(heroContent, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }

    // Feature cards stagger animation
    const featureCards = document.querySelectorAll('.feature-card');
    gsap.from(featureCards, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#features',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        }
    });

    // Price cards animation
    const priceCards = document.querySelectorAll('.price-card');
    gsap.from(priceCards, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
            trigger: '#pricing',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        }
    });

    // Step numbers animation
    const stepNums = document.querySelectorAll('.step-num');
    stepNums.forEach((step, index) => {
        gsap.from(step, {
            opacity: 0,
            scale: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: '#how-it-works',
                start: 'top 80%'
            }
        });
    });

    // Floating CTA animation
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        gsap.to(floatingCta, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Magnetic button effect
    const buttons = document.querySelectorAll('.btn-magnetic');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3
            });
        });
    });

    // Scroll reveal for section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        gsap.from(title, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: title,
                start: 'top 85%'
            }
        });
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            gsap.to(window, {
                scrollTo: href,
                duration: 1,
                ease: 'power3.inOut'
            });
        }
    });
});

// ============================================
// Parallax Effect on Hero
// ============================================
function initParallax() {
    const hero = document.querySelector('.hero');
    if (hero) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 10;
            const y = (e.clientY / window.innerHeight) * 10;
            
            gsap.to(hero, {
                backgroundPosition: `${x}% ${y}%`,
                duration: 0.5,
                overwrite: 'auto'
            });
        });
    }
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
    loadTheme();

    // Initialize animations
    initAnimations();
    initParallax();

    // Add scroll trigger refresh
    ScrollTrigger.refresh();

    // Refresh on window resize
    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
    });
});

// ============================================
// Smooth Scroll Support
// ============================================
gsap.registerPlugin(ScrollToPlugin);

// Add smooth scroll to window object if not available
if (!window.scrollTo) {
    window.scrollTo = function(options) {
        if (typeof options === 'object' && options.top !== undefined) {
            gsap.to(window, {
                scrollTo: options.top,
                duration: 1,
                ease: 'power3.inOut'
            });
        }
    };
}

// ============================================
// Performance Optimization
// ============================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Reduce motion for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0.5);
}
