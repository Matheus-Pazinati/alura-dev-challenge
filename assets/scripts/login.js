import { Modal } from './modal.js';

const buttonModal = document.querySelector('[data-modal-button]');
buttonModal.addEventListener('click', async () => {
  await getGithubProfileAndSave();
  location.reload();
  Modal.close();
})

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
}