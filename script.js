// --- PARALLAX HERO SCRIPT ---
const layerBg = document.getElementById('layer-bg');
const layerMid = document.getElementById('layer-mid');
const layerFront = document.getElementById('layer-front');
const heroText = document.querySelector('.hero-text');
const floaters = document.querySelectorAll('.floater');

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;

    // Hero Parallax
    layerBg.style.transform = `translateY(${scrollY * 0.5}px)`;
    layerMid.style.transform = `translateY(${scrollY * 0.3}px)`;
    // Text moves slower now to stay visible longer
    heroText.style.transform = `translateY(${scrollY * 0.5 + 30}px)`;
    heroText.style.opacity = 1 - (scrollY / 500);

    // Foreground moves very little
    layerFront.style.transform = `translateY(${scrollY * 0.1}px)`;

    // Floating Elements Parallax
    floaters.forEach(floater => {
        const speed = floater.getAttribute('data-speed');
        floater.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// --- LOAD ANIMATION ---
window.onload = function () {
    heroText.style.opacity = '1';
    heroText.style.transform = 'translateY(0)';
};

// --- SCROLL REVEAL SCRIPT ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// --- GALLERY SLIDER SCRIPT ---
const galleryContainer = document.getElementById('galleryContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardWidth = 300 + 32; // card width + gap

function updateSliderButtons() {
    const scrollLeft = galleryContainer.scrollLeft;
    const maxScroll = galleryContainer.scrollWidth - galleryContainer.clientWidth;

    // Use Math.round to handle sub-pixel scrolling differences
    prevBtn.disabled = scrollLeft <= 10;
    nextBtn.disabled = scrollLeft >= maxScroll - 10;
}

prevBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    galleryContainer.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
    });
});

galleryContainer.addEventListener('scroll', updateSliderButtons);
// Initial check
setTimeout(updateSliderButtons, 100);

// --- SMOOTH SCROLLING FOR NAVIGATION ---
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
