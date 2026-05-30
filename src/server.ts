import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from "express"
import mongoose from "mongoose"
import router from "./routes/index.route";


dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api" , router);
const PORT = process.env.PORT || 3030;

// MongoDB connection
const mongoURI = process.env.MONGODB_URI as string; 
mongoose.connect(mongoURI).then(()=>{console.log("Connected to MongoDB");});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 