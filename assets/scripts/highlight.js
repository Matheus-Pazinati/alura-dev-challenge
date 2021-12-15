const codeContainer = document.querySelector('.code__content')
const buttonHighlight = document.querySelector('.button__highlight')
const selectedLanguage = document.querySelector('.personalization__language')
const codeTextArea = document.querySelector('.code__content textarea')

function applyHighlight() {
  const projectCode = codeTextArea.value
  codeContainer.innerHTML = `<textarea name="code" id="code" spellcheck="false" class="hljs ${selectedLanguage.value}"></textarea>`
  codeContainer.querySelector('textarea').textContent = projectCode
  hljs.highlightElement(codeTextArea)
}

buttonHighlight.addEventListener('click', () => {
  applyHighlight()
})