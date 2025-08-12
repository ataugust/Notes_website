import express from "express";
import{createNote,getAllNotes,updateNote,deleteNote} from "../controllers/notesController.js";



export default router;

router.get("/",getAllNotes);
router.post("/",createNote);
router.put("/:id", updateNote);  
router.delete("/:id", deleteNote);
const router=express.Router();