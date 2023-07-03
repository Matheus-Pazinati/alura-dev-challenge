import { createProjectContainer } from "./create-project-container.js";

const projectsList = getProjetsDataFromLocalStorage()
const projectsContainer = document.querySelector('[data-project-container]')
  
projectsList.forEach((project) => {
    const projectItem = createProjectContainer(project)
    projectsContainer.appendChild(projectItem);
})


function getProjetsDataFromLocalStorage() {
  const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
  return projectsList
}