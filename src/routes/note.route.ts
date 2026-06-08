import  express  from "express";
const router = express.Router();
import noteController from "../controller/note.controller";
import { validateNote } from "../middleware/validation.middleware";
import { authenticateUser } from "../middleware/auth.middleware";


router.post(
  "/",
  authenticateUser,
  noteController.createNote
);

router.get(
  "/",
  authenticateUser,
  noteController.getAllNotes
);

router.get(
  "/:id",
  authenticateUser,
  noteController.getSingleNote
);

router.put(
  "/:id",
  authenticateUser,
  noteController.editNote
);

router.delete(
  "/:id",
  authenticateUser,
  noteController.deleteNote
);

router.post("/",validateNote(), noteController.createNote);
router.get("/:id", noteController.getSingleNote);
router.get("/category/:categoryId", noteController.getNotesByCategory);
router.get("/", noteController.getAllNotes);
router.put("/:id",validateNote(), noteController.editNote);
router.delete("/:id", noteController.deleteNote);

export default router;