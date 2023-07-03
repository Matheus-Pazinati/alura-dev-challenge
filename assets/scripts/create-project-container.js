export function createProjectContainer(project) {
  const projectContainer = document.createElement('li');
  projectContainer.classList.add('editor__container')
  projectContainer.innerHTML = ` <div class="editor__content editor__content-disabled" style="border-color:${project.color};">
  <div class="editor__icons">
    <div class="editor__icon icon-red"></div>
    <div class="editor__icon icon-yellow"></div>
    <div class="editor__icon icon-green"></div>
  </div>
  <label for="code" class="sr-only">Editor de código</label>
  <div class="code__content">
    ${project.code}
  </div>
  </div>
  <div class="project__data">
    <h2 class="project__title">${project.name}</h2>
    <p class="project__description">${project.description}</p>
    <div class="project__status">
      <div class="project__status-button">
        <button class="project__button">
          <i class="icon-comment" aria-label="Comentar"></i>
          0
        </button>
        <button data-like-button class="project__button">
          <i class="icon-heart" aria-label="Curtir"></i>
          <span>0</span>
        </button>
      </div>
      <a class="profile__link">
        <img>
        <span></span>
      </a>
    </div>
  </div>`;

  return projectContainer
}