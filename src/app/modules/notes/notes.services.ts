import { INotes } from "./notes.interface";
import { Notes } from "./notes.model";

const createNotes = async (payload: INotes) => {
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


  const updateNotes = async (id: string, payload: Partial<INotes>) => {
    const result = await Notes.findByIdAndUpdate(id, payload);
    return result;
  };
  const deleteNotes = async (id: string) => {
    const result = await Notes.findByIdAndDelete(id);
    return result;
  };
  
  export const NotesService = {
    createNotes,
    getAllNotes,
    getSingleNote,
    updateNotes,
    deleteNotes,
  };