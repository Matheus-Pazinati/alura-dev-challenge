export function handleSearchFieldOpenClose() {
  const searchIcons = document.querySelectorAll('.search__toggle')
  searchIcons.forEach(openCloseSearchField)
}

function openCloseSearchField(icon) {
  const header = document.querySelector('.header')
  icon.addEventListener('click', () => {
    const menuIsOpen = header.classList.contains('active')
    if (menuIsOpen) {
      header.classList.remove('active')
    }
    header.classList.toggle('search')
  })
}