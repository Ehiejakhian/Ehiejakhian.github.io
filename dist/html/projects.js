
let navBtn = document.querySelector('.nav-btn')
navBtn.addEventListener('click', openMenu)

let nav = document.querySelector('nav')

let menuOpen = false
function openMenu() {
    if (menuOpen) {
        navBtn.classList.remove('open-a')
        nav.classList.remove('open-nav')
        menuOpen = false
        console.log('menu closed')
    } else {
        navBtn.classList.add('open-a')
        nav.classList.add('open-nav')
        menuOpen = true
        console.log('menu open')
    }
    return menuOpen
}


console.clear()
console.log(document.querySelectorAll('h2#greeting-el'))