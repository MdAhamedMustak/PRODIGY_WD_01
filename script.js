document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const body = document.body;

    const colors = ["#f25d07", "#008000", "#4169e1", "#ff69b4"]; // Define an array of colors
    let colorIndex = 0;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        // Determine color index based on scroll position
        colorIndex = Math.floor((scrollPosition / (document.body.scrollHeight - window.innerHeight)) * colors.length);

        // Update background color
        body.style.backgroundColor = colors[colorIndex];
        navbar.style.backgroundColor = colors[colorIndex];
    });
});
