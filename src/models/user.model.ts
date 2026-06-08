import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    email:{
        required: true,
        type: String
    },

    firstName: { 
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true 
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    dateOfBirth: {
        type: Date,
        required : true 
    },

    password: {
        type: String,
        required: true,
    }
}, {timestamps: true})



const UserModel = mongoose.model("User", UserSchema);



export default UserModel;