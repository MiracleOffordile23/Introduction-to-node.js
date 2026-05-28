import Note from "../models/note.model";


// Get all notes
export const getAllNotesService = async () => {
  return await Note.find();
};


// Get single note
export const getSingleNoteService = async (id: string) => {
  return await Note.findById(id);
};


// Create note
export const createNoteService = async (data: {
  title: string;
  content: string;
}) => {
  return await Note.create(data);
};


// Delete note
export const deleteNoteService = async (id: string) => {
  return await Note.findByIdAndDelete(id);
};