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
    url(images/home1.JPEG),
    url(images/XiaoHua.JPEG)
  ]

  window.onload = () => {
    // preloading
    document.body.style.backgroundImage = `url(${images[0]})`
    document.querySelector('.hidden').src = images[1]
    let i = 1
    setInterval(() => {
      document.body.style.backgroundImage = `url(${images[i++]})`

      if (i === images.length) i = 0
      else {
        // preload the next image, so that it transitions smoothly
        document.querySelector('.hidden').src = images[i]
      }
    }, 7000)
  }