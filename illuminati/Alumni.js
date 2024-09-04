// Smooth Scroll for CTA Button
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#alumni-section').scrollIntoView({
        behavior: 'smooth'
    });
});
