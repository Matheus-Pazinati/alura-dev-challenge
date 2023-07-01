export const Modal = {
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
const userProfileLinks = document.querySelectorAll(".profile__link");
const iconCloseLogin = document.querySelectorAll(".icon-close");
userProfileLinks.forEach((link) => {
  link.addEventListener('click', Modal.open);
})
iconCloseLogin.forEach((icon) => {
  icon.addEventListener('click', Modal.close)
})