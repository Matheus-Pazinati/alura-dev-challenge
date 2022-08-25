import { handleCodeContainerBorderColor } from "./assets/scripts/change-border.js";
import { exportCodeToImage } from "./assets/scripts/export-code-to-image.js";
import { handleHighlight } from "./assets/scripts/highlight.js";
import { handleMenuIconsOpenClose } from "./assets/scripts/open-close-menu.js";
import { handleSearchFieldOpenClose } from "./assets/scripts/open-close-search.js";
import { handleCodeData } from "./assets/scripts/set-local-storage.js";
import { handleUserLogin } from "./assets/scripts/user-login.js";

handleSearchFieldOpenClose();
handleMenuIconsOpenClose();
handleHighlight();
handleCodeContainerBorderColor();
handleCodeData();
handleUserLogin();
exportCodeToImage();