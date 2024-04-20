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
        // options here
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        adaptiveHeight: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const enlargement = document.createElement('div');
            enlargement.innerHTML = `<div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center;">
                                        <img src="${this.src}" style="max-width: 90%; max-height: 90%;" />
                                     </div>`;
            enlargement.addEventListener('click', function() {
                this.remove();
            });
            document.body.appendChild(enlargement);
        });
    });
});