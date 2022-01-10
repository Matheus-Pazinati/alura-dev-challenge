const projectName = document.querySelector('[data-project-name]')
const projectDescription = document.querySelector('[data-project-description]')
const projectBorderColor = document.querySelector('[data-project-colors]')
const projectForm = document.querySelector('[data-form]')
const projectLanguage = document.querySelector('[data-project-language]')
const editorBorder = document.querySelector('.editor__container')
const codeText = document.querySelector('.code__content')

function saveOnLocalStorage() {
  const projectData = {
    code: codeText.innerHTML,
    name: projectName.value,
    description: projectDescription.value,
    color: projectBorderColor.value,
  }
  const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
  projectsList.push(projectData);
  localStorage.setItem("projects", JSON.stringify(projectsList)|| '[]');
}

projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  verifyLogin();
  verifyEmptyCodeField();
  saveOnLocalStorage();
  clearProjectFields();
})
function verifyEmptyCodeField() {
  if (codeText.innerText == ""){
    Swal.fire(
      'Ops, está faltando alguma coisa',
      'O campo de código está vazio!',
      'error'
    )
    throw new Error('O campo de código está vazio')
  }
}

function clearProjectFields() {
  codeText.innerHTML = `<pre><code id="code" spellcheck="false" contenteditable="true"></code></pre>`
  codeText.classList.remove('code__content--disabled');
  document.querySelector('.button__highlight').classList.remove('button__highlight--remove');
  projectName.value = "";
  projectDescription.value = "";
  projectLanguage.selectedIndex = 0;
  projectBorderColor.value = "#0597F2"
  editorBorder.style.borderColor = "#0597F2";
  document.querySelector('[data-export-button]').disabled = true;
}

function verifyLogin () {
  const userLogged = JSON.parse(localStorage.getItem("user"));
  if (userLogged == null) {
    Swal.fire(
      'Ops, está faltando alguma coisa',
      'Você ainda não fez login na plataforma',
      'error'
    )
    throw new Error('Falta fazer login')
  }
}