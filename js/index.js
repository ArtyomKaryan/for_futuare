// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initNavLinks();
    initSlider();
    initCalculatorTabs();
    initScrollBehavior();
});

// Mobile Menu Logic
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');

    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    overlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Navigation Links Logic
function initNavLinks() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the section to show
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
            
            if (section) {
                // Close mobile menu if open
                document.querySelector('.mobile-nav').classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
                document.body.style.overflow = '';
                
                // Scroll to section
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Slider Logic
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // Show current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }

    // Next slide
    function nextSlide() {
        let newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    // Previous slide
    function prevSlide() {
        let newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Start auto-sliding
    function startSlider() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Stop auto-sliding
    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Event listeners
    nextBtn.addEventListener('click', function() {
        stopSlider();
        nextSlide();
        startSlider();
    });

    prevBtn.addEventListener('click', function() {
        stopSlider();
        prevSlide();
        startSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    // Pause on hover
    const slider = document.querySelector('.slideshow-container');
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);

    // Start the slider
    showSlide(0);
    startSlider();
}

// Calculator Tabs Logic
function initCalculatorTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const calcContents = document.querySelectorAll('.calc-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update active calculator content
            calcContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Smooth Scroll Behavior
function initScrollBehavior() {
    // Add smooth scroll to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}
