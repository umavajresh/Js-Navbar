let menu_open = document.querySelector(".menu_open")
let menu_close = document.querySelector(".menu_close")
let links = document.querySelector(".navbar .links")
console.log(menu_open)
console.log(menu_close)
console.log(links)

menu_open.addEventListener("click", function (){
    links.classList.toggle("active")
})
menu_close.addEventListener("click", function (){
    links.classList.toggle("active")
})