document.addEventListener('scroll', function() {
    const fixedHeader = document.getElementById('fixedHeader');
    const scrollLine = document.getElementById('scrollLine');
    if (window.scrollY > 50) {
        fixedHeader.classList.remove('transparent');
        fixedHeader.classList.add('opaque');
        scrollLine.style.background = 'linear-gradient(to right, #4b79a1, #2c3e50)';
    } else {
        fixedHeader.classList.remove('opaque');
        fixedHeader.classList.add('transparent');
        scrollLine.style.background = 'linear-gradient(to right, #2c3e50, #4b79a1)';
    }
});
