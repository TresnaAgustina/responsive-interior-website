const x = document.querySelector(".x-icon");
const menu = document.querySelector(".nav__menu");
const toggle = document.querySelector(".nav__toggle")
const navLink = document.querySelectorAll('.nav__link')

// for open nav__menu
toggle.onclick = function () {
    menu.classList.add("open");
}

// for close nav__menu
x.onclick = function () {
    menu.classList.remove("open");
}

// when nav__link click -> close nav__menu
function linkClick(){
    // When we click on each nav__link, we remove the show-menu class
    menu.classList.remove('open')
}
navLink.forEach(n => n.addEventListener('click', linkClick))


// change navbar background while scroll
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

