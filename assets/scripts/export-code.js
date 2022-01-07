const exportButton = document.querySelector('[data-export-button]')
const extensionContainer = document.querySelector('.editor__export');
const editorContainer = document.querySelector('.editor__container');
const codeContent = document.querySelector('.code__content');

codeContent.addEventListener('keyup', enableButton)
exportButton.addEventListener('click', exportCode)

function enableButton () {
  if (codeContent.innerText == "") {
    exportButton.disabled = true;
  }else {
    exportButton.disabled = false;
  }
}

function exportCode() {
  const chosenExtension = document.querySelector('[data-export-select]').value;
  let projectName = document.querySelector('[data-project-name]').value;

  if (projectName == "") {
    projectName = "meu-projeto";
  }
  extensionContainer.style.display = "none"
  editorContainer.style.maxHeight = "none";
  editorContainer.style.height = "auto";
  codeContent.style.height = "auto";

  if (chosenExtension == "png") {
    domtoimage.toBlob(editorContainer)
    .then(function (blob) {
      window.saveAs(blob, `${projectName}.png`);
      standartEditor();
    });
  } else if (chosenExtension == "jpeg"){
    domtoimage.toJpeg(editorContainer, { quality: 1 })
    .then(function (dataUrl) {
    var link = document.createElement("a");
    link.download = `${projectName}.jpeg`;
    link.href = dataUrl;
    link.click();
    standartEditor();
  });
   } else {
      function filter(node) {
        return node.tagName !== "i";
      }
      domtoimage.toSvg(editorContainer, { filter: filter })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `${projectName}.svg`;
        link.href = dataUrl;
        link.click();
        standartEditor();
      });
  }
}

function standartEditor() {
  extensionContainer.style.display = "flex";
  editorContainer.style.maxHeight = "366px"
  editorContainer.style.height = "65vh"
  codeContent.style.height = "calc(100% - 52px)"
}