import axios from "axios";
import { baseURL } from "../main";
import { Note } from "./interface&type";


export const showUpdateForm = async (noteId: string): Promise<void> => {
    showPopup();
    try {
      
        const response = await axios.get(`${baseURL}/api/notes/${noteId}`);
        
        const note: Note = response.data;
        console.log("Fetched note:", note);

       
        const updateNoteIdInput = document.getElementById("updateNoteId") as HTMLInputElement;
        const updatedNoteInput = document.getElementById("updatedNote") as HTMLInputElement;

        if (updateNoteIdInput && updatedNoteInput) {
            updateNoteIdInput.value = noteId;
            /* updatedNoteInput.value = note.note; */
        }
        
    } catch (error) {
        console.error("Error in showUpdateForm:", error);
    }
};

const showPopup = (): void => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.remove("hidden");
      popup.classList.remove("hidden");
      abortButton.classList.remove("hidden");
    }
};

export const hidePopup = (): void => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.add("hidden");
      popup.classList.add("hidden");
      abortButton.classList.add("hidden");
    }
};
