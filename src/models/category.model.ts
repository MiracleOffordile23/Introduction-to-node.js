import mongoose from "mongoose"

const CategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
        unique : true, // i don't want the same title for two notes
        lowercase :true
    },
      

} , {timestamps : true})

const CategoryModel = mongoose.model("Category" , CategorySchema);

export default CategoryModel;