import { Request, Response } from "express";

import {
  getAllNotesService,
  getSingleNoteService,
  createNoteService,
  deleteNoteService,
} from "../services/note.service";
export const getAllNotes = async (
  req: Request,
  res: Response
) => {
  const notes = await getAllNotesService();

  res.json(notes);
};

export const getSingleNote = async (
  req: Request,
  res: Response
) => {
  const note = await getSingleNoteService(req.params.id as string);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json(note);
};

export const createNote = async (
  req: Request,
  res: Response
) => {
  const note = await createNoteService(req.body);

  res.status(201).json(note);
};

export const deleteNote = async (
  req: Request,
  res: Response
) => {
  const note = await deleteNoteService(req.params.id as string );

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json({
    message: "Note deleted successfully",
  });
};