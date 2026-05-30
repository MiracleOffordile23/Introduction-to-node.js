import mongoose , {QueryFilter, UpdateQuery } from "mongoose"
import NoteModel from "../models/note.model"
import { INoteWithCategoryFilter } from "../interfaces/note.interface"



class NoteService {
    // create note
    async createNote(note: INoteWithCategoryFilter) {
        const newNote = await NoteModel.create(note);
        return newNote;
    }

    // update a note

    async updateNote(id: string, note: UpdateQuery<INoteWithCategoryFilter>) {
        const updatedNote = await NoteModel.findByIdAndUpdate(id, note, { new: true });
        return updatedNote;
    }

    // delete a note
    async deleteNote(id: string) {
        const deletedNote = await NoteModel.findByIdAndDelete(id);
        return deletedNote;
    }

    // get a single notes
    async getNote(filter: QueryFilter<INoteWithCategoryFilter>) {
        const note = await NoteModel.findOne(filter);
        return note;
    }

    // get all notes
    async getAllNotes(filter: QueryFilter<INoteWithCategoryFilter> = {}) {
        const notes = await NoteModel.find(filter);
        return notes;
    }

    // fetch note by category

    async getNotesByCategory(categoryId: mongoose.Types.ObjectId) {
        const notes = await NoteModel.find({ category: categoryId });
        return notes;
    }
}

export default new NoteService();
