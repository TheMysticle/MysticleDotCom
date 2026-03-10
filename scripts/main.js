function openChannel(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.getElementById('subscribe-button');

    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            alert('Thank you for subscribing! Stay tuned for more content.');
        });
    }

    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Copy IP button logic
    const copyIpBtn = document.getElementById('copy-ip-btn');
    const mcIp = document.getElementById('mc-ip');
    if (copyIpBtn && mcIp) {
        copyIpBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(mcIp.textContent.trim());
            copyIpBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyIpBtn.textContent = 'Copy IP';
            }, 1500);
        });
    }
});

// Theme toggle logic with emoji
const themeToggle = document.getElementById('theme-toggle');
const themeEmoji = document.getElementById('theme-emoji');

function setTheme(isLight) {
    document.body.classList.toggle('light-theme', isLight);
    themeEmoji.textContent = isLight ? '☀️' : '🌙';
}

// Default to dark theme
setTheme(false);

themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-theme');
    setTheme(isLight);
});

// Modal (Discord) open/close
(function() {
    const openBtn = document.getElementById('open-discord-modal');
    const modal = document.getElementById('discord-modal');
    const closeBtn = document.getElementById('discord-modal-close');

    if (!openBtn || !modal) return;

    function openModal() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // focus first focusable element for accessibility
        const focusable = modal.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        openBtn.focus();
    }

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // close on Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
})();

// Support Modal (Buy Me A Coffee) open/close
(function() {
    const openBtn = document.getElementById('open-support-modal');
    const modal = document.getElementById('support-modal');
    const closeBtn = document.getElementById('support-modal-close');

    if (!openBtn || !modal) return;

    function openModal() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // focus first focusable element for accessibility
        const focusable = modal.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        openBtn.focus();
    }

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // close on Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
})();