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
let slideIndex = 0;
let intervalId =null;

// Update the background image
function updateBackground(nextIndex) {
    // Update slideIndex with provided index or move to the next
    slideIndex = nextIndex !== undefined ? nextIndex : (slideIndex + 1) % images.length;

    // Set the background image with a fade effect
    $('.home').css({
        'opacity': '0', // Hide before change
        'background-image': 'url(' + images[slideIndex] + ')' // Change the image
    }).animate({'opacity': '1'}, 500); // Fade in the new image

    // Reset the timer
    resetInterval();
}

// Resets the interval to change the background image every 5 seconds
function resetInterval() {
    clearInterval(intervalId); // Clear the existing interval
    intervalId = setInterval(() => updateBackground(), 5000); // Set a new interval
}

// Next/previous controls
function plusSlides(n) {
    let newIndex = (slideIndex + n + images.length) % images.length; // Correct calculation for new index
    updateBackground(newIndex); // Update the background with the new index
}

$(document).ready(function() {
    resetInterval(); // Initialize the interval on document ready
    updateBackground(slideIndex); // Set the first image immediately
});


// Next/previous controls
/*
function plusSlides(n) {
    var nextImage = images[slideIndex];
    slideIndex = (slideIndex + n) % images.length; 
     
    $('.home').css({
        'opacity': '0', // Hide before change
        'background-image': 'url(' + nextImage + ')' // Change the image
    }).animate({'opacity': '1'}, 500); // Fade in the new image
  }

$(document).ready(function() {
    function updateBackground() {
        var nextImage = images[slideIndex]; 
        slideIndex = (slideIndex + 1) % images.length; 

        // Update the background image without fading
        $('.home').css({
            'opacity': '0', // Hide before change
            'background-image': 'url(' + nextImage + ')' // Change the image
        }).animate({'opacity': '1'}, 500); // Fade in the new image
    }

    setInterval(updateBackground, 2000); // Change image every 5s
    updateBackground(); // Initial call to set the first image
});*/
