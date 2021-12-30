const likeButtons = document.querySelectorAll('.icon-heart')
likeButtons.forEach((likeButton) => {
  let projectLiked = false;
  likeButton.addEventListener('click', (event) => {
    let likeButton = event.target;
    let likeNumber = Number(likeButton.parentElement.innerText);
    let likeCount = likeButton.parentElement.children[1];
    if (projectLiked) {
      likeCount.textContent = likeNumber-= 1;
      likeButton.style.color = "#FEFEFE";
      projectLiked = false;
    }else {
      likeCount.textContent = likeNumber+= 1;
      likeButton.style.color = "#F65151";
      projectLiked = true;
    }
  })
})