import { CodeEditor } from './code-editor.js'

function handleHighlight() {
  const buttonHighlight = document.querySelector('.button__highlight')
  const selectedLanguage = document.querySelector('.personalization__language')
  const isEditorWithHighlight = document.querySelector('#code').classList.contains("hljs")

  if (isEditorWithHighlight) {
    CodeEditor.removeHighlight()
    CodeEditor.enableCodeContainer()
    buttonHighlight.classList.remove('button__highlight--remove')
  } else {
    CodeEditor.applyHighlight(selectedLanguage.value)
    CodeEditor.disableCodeContainer()
    buttonHighlight.classList.add('button__highlight--remove')
  }
}

function changeLanguageHighlight() {
  const isCodeEditorDisabled = CodeEditor.codeContainer.classList.contains('code__content--disabled')
  if (isCodeEditorDisabled){
    CodeEditor.applyHighlight(selectedLanguage.value)
  }
}

const buttonHighlight = document.querySelector('.button__highlight')
buttonHighlight.addEventListener('click', handleHighlight)
  
const selectedLanguage = document.querySelector('.personalization__language')
selectedLanguage.addEventListener('change', changeLanguageHighlight)