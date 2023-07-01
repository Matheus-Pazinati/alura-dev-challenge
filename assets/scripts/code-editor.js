export const CodeEditor = {
  codeContainer: document.querySelector('.code__content'),
  editorContainer: document.querySelector('.editor__container'),
  disableCodeContainer: () => {
    CodeEditor.codeContainer.classList.add('code__content--disabled')
  },
  enableCodeContainer: () => {
    CodeEditor.codeContainer.classList.remove('code__content--disabled')
  },
  changeBorderColor: (color) => {
    CodeEditor.editorContainer.style.borderColor = color;
  },
  applyHighlight: (language) => {
    const projectCode = CodeEditor.codeContainer.innerText;
    CodeEditor.codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true" class="hljs ${language}"></code>`
    CodeEditor.codeContainer.querySelector('#code').textContent = projectCode
    hljs.highlightElement(CodeEditor.codeContainer.querySelector('#code'))
  },
  removeHighlight: () => {
    const userText = CodeEditor.codeContainer.innerText
    CodeEditor.codeContainer.innerHTML = `<code id="code" spellcheck="false" contenteditable="true"></code>`
    document.querySelector('#code').textContent = userText
  }
}