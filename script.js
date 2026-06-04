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

// Load saved language or default to English
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});
