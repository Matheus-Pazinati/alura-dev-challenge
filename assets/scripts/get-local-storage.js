const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
const projectsContainer = document.querySelector('[data-project-container]')

projectsList.forEach((project, index) => {
  const projectItem = document.createElement('li');
  projectItem.classList.add('editor__container')
  projectItem.innerHTML = ` <div class="editor__content editor__content-disabled">
  <div class="editor__icons">
    <div class="editor__icon icon-red"></div>
    <div class="editor__icon icon-yellow"></div>
    <div class="editor__icon icon-green"></div>
  </div>
  <label for="code" class="sr-only">Editor de código</label>
  <div class="code__content">
    <pre><code id="code" spellcheck="false" contenteditable="false"></code></pre>
  </div>
</div>
<div class="project__data">
  <h2 class="project__title">${project.name}</h2>
  <p class="project__description">${project.description}</p>
  <div class="project__status">
    <div class="project__status-button">
      <button class="project__button">
        <i class="icon-comment"></i>
        0
      </button>
      <button data-like-button class="project__button">
        <i class="icon-heart"></i>
        <span>0</span>
      </button>
    </div>
    <a href="" class="project__profile">
      <img src="./assets/images/marcos-jeeves.jpg" alt="Foto do usuário Marcos">
      <span>Marcos Jeeves</span>
    </a>
  </div>
</div>`;
projectsContainer.appendChild(projectItem);
const projectCodeContent = projectsContainer.querySelectorAll('.code__content');
projectCodeContent[index].innerHTML = project.code;
const projectCodeBorder = document.querySelectorAll('.editor__content');
projectCodeBorder[index].style.borderColor = project.color;
})