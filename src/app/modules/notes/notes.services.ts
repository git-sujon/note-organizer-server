import { INotes } from "./notes.interface";
import { Notes } from "./notes.model";

const createNote = async (payload: INotes) => {
    const result = await Notes.create(payload);
    return result;
  };
  

const getAllNotes = async() => {
    const result = await Notes.find({})
    return result
}


const getSingleNote = async (id: string) => {
    const result = await Notes.findById(id);
    return result;
  };


  const updateNote = async (id: string, payload: Partial<INotes>) => {
    const result = await Notes.findByIdAndUpdate(id, payload);
    return result;
  };
  const deleteNote = async (id: string) => {
    const result = await Notes.findByIdAndDelete(id);
    return result;
  };
  
  export const NotesService = {
    createNote,
    getAllNotes,
    getSingleNote,
    updateNote,
    deleteNote,
  };