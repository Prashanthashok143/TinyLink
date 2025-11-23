import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/tinyLink');
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    }catch (error){
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}