const button = document.querySelector("#nav-mobile");
const navItems = document.querySelector(".nav-items");
const navIcons = document.querySelector(".nav-icons");

button.addEventListener("click",function(){
    navIcons.classList.toggle("active");
    navItems.classList.toggle("active");
})