window.onload = () => {
    document.querySelector('.loader').style.display = "none"
}

//-----//Time and greeting//------//
let today = new Date()
let time= today.getHours()

let greetingEl = document.getElementById("greeting-el")

if (time>=0 && time<5) {
    greetingEl.textContent = ("How's your night?")
}else if (time>=5 && time<12) {
    greetingEl.textContent = ("Good Morning!")
}else if (time>=12 && time<16) {
    greetingEl.textContent = ("Good Afternoon!")
}else if (time>=16 && time<21) {
    greetingEl.textContent = ("Good Evening!")
}else if(time>=21 && time<=24) {
    greetingEl.textContent = ("How's your night?")
}else if (time>24){
    greetingEl.textContent = ("Hello!")
}else {
    greetingEl.textContent = ("Hello!")
}

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
