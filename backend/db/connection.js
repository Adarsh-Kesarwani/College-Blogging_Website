const mongoose=require("mongoose");
const  connect =async ()=>{
    try{
    await  mongoose.connect("mongodb+srv://adarshkesarwani07:College-Blogging@cluster0.lrukpmg.mongodb.net/" )
     console.log("connection is successful")
    }catch(e){
        console.log(e)
    }
}
connect();
module.exports.Bloggers=require("../models/Bloggers.js");