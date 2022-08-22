export function handleMenuIconsOpenClose() {
  const menuIcons = document.querySelectorAll('.menu__toggle')
  const menuLinkHome = document.querySelector('.menu__item')
  const header = document.querySelector('.header')

  menuIcons.forEach(openCloseMenu)
  menuLinkHome.addEventListener('click', () => {
    header.classList.remove('active')
  })
}

function openCloseMenu(icon) {
  const header = document.querySelector('.header')
  icon.addEventListener('click', () => {
    header.classList.toggle('active')
  })
}