import { disableMenuLinkHome, openCloseMenu } from "./assets/scripts/open-close-menu.js";
import { openCloseSearchField } from "./assets/scripts/open-close-search.js";

const menuIcons = document.querySelectorAll('.menu__toggle')
const menuLinkHome = document.querySelector('.menu__item')
const searchIcons = document.querySelectorAll('.search__toggle')

menuIcons.forEach(openCloseMenu)
searchIcons.forEach(openCloseSearchField)
menuLinkHome.addEventListener('click', disableMenuLinkHome)