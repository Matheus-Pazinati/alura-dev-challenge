const CodeData = {
  projectForm: document.querySelector('[data-form]'),
  projectName: document.querySelector('[data-project-name]'),
  projectDescription: document.querySelector('[data-project-description]'),
  projectBorderColor: document.querySelector('[data-project-colors]'),
  projectLanguage: document.querySelector('[data-project-language]'),
  editorBorder: document.querySelector('.editor__container'),
  codeText: document.querySelector('.code__content'),

  verifyLogin: () => {
    const userLogged = JSON.parse(localStorage.getItem("user"));
    if (userLogged == null) {
      Swal.fire(
        'Ops, está faltando alguma coisa',
        'Você ainda não fez login na plataforma',
        'error'
      )
      throw new Error('Falta fazer login')
    }
  },

  verifyEmptyCodeField: () => {
    if (CodeData.codeText.innerText == ""){
      Swal.fire(
        'Ops, está faltando alguma coisa',
        'O campo de código está vazio!',
        'error'
      )
      throw new Error('O campo de código está vazio')
    }
  },
  showSucessMessage: () => {
    Swal.fire(
      'Projeto salvo com sucesso!',
      'Você pode visualizá-lo na página da Comunidade',
      'success'
    )
  },

  saveOnLocalStorage: () => {
    const projectData = {
      code: CodeData.codeText.innerHTML,
      name: CodeData.projectName.value,
      description: CodeData.projectDescription.value,
      color: CodeData.projectBorderColor.value,
    }
    const projectsList = JSON.parse(localStorage.getItem("projects")|| '[]');
    projectsList.push(projectData);
    localStorage.setItem("projects", JSON.stringify(projectsList)|| '[]');
  },

  clearProjectFields: () => {
    CodeData.codeText.innerHTML = `<pre><code id="code" spellcheck="false" contenteditable="true"></code></pre>`
    CodeData.codeText.classList.remove('code__content--disabled');
    CodeData.projectName.value = "";
    CodeData.projectDescription.value = "";
    CodeData.projectLanguage.selectedIndex = 0;
    CodeData.projectBorderColor.value = "#0597F2"
    CodeData.editorBorder.style.borderColor = "#0597F2";
    document.querySelector('[data-export-button]').disabled = true;
    document.querySelector('.button__highlight').classList.remove('button__highlight--remove');
  }
}

export function handleCodeData() {
  CodeData.projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    CodeData.verifyLogin();
    CodeData.verifyEmptyCodeField();
    CodeData.saveOnLocalStorage();
    CodeData.showSucessMessage();
    CodeData.clearProjectFields();
  })
}