// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const body = document.body;

    // Check if elements exist before proceeding
    if (!mobileMenuToggle || !mobileNav || !mobileMenuOverlay || !closeMobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Open mobile menu
    function openMobileMenu() {
        // Animate burger button
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        }
        
        // Show overlay and menu
        mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        mobileNav.classList.remove('translate-x-full');
        body.style.overflow = 'hidden';
        
        // Add active class for additional styling if needed
        mobileMenuToggle.classList.add('active');
        
        // Add blur effect to background elements
        body.classList.add('mobile-menu-open');
    }

    // Close mobile menu
    function closeMobileMenuFunc() {
        // Reset burger button
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
        
        // Hide overlay and menu
        mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
        mobileNav.classList.add('translate-x-full');
        body.style.overflow = '';
        
        // Remove active class
        mobileMenuToggle.classList.remove('active');
        
        // Remove blur effect from background elements
        body.classList.remove('mobile-menu-open');
    }

    // Event listeners
    mobileMenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openMobileMenu();
    });
    
    closeMobileMenu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenuFunc();
    });
    
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenuFunc();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMobileMenuFunc();
        }
    });

    // Close mobile menu when clicking on navigation links
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenuFunc();
        });
    });
});

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Scroll to Top Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        function toggleScrollToTop() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.addEventListener('scroll', toggleScrollToTop);
    }
});
