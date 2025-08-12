import Note from "../models/Note.js";

export async function getAllNotes(req,res){     // localhost:5002/api/notes
     try{
         const notes=await Note.find()
         res.status(200).json(notes)
     }  catch(error){
         res.status(500).json({message:"Internal server Error"})
         console.error("Error in getAllNotes:",error);
     }
}
export async function createNote(req,res){     
    try {
        const {title,content}=req.body
        const newNote=new Note({title,content})
        const savedNote=await newNote.save()

        res.status(201).json(savedNote);
    } catch (error) {
        res.status(500).json({message:"Internal server Error"})
         console.error("Error in createNote:",error);
    }
    
}
export async function updateNote(req,res){     
    try {
        const {title,content}=req.body;
       const updatedNote =  await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true,});
          
        if(!updatedNote) return res.status(404).json({message:"Note not found"});

        res.status(200).json(updatedNote) 
    } catch (error) {
        res.status(500).json({message:"Internal server Error "})
        console.error("Error in updateNote:",error);
    }
}
export async function deleteNote(req,res){     
    try {
        const {title,content}=req.body;
        const deletedNote= await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return  res.status(404).json({message:"Note not found"});
        res.status(200).json({message:"Note deleted successfully"});  
    } catch (error) {
        res.status(500).json({message:"Internal server Error "})
        console.error("Error in deleteNote:",error);
    }
        
}