import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema({
    title :{
        type : String,
        required: true,
        trim : true,
        unique : true, // i don't want the same title for two notes
        lowercase :true
    },
    content : {
        type : String,
        required :true,
        trim :true,
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category",
        required : true
    },

    userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
}

} , {timestamps : true})

const NoteMOdel = mongoose.model("Note" , NoteSchema);

export default NoteMOdel;