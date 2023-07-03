const Editor = {
  exportContainer: document.querySelector('.editor__export'),
  editorContainer: document.querySelector('.editor__container'),
  codeContent: document.querySelector('.code__content'),
  exportButton: document.querySelector('[data-export-button]')
}

Editor.codeContent.addEventListener('keyup', enableExportButton);
Editor.exportButton.addEventListener('click', handleExportFormat);

function enableExportButton () {
  if (Editor.codeContent.innerText == "") {
    Editor.exportButton.disabled = true;
  }else {
    Editor.exportButton.disabled = false;
  }
}

function handleExportFormat() {
  const chosenExtension = document.querySelector('[data-export-select]').value;
  let projectName = document.querySelector('[data-project-name]').value;

  if (projectName == "") {
    projectName = "meu-projeto";
  }

  changeEditorAttributesForDownload()

  if (chosenExtension == "png") {
    domtoimage.toBlob(Editor.editorContainer)
    .then(function (blob) {
      window.saveAs(blob, `${projectName}.png`);
      standartEditor();
    });
  } else if (chosenExtension == "jpeg"){
    domtoimage.toJpeg(Editor.editorContainer, { quality: 1 })
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
      domtoimage.toSvg(Editor.editorContainer, { filter: filter })
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
  Editor.exportContainer.style.display = "flex";
  Editor.editorContainer.style.maxHeight = "366px"
  Editor.editorContainer.style.height = "65vh"
  Editor.codeContent.style.height = "calc(100% - 52px)"
}

function changeEditorAttributesForDownload() {
  Editor.exportContainer.style.display = "none"
  Editor.editorContainer.style.maxHeight = "none";
  Editor.editorContainer.style.height = "auto";
  Editor.codeContent.style.height = "auto";
}