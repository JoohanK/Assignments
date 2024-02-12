import axios from "axios";
import { baseURL } from "../main";
import { getNotes } from "./get";

export const deleteNoteById = async (noteId: string): Promise<void> => {
    try {
        // Skicka en förfrågan för att ta bort anteckningen med det givna noteId med Axios
        const response = await axios.delete(`${baseURL}/api/notes/${noteId}`);

        if (response.status === 200) {
            console.log("Anteckning borttagen");
            await getNotes();
        
        } else {
            console.error("Kunde inte ta bort anteckning");
        }
    } catch (error) {
        console.error("Error deleting note:", error);
    }
};
