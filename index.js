import { CodeEditor } from "./assets/scripts/code-editor.js";
import { openCloseSearchField } from "./assets/scripts/open-close-search.js";
import { openCloseMenu, disableMenuLinkHome } from './assets/scripts/open-close-menu.js';
import { CodeData } from './assets/scripts/create-project.js'

const menuIcons = document.querySelectorAll('.menu__toggle')
const menuLinkHome = document.querySelector('.menu__item')
const searchIcons = document.querySelectorAll('.search__toggle')

const selectColor = document.querySelector('.personalization__color')
selectColor.addEventListener('change', () => {
  CodeEditor.changeBorderColor(color.value)
})

menuIcons.forEach(openCloseMenu)
searchIcons.forEach(openCloseSearchField)
menuLinkHome.addEventListener('click', disableMenuLinkHome)

CodeData.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  CodeData.verifyLogin();
  CodeData.verifyEmptyCodeField();
  CodeData.saveOnLocalStorage();
  CodeData.showSucessMessage();
  CodeData.clearProjectFields();
})