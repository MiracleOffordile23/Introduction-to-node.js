import express from "express";
import noteRoutes from "./note.route";



const router = express.Router();

router.use("/notes", noteRoutes);



export default router;