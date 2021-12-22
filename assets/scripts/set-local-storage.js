const projectCode = document.querySelector('[data-project-code]')
const projectName = document.querySelector('[data-project-name]')
const projectDescription = document.querySelector('[data-project-description]')
const projectBorderColor = document.querySelector('[data-project-colors]')
const projectSaveButton = document.querySelector('[data-project-button]')

function saveOnLocalStorage() {
  const projectData = {
    code: projectCode.innerText,
    name: projectName.value,
    description: projectDescription.value,
    color: projectBorderColor.value
  }
  const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
  projectsList.push(projectData);
  localStorage.setItem("projects", JSON.stringify(projectsList)|| '[]');
  console.log('Saved')
}

projectSaveButton.addEventListener('click', () => {
  saveOnLocalStorage();
})