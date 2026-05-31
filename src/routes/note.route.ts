import  express  from "express";
const router = express.Router();
import noteController from "../controller/note.controller";
import { validateNote } from "../middleware/validation.middleware";

router.post("/",validateNote(), noteController.createNote);
router.get("/:id", noteController.getSingleNote);
router.get("/category/:categoryId", noteController.getNotesByCategory);
router.get("/", noteController.getAllNotes);
router.put("/:id",validateNote(), noteController.editNote);
router.delete("/:id", noteController.deleteNote);

export default router;