const dropdownLinks = document.querySelectorAll(".nav__drop");

dropdownLinks.forEach(link =>  {
    link.addEventListener('click', (event) => {
        
        link.children[1].classList.toggle("hide");
        link.children[0].childNodes[1].classList.toggle("img__open");
        
        if((event.target.id == "drop__link__2" || event.target.id == "img__link__2") && !dropdownLinks[0].children[1].classList.contains("hide")) {
            dropdownLinks[0].children[1].classList.add("hide");
            dropdownLinks[0].children[0].childNodes[1].classList.toggle("img__open");
        } else if((event.target.id == "drop__link__1" || event.target.id == "img__link__1") && !dropdownLinks[1].children[1].classList.contains("hide")) {
            dropdownLinks[1].children[1].classList.add("hide");
            dropdownLinks[1].children[0].childNodes[1].classList.toggle("img__open");
        }
        
    });
});

const hamburger = document.getElementById("nav__burger");
const hamburgerClose = document.querySelector(".navbar__burger__slider");
const sidemenu = document.getElementById("nav__sidemenu");

const overlay = document.getElementById("overlay");

const toggleSideMenuAndOverlay = () => {
    sidemenu.classList.toggle("hide");
    overlay.classList.toggle("hide");
}

hamburger.addEventListener('click', () => {
    toggleSideMenuAndOverlay();
});

hamburgerClose.addEventListener('click', () => {
    toggleSideMenuAndOverlay();
});

overlay.addEventListener('click', () => {
    toggleSideMenuAndOverlay();
});