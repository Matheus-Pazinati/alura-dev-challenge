export function handleProjectLike() {
  const likeButtons = document.querySelectorAll('[data-like-button]')

  likeButtons.forEach((likeButton) => {
    let projectLiked = false;
  
    likeButton.addEventListener('click', () => {
      let likeCount = likeButton.querySelector('span');
      if (projectLiked) {
        likeCount.textContent = 0;
        likeButton.children[0].style.color = "#FEFEFE";
        projectLiked = false;
      }else {
        likeCount.textContent = 1;
        likeButton.children[0].style.color = "#F65151";
        projectLiked = true;
      }
    })
  })
}
