const CodeEditor = {
  codeContainer: document.querySelector('.code__content'),
  buttonHighlight: document.querySelector('.button__highlight'),
  selectedLanguage: document.querySelector('.personalization__language'),
  highlight(){
    const projectCode = CodeEditor.codeContainer.innerText;
    CodeEditor.codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true" class="hljs ${CodeEditor.selectedLanguage.value}"></code>`
    CodeEditor.codeContainer.querySelector('#code').textContent = projectCode
    hljs.highlightElement(CodeEditor.codeContainer.querySelector('#code'))
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
  if (document.querySelector('#code').classList.contains("hljs")){
    CodeEditor.codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true"></code>`
    document.querySelector('#code').textContent = userText
  }
}

export function handleHighlight() {
  CodeEditor.buttonHighlight.addEventListener('click', () => {
    removeHighlight();
    changeHighlightButton();
    applyHighlight();
    disableCodeContainer();
  })
  
  CodeEditor.selectedLanguage.addEventListener('change', () => {
    changeHighlight()
  })
}