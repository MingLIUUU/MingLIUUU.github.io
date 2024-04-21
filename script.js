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

const images = [
    'images/home1.JPEG',
    'images/home2.jpg',
    'images/home3.jpg',
    'images/home4.jpg'

  ]

$(document).ready(function() {
    var i = 0;

    function updateBackground() {
        var nextImage = images[i]; 
        i = (i + 1) % images.length; 

        // Update the background image without fading
        $('.home').css({
            'opacity': '0', // Hide before change
            'background-image': 'url(' + nextImage + ')' // Change the image
        }).animate({'opacity': '1'}, 500); // Fade in the new image
    }

    setInterval(updateBackground, 5000); // Change image every 5s
    updateBackground(); // Initial call to set the first image
});
