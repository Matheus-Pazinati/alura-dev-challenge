import { CodeEditor } from "./assets/scripts/code-editor.js";
import { exportCodeToImage } from "./assets/scripts/export-code-to-image.js";
import { handleMenuIconsOpenClose } from "./assets/scripts/open-close-menu.js";
import { handleSearchFieldOpenClose } from "./assets/scripts/open-close-search.js";
import { handleCodeData } from "./assets/scripts/set-local-storage.js";

const selectColor = document.querySelector('.personalization__color')
selectColor.addEventListener('change', () => {
  CodeEditor.changeBorderColor(color.value)
})

handleSearchFieldOpenClose();
handleMenuIconsOpenClose();
handleCodeData();
exportCodeToImage();