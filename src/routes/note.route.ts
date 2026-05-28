import express from "express";


import {
  getAllNotes,
  getSingleNote,
  createNote,
  deleteNote,
} from "../controller/note.controller";


const router = express.Router();
// getting all notes
router.get("/", getAllNotes);

// getting single note
router.get("/:id" , getSingleNote);
// creating note
router.post("/"  , createNote);

// deleting note
router.delete("/:id"  , deleteNote);

export default router;