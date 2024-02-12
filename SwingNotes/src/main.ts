export const baseURL = "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";

import { getNotes } from "./modules/get";
import { updateNote } from "./modules/put";
import { hidePopup } from "./modules/popUp";
import { createAndFetchNotes } from "./modules/post";



document.addEventListener("DOMContentLoaded", () => {
    // Hämta referenser till knapparna
    const publishButton = document.getElementById('publishButton');
    const historyButton = document.getElementById('historyButton');
    const updateButton = document.getElementById('updateButton');
    const abortButton = document.getElementById('abortButton');

    // Lägg till händelsehanterare för varje knapp
    publishButton?.addEventListener('click', createAndFetchNotes);
    historyButton?.addEventListener('click', getNotes);
    updateButton?.addEventListener('click', updateNote);
    abortButton?.addEventListener('click', hidePopup);
});






















