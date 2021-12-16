const codeContainer = document.querySelector('.code__content')
const buttonHighlight = document.querySelector('.button__highlight')
const selectedLanguage = document.querySelector('.personalization__language')

const CodeEditor = {
  codeContainer,
  buttonHighlight,
  selectedLanguage,
  highlight(){
    const projectCode = codeContainer.innerText 
    codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true" class="hljs ${selectedLanguage.value}"></code>`
    codeContainer.querySelector('#code').textContent = projectCode
    hljs.highlightElement(codeContainer.querySelector('#code'))
  },
}

function changeHighlight() {
  if (CodeEditor.codeContainer.classList.contains('code__content--disabled')){
    CodeEditor.highlight()
  }
}

function applyHighlight() {
  if (CodeEditor.codeContainer.classList.contains('code__content--disabled')){
    return;
  }
  CodeEditor.highlight()
}

function disableCodeContainer() {
  CodeEditor.codeContainer.classList.toggle('code__content--disabled')
}

function changeHighlightButton() {
  CodeEditor.buttonHighlight.classList.toggle('button__highlight--remove')
}

function removeHighlight() {
  const userText = CodeEditor.codeContainer.innerText
  if (code.classList.contains("hljs")){
    CodeEditor.codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true" class="hljs"></code>`
    code.textContent = userText
  }
}

CodeEditor.buttonHighlight.addEventListener('click', () => {
  removeHighlight()
  changeHighlightButton();
  applyHighlight();
  disableCodeContainer();
})

selectedLanguage.addEventListener('change', () => {
  changeHighlight()
})