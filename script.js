function toggleMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}

$(document).ready(function(){
    $('.your-carousel-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight: true
    });
});
