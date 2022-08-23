import { showUserProfile } from "./show-profile.js";

const Modal = {
  input: document.querySelector('[data-modal-input]'),
  body: document.querySelector('body'),

  open(){
    Modal.body.classList.add('modal__open')
  },
  close(){
    Modal.body.classList.remove('modal__open')
    Modal.input.value = "";
  }
}

function handleModal() {
  const userProfileLinks = document.querySelectorAll(".profile__link");
  const iconCloseLogin = document.querySelectorAll(".icon-close");
  userProfileLinks.forEach((link) => {
    link.addEventListener('click', Modal.open);
  })
  iconCloseLogin.forEach((icon) => {
    icon.addEventListener('click', Modal.close)
  })
}

export function handleUserLogin() {
  handleModal();
  showUserProfile();
  const buttonModal = document.querySelector('[data-modal-button]');
  buttonModal.addEventListener('click', () => {
    getGithubProfileAndSave();
  })
}

async function getGithubProfileAndSave() {
  const usernameGithub = document.querySelector('[data-modal-input]').value
  const url = `https://api.github.com/users/${usernameGithub}`
  const response = await fetch(url);
  const data = await response.json();

  if (data.message == "Not Found"){
    Modal.close()
    Swal.fire(
        'Ops, algo deu errado',
        'Este usuário não existe no Github',
        'error'
    )
    throw new Error('Usuário inexistente');
  } 
  const userData = {
      name: data.name,
      photo: data.avatar_url,
      link: data.html_url,
      username: data.name,
  }
  localStorage.setItem("user", JSON.stringify(userData));
  location.reload()

  Modal.close()
}