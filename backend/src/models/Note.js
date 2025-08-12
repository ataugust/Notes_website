import mongoose  from "mongoose";

//create schema
//note based of that schema

const noteSchema=new mongoose.Schema({
        title:{
            type:String,
            requiired: true
        },
        content:{
            type: String,
            required: true
        },
    },
    { timestamps:true}  //createdAt, updatedAt
    );
    const Note=mongoose.model("Note",noteSchema);
    export default Note