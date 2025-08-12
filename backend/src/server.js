import express from "express"; 
//const express=require("express");//"type":"module", in package.json allows using import syntax
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({ path: './src/.env',
    quiet:true  //else some tips show on console
 });

//console.log(process.env.MONGO_URI);

const app=express();
const PORT=process.env.PORT || 5001; 
connectDB();
app.use(express.json());   //app.use(express.json()) is a built-in Express middleware that parses incoming requests with JSON payloads and makes the parsed data available in req.body.

app.use("/api/notes",notesRoutes);



app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
});


//mongodb+srv://abelUser:Abel@6213@cluster0.aliq5ci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
