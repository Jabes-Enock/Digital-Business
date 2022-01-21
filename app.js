const menuOpen = document.querySelector('#menu-open')
const menuClose = document.querySelector('#menu-close')
const navMenu = document.querySelector('.nav-menu')

const toggle = (item) => item.classList.toggle('hidden')

const menuManipulation = () => {
    toggle(menuOpen)
    toggle(menuClose)
    navMenu.classList.toggle('translate-0')
}

menuOpen.addEventListener('click', () => {
    menuManipulation()
})

menuClose.addEventListener('click', () => {
    menuManipulation()
})