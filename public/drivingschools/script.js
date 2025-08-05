// Main JavaScript functionality for CleverLink Driving School website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initHeroInteractions();
    initFeatureCards();
    initDemoSystem();
    initCTAButtons();
    initAnimations();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const header = document.querySelector('.header');

    // Mobile menu toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu) {
                        mobileMenu.classList.remove('active');
                        mobileMenuBtn.classList.remove('active');
                    }
                }
            }
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Special handling for statistics counters
                if (entry.target.classList.contains('benefit-stat')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.feature-card, .benefit-item, .testimonial-card, .hero-content, .hero-visual');
    animatedElements.forEach(el => observer.observe(el));
}

// Hero section interactions
function initHeroInteractions() {
    const demoBtn = document.getElementById('demoBtn');
    const exploreBtn = document.getElementById('exploreBtn');
    
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Animate typing indicator
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        setInterval(() => {
            typingIndicator.style.opacity = typingIndicator.style.opacity === '0' ? '1' : '0';
        }, 2000);
    }
}

// Feature cards interaction
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    const demoContainer = document.getElementById('demoContainer');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active state from all cards
            featureCards.forEach(c => c.classList.remove('active'));
            
            // Add active state to clicked card
            this.classList.add('active');
            
            // Get feature type
            const featureType = this.dataset.feature;
            
            // Scroll to demo section
            const demoSection = document.getElementById('demo');
            if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' });
                
                // Load demo after scroll
                setTimeout(() => {
                    loadDemo(featureType);
                }, 500);
            }
        });

        // Add hover effect for try me indicator
        card.addEventListener('mouseenter', function() {
            const indicator = this.querySelector('.try-me-indicator');
            if (indicator) {
                indicator.style.opacity = '1';
                indicator.style.transform = 'translateX(0)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const indicator = this.querySelector('.try-me-indicator');
            if (indicator) {
                indicator.style.opacity = '0';
                indicator.style.transform = 'translateX(20px)';
            }
        });
    });
}

// Demo system
function initDemoSystem() {
    // This will be expanded in ai-features.js
    console.log('Demo system initialized');
}

// CTA button interactions
function initCTAButtons() {
    const getInContact = document.getElementById('getInContact');
    const getInContactHero = document.getElementById('getInContactHero');
    const contactOverlay = document.getElementById('contactOverlay');
    const closeContact = document.getElementById('closeContact');
    const contactForm = document.getElementById('contactForm');
    
    // Main CTA button
    if (getInContact && contactOverlay) {
        getInContact.addEventListener('click', function() {
            contactOverlay.classList.add('active');
        });
    }
    
    // Hero contact button
    if (getInContactHero && contactOverlay) {
        getInContactHero.addEventListener('click', function() {
            contactOverlay.classList.add('active');
        });
    }
    
    if (closeContact && contactOverlay) {
        closeContact.addEventListener('click', function() {
            contactOverlay.classList.remove('active');
        });
        
        // Close when clicking outside modal
        contactOverlay.addEventListener('click', function(e) {
            if (e.target === contactOverlay) {
                contactOverlay.classList.remove('active');
            }
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            showNotification('Thank you for your interest! We\'ll contact you within 24 hours.', 'success');
            
            // Close modal and reset form
            contactOverlay.classList.remove('active');
            contactForm.reset();
        });
    }

    // Get started button (links to main CleverLink site)
    const getStartedBtns = document.querySelectorAll('a[href*="cleverlink.uk"]');
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Add analytics tracking here if needed
            console.log('Redirecting to CleverLink main site');
        });
    });
}

// Animation utilities
function initAnimations() {
    // Stagger animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            const rate = scrolled * -0.5;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Counter animation for statistics
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
}

// Load demo functionality
function loadDemo(demoType) {
    const demoContainer = document.getElementById('demoContainer');
    if (!demoContainer) return;

    // Clear existing demos
    demoContainer.innerHTML = '';
    
    // Show loading state
    demoContainer.innerHTML = '<div class="demo-loading"><div class="spinner"></div><p>Loading demo...</p></div>';

    // Load specific demo after short delay
    setTimeout(() => {
        switch(demoType) {
            case 'chatbot':
                loadChatbotDemo(demoContainer);
                break;
            case 'voice':
                loadVoiceDemo(demoContainer);
                break;
            case 'sms':
                loadSMSDemo(demoContainer);
                break;
            case 'booking':
                loadBookingDemo(demoContainer);
                break;
            case 'tutor':
                loadTutorDemo(demoContainer);
                break;
            case 'documents':
                loadDocumentsDemo(demoContainer);
                break;
            case 'lessons':
                loadLessonsDemo(demoContainer);
                break;
            case 'assistant':
                loadWebsiteDemo(demoContainer);
                break;
            default:
                demoContainer.innerHTML = '<div class="demo-placeholder"><p>Select a feature above to see a live demonstration</p></div>';
        }
    }, 800);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <p>${message}</p>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: white;
        border: 1px solid #f0f0f0;
        border-radius: 0.5rem;
        padding: 1rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        z-index: 3000;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimizations
const debouncedResize = debounce(() => {
    // Handle resize events
    console.log('Window resized');
}, 250);

const throttledScroll = throttle(() => {
    // Handle scroll events
}, 16);

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Export functions for use in other files
window.CleverLinkDS = {
    loadDemo,
    showNotification,
    animateCounter
};