document.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to My Art Portfolio');
});

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}