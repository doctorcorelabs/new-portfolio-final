/* ================================
   DaivanLabs Portfolio - Enhanced Scripts
   Modern Hero with Animated Waves & Aurora
================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Remove loading state
    setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    }, 100);

    // Initialize all modules
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initNavbarScroll();
    initParallaxEffect();
    initMouseGlow();
});

/* ================================
   MOBILE MENU TOGGLE
================================ */
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!toggle || !mobileMenu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* ================================
   SMOOTH SCROLL
================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

/* ================================
   SCROLL REVEAL ANIMATION
================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay for children
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach((el, index) => {
        el.dataset.delay = index % 5; // Stagger in groups of 5
        revealObserver.observe(el);
    });
}

/* ================================
   NAVBAR SCROLL EFFECT
================================ */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;

                // Add/remove background on scroll
                if (currentScroll > 50) {
                    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                    navbar.style.borderColor = 'rgba(139, 92, 246, 0.1)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 10, 0.6)';
                    navbar.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                }

                // Hide/show navbar on scroll direction
                if (currentScroll > lastScroll && currentScroll > 300) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ================================
   PARALLAX EFFECT FOR AURORA
================================ */
function initParallaxEffect() {
    const auroraLayers = document.querySelectorAll('.aurora-layer');
    const particles = document.querySelectorAll('.particle');

    if (!auroraLayers.length) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;

                auroraLayers.forEach((layer, index) => {
                    const speed = 0.1 + (index * 0.05);
                    layer.style.transform = `translate(${scrolled * speed * 0.5}px, ${scrolled * speed}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    });
}

/* ================================
   MOUSE GLOW EFFECT ON HERO
================================ */
function initMouseGlow() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create glow element
    const glow = document.createElement('div');
    glow.className = 'mouse-glow';
    glow.style.cssText = `
        position: absolute;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
        pointer-events: none;
        z-index: 1;
        transition: transform 0.3s ease-out;
        filter: blur(40px);
    `;
    hero.querySelector('.hero-bg').appendChild(glow);

    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left - 200;
        const y = e.clientY - rect.top - 200;

        glow.style.transform = `translate(${x}px, ${y}px)`;
    });

    hero.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    hero.addEventListener('mouseenter', () => {
        glow.style.opacity = '1';
    });
}

/* ================================
   INTERSECTION OBSERVER FOR COUNTERS
================================ */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current) + suffix;
                setTimeout(updateCounter, stepTime);
            } else {
                counter.textContent = target + suffix;
            }
        };

        updateCounter();
    });
}

/* ================================
   WAVE ANIMATION ENHANCEMENT
================================ */
function initWaveInteraction() {
    const waveSvg = document.querySelector('.wave-svg');
    if (!waveSvg) return;

    document.addEventListener('mousemove', (e) => {
        const mouseY = e.clientY / window.innerHeight;
        const waves = waveSvg.querySelectorAll('.wave-path');

        waves.forEach((wave, index) => {
            const offset = (mouseY - 0.5) * 10 * (index + 1);
            wave.style.transform = `translateY(${offset}px)`;
        });
    });
}

/* ================================
   LOADING SCREEN (Optional)
================================ */
window.addEventListener('load', () => {
    // Additional initialization after full load
    setTimeout(() => {
        initWaveInteraction();
    }, 500);
});

/* ================================
   REDUCED MOTION SUPPORT
================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-smooth', '0s');
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-fast', '0s');
}
