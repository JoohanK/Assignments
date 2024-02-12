import axios from "axios";
import { Note } from "./interface&type";
import { baseURL } from "../main";
import { getNotes } from "./get";


export const createNote = async (): Promise<void> => {
    const usernameInput: HTMLInputElement = document.getElementById("usernameInput") as HTMLInputElement;
    const titleInput: HTMLInputElement = document.getElementById("title") as HTMLInputElement;
    const noteInput: HTMLInputElement = document.getElementById("newNote") as HTMLInputElement;

    const username: string = usernameInput.value;
    const title: string = titleInput.value;
    const noteText: string = noteInput.value;

    const note: Omit<Note, 'id' | 'createdAt'> = {
        username: username,
        title: title,
        note: noteText
    };

    try {
        // Skicka en POST-förfrågan för att skapa anteckningen med Axios
        const response = await axios.post(`${baseURL}/api/notes`, note, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data: Note = response.data;
        console.log("Skapade anteckning:", data);

        // Nollställ inputfälten efter att anteckningen har skapats
        titleInput.value = "";
        noteInput.value = "";

        // Hämta och visa de uppdaterade anteckningarna
        await getNotes();
    } catch (error) {
        console.error("Error creating note:", error);
    }
};

export const createAndFetchNotes = async (): Promise<void> => {
    await createNote();
    await getNotes();
};