function initServicesCarousel() {
const wrapper = document.querySelector('.services__carousel-wrapper');
const plansContainer = document.querySelector('.services__plans');
const prevBtn = document.querySelector('.services__nav--prev');
const nextBtn = document.querySelector('.services__nav--next');
const plans = document.querySelectorAll('.plan');

if (!wrapper || !plansContainer || !prevBtn || !nextBtn || plans.length === 0) return;

let currentIndex = 0;

function updateCarousel() {
    const planWidth = plans[0].offsetWidth;
    const gap = 32; // 2rem gap
    const offset = -(currentIndex * (planWidth + gap));
    plansContainer.style.transform = `translateX(${offset}px)`;
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= plans.length - 1;
}

function checkCarouselNeeded() {
    const containerWidth = wrapper.offsetWidth;
    const totalWidth = Array.from(plans).reduce((total, plan) => {
    return total + plan.offsetWidth + 32; // including gap
    }, 0) - 32; // remove last gap
    
    const needsCarousel = totalWidth > containerWidth;
    wrapper.classList.toggle('carousel-active', needsCarousel);
    
    if (!needsCarousel) {
    plansContainer.style.transform = '';
    currentIndex = 0;
    }
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < plans.length - 1) {
    currentIndex++;
    updateCarousel();
    }
});

// Check on load and resize
checkCarouselNeeded();
updateCarousel();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
    checkCarouselNeeded();
    updateCarousel();
    }, 150);
});
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initServicesCarousel);
} else {
initServicesCarousel();
}