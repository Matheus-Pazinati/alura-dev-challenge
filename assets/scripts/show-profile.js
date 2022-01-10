function showUserProfile() {
  const userProfile = document.querySelectorAll(".profile__link")
      const userInformation = JSON.parse(localStorage.getItem("user"))
      if (userInformation != null) {
      userProfile.forEach((user) => {
      user.children[0].src = userInformation.photo;
      user.children[1].textContent = userInformation.name;
          })
      }
  }
  showUserProfile()