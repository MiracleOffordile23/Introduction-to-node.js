import {Request, Response} from 'express';
import  noteService from '../services/note.service';
import mongoose from 'mongoose';

class NoteController {
    // create note
    async createNote(req: Request, res: Response) {
        const note = req.body;
        // check if a note of that title alredy exist
        // if not create the note
        const existingNote = await noteService.getNote({ title: note.title.toLowerCase() })
        if (existingNote) {
            return res.status(403)
            .json({
                success: false,
                message: "A note with that title already exists" 
            });
        }
        const newNote = await noteService.createNote(note);
        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            data: newNote
        });
    }

    // edit book 

    async editNote(req: Request, res: Response) {
        const id = req.params.id as string; 
        const updateData = req.body;
        // fetch the book with the id 
        const existingNote = await noteService.getNote({ _id: id });
        if (!existingNote) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        } 
        // fetching existing book title 
        if (updateData.title) {
            const noteWithSameTitle = await noteService.getNote({ title: updateData.title.toLowerCase() });
            if (noteWithSameTitle && noteWithSameTitle._id.toString() !== id) {
                return res.status(403).json({
                    success: false,
                    message: "A note with that title already exists"
                });
            }
        }

        const updatedNote = await noteService.updateNote(id, updateData);
        return res.status(200).json({
            success: true,
            message: "Note updated successfully",
            data: updatedNote
        });
   }

   // delete book 
    async deleteNote(req: Request, res: Response) {
        const id = req.params.id as string;
        const existingNote = await noteService.getNote({ _id: id });
        if (!existingNote) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        await noteService.deleteNote(id);
        return res.status(200).json({
            success: true,
            message: "Note deleted successfully"
        });
    }

    // get single book
    async getSingleNote(req: Request, res: Response) {
        const id = req.params.id as string;
        const note = await noteService.getNote({ _id: id });
        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Note found successfully",
            data: note
        });
    }

    // get all books
    async getAllNotes(req: Request, res: Response) {
        const notes = await noteService.getAllNotes({});
        return res.status(200).json({
            success: true,
            message: "Notes retrieved successfully",
            data: notes
        });
    }

    // get notes by category

    async getNotesByCategory(req: Request, res: Response) {
        const categoryId = new mongoose.Types.ObjectId(req.params.categoryId as string);
        const notes = await noteService.getNotesByCategory(categoryId);
        return res.status(200).json({
            success: true,
            message: "Notes retrieved successfully",
            data: notes
        });
    }

}

export default new NoteController();