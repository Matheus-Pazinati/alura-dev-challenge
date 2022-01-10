const userExists = JSON.parse(localStorage.getItem("user"))
let userLinks = document.querySelectorAll('.profile__link')
if (userExists != null) {
    userLinks.forEach((link) => {
      link.removeAttribute('onclick')
      link.setAttribute('href', `${userExists.link}`)
      link.setAttribute('target', "_blank")
      link.children[0].setAttribute('alt', `Foto do usuário ${userExists.username}`)
      link.children[0].setAttribute('class', 'profile__user')
    })
}