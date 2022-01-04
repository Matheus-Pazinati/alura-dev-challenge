const body = document.querySelector('body')
const buttonModal = document.querySelector('[data-modal-button]')
const inputModal = document.querySelector('[data-modal-input]')
const Modal = {
  open(){
    body.classList.add('modal__open')
  },
  close(){
    body.classList.remove('modal__open')
  }
}
buttonModal.addEventListener('click', () => {
  projectUser();
  inputModal.value = "";
})
function projectUser() {
  const usernameGithub = document.querySelector('[data-modal-input]').value
  const url = `https://api.github.com/users/${usernameGithub}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
      if (data.message == "Not Found"){
          Swal.fire(
              'Ops, algo deu errado',
              'Este usuário não existe no Github',
              'error'
            )
            throw new Error('Usuário inexistente')
      }
      const userData = {
          name: data.name,
          photo: data.avatar_url,
          link: data.html_url,
          username: data.name,
      }
      sessionStorage.setItem("user", JSON.stringify(userData));
      location.reload()
  })
  Modal.close()
}