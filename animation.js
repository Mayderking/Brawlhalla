const images = document.querySelectorAll('.link img');

images.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.width = '370px';
        img.style.opacity = '1';
        img.style.filter = 'contrast(120%)';
    });

    img.addEventListener('mouseout', () => {
        img.style.width = '160px';
        img.style.opacity = '0.8';
        img.style.filter = 'contrast(100%)';
    });
});
