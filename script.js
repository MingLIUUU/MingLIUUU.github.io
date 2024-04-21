let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}

// slider control
const images = [
    'images/home1.jpg',
    'images/home2.jpg',
    'images/home3.jpg',
    'images/home4.jpg'

  ]
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    slideIndex = (slideIndex + n + images.length) % images.length;
    $('.home').css({
        'opacity': '0', // Hide before change
        'background-image': 'url(' + images[slideIndex] + ')' // Change the image
    }).animate({'opacity': '1'}, 500); // Fade in the new image
  }

$(document).ready(function() {
    function updateBackground() {
        var nextImage = images[slideIndex]; 
        if (slideIndex != 1) {
            slideIndex = (slideIndex + 1) % images.length; 
        }

        // Update the background image without fading
        $('.home').css({
            'opacity': '0', // Hide before change
            'background-image': 'url(' + nextImage + ')' // Change the image
        }).animate({'opacity': '1'}, 500); // Fade in the new image
    }

    setInterval(updateBackground, 5000); // Change image every 5s
    updateBackground(); // Initial call to set the first image
});
