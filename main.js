const header = document.querySelector('.header')
const menuIcons = document.querySelectorAll('.menu__toggle')
const searchIcons = document.querySelectorAll('.search__toggle')
const menuLinkHome = document.querySelector('.menu__item')

menuIcons.forEach(openCloseMenu)
searchIcons.forEach(openCloseSearchField)

menuLinkHome.addEventListener('click', () => {
  header.classList.remove('active')
})

function openCloseMenu(icon) {
  icon.addEventListener('click', () => {
    header.classList.toggle('active')
  })
}

function openCloseSearchField(icon) {
  icon.addEventListener('click', () => {
    const menuOpen = header.classList.contains('active')
    if (menuOpen) {
      header.classList.remove('active')
    }
    header.classList.toggle('search')
  })
}
changeBorderColor()
const selectColor = document.querySelector('.personalization__color')
selectColor.addEventListener('change', changeBorderColor)

function changeBorderColor() {
  const editorBorder = document.querySelector('.editor__container')
  const selectedColor = color.value 
  editorBorder.style.borderColor = selectedColor;
}