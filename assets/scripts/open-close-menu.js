const header = document.querySelector('.header')

export function openCloseMenu(icon) {
  icon.addEventListener('click', () => {
    header.classList.toggle('active')
  })
}

export function disableMenuLinkHome(icon) {
  header.classList.remove('active')
}