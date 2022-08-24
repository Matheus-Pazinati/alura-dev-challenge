import { handleMenuIconsOpenClose } from "./assets/scripts/open-close-menu.js";
import { handleSearchFieldOpenClose } from "./assets/scripts/open-close-search.js";
import { showUserProfile } from "./assets/scripts/show-profile.js";
import { getProjectDataFromLocalStorage } from './assets/scripts/get-local-storage.js';
import { handleProjectLike } from "./assets/scripts/like-system.js";

handleMenuIconsOpenClose();
handleSearchFieldOpenClose();
getProjectDataFromLocalStorage();
showUserProfile();
handleProjectLike();