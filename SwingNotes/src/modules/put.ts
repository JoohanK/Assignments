import axios from "axios";
import { Note } from "./interface&type";
import { baseURL } from "../main";
import { getNotes } from "./get";
import { hidePopup } from "./popUp";

export const updateNote = async (): Promise<void> => {
    try {
        const noteId: string = (document.getElementById("updateNoteId") as HTMLInputElement).value;
        const updatedNoteText: string = (document.getElementById("updatedNote") as HTMLInputElement).value;

        const updatedNote: Partial<Note> = {
            note: updatedNoteText
        };

        const response = await axios.put(`${baseURL}/api/notes/${noteId}`, updatedNote, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data: Note = response.data;
        console.log("Uppdaterade anteckning:", data);

        // Hämta de uppdaterade anteckningarna och uppdatera vyn
        await getNotes();
        hidePopup();
    } catch (error) {
        console.error("Error updating note:", error);
    }
};