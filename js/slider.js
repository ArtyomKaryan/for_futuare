let slideIndex = 0;
let slideInterval;

// Initialize the slideshow
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    startSlideShow();
});

// Next/previous controls
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startSlideShow();
}

// Thumbnail image controls
function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n - 1);
    startSlideShow();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n === undefined) {
        n = ++slideIndex;
    }
    
    if (n >= slides.length) {
        slideIndex = 0;
        n = 0;
    }
    
    if (n < 0) {
        slideIndex = slides.length - 1;
        n = slides.length - 1;
    } else {
        slideIndex = n;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}

function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlides();
    }, 5000); // Change slide every 5 seconds
}