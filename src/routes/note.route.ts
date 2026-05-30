import  express  from "express";
const router = express.Router();
import noteController from "../controller/note.controller";

router.post("/", noteController.createNote);
router.get("/:id", noteController.getSingleNote);
router.get("/category/:categoryId", noteController.getNotesByCategory);
router.get("/", noteController.getAllNotes);
router.put("/:id", noteController.editNote);
router.delete("/:id", noteController.deleteNote);

export default router;