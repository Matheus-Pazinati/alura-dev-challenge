changeBorderColor()
const selectColor = document.querySelector('.personalization__color')
selectColor.addEventListener('change', changeBorderColor)

function changeBorderColor() {
  const editorBorder = document.querySelector('.editor__container')
  const selectedColor = color.value 
  editorBorder.style.borderColor = selectedColor;
}