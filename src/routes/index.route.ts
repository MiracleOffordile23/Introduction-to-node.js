import express from "express";
import noteRoutes from "./note.route";
import authRoutes from "./auth.route";



const router = express.Router();

router.use("/notes", noteRoutes);
router.use("/auth", authRoutes);



export default router;