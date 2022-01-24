const header = document.querySelector('.header')
const logoPhrase = document.querySelector('#logo-phrase')
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

const eventScroll = () => {
  const windowHeight = window.pageYOffset
  
  if(windowHeight >= 70) {
    header.classList.add('bg-black')
    logoPhrase.classList.add('hidden')
  }
  else {
    header.classList.remove('bg-black')
    logoPhrase.classList.remove('hidden')
  }
}

window.addEventListener('scroll', eventScroll 
)