export function showUserProfile() {
  const userProfileLinks = document.querySelectorAll(".profile__link");
  const userInformation = JSON.parse(localStorage.getItem("user"));
    if (userInformation != null) {
      userProfileLinks.forEach((link) => {
        link.removeAttribute('onclick')
        link.setAttribute('href', `${userInformation.link}`)
        link.setAttribute('target', "_blank")
        link.children[0].src = userInformation.photo;
        link.children[0].setAttribute('alt', `Foto do usuário ${userInformation.username}`);
        link.children[0].setAttribute('class', 'profile__user');
        link.children[1].textContent = userInformation.name;
      })
    }
}