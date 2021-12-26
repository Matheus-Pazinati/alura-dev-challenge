const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
const projectsContainer = document.querySelector('[data-project-container]')

projectsList.forEach((project, index) => {
  const projectItem = document.createElement('li');
  projectItem.classList.add('editor__container')
  projectItem.innerHTML = ` <div class="editor__content">
  <div class="editor__icons">
    <div class="editor__icon icon-red"></div>
    <div class="editor__icon icon-yellow"></div>
    <div class="editor__icon icon-green"></div>
  </div>
  <label for="code" class="sr-only">Editor de código</label>
  <div class="code__content">
    <pre><code id="code" spellcheck="false" contenteditable="false" class="hljs ${project.language}"></code></pre>
  </div>
</div>
<div class="project__data">
  <h2 class="project__title">${project.name}</h2>
  <p class="project__description">${project.description}</p>
  <div class="project__status">
    <div class="project__status-button">
      <a href="" class="project__button">
        <img src="./assets/images/icon-comment.svg" alt="Ícone balão de comentário">
        0
      </a>
      <a href="" class="project__button">
        <img src="./assets/images/icon-like.svg" alt="Ícone coração de like">
        0
      </a>
    </div>
    <a href="" class="project__profile">
      <img src="./assets/images/marcos-jeeves.jpg" alt="Foto do usuário Marcos">
      <span>Marcos Jeeves</span>
    </a>
  </div>
</div>`;
projectsContainer.appendChild(projectItem);
const projectCodeContent = projectsContainer.querySelectorAll('#code');
projectCodeContent[index].textContent = project.code;
if (project.highlight) {
  hljs.highlightElement(projectCodeContent[index])
}
const projectCodeBorder = document.querySelectorAll('.editor__content');
projectCodeBorder[index].style.borderColor = project.color;
})