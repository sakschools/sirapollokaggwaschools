document.addEventListener('DOMContentLoaded', function() {
    // Set autoplay interval in milliseconds
    const interval = 5000; // 5 seconds

    // Function to advance the carousel to the next slide
    function nextSlide() {
        const carousel = document.getElementById('carouselExampleAutoplaying');
        const carouselInstance = bootstrap.Carousel.getInstance(carousel);
        carouselInstance.next();
    }

    // Start autoplay on page load
    let autoplayInterval = setInterval(nextSlide, interval);

    // Pause autoplay when mouse is hovered over the carousel
    carouselExampleAutoplaying.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });

    // Resume autoplay when mouse leaves the carousel
    carouselExampleAutoplaying.addEventListener('mouseleave', function() {
        autoplayInterval = setInterval(nextSlide, interval);
    });
});
