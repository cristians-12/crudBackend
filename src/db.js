import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
     await mongoose.connect(process.env.MONGO_URI);
     console.log("Conectado a la base de datos.")   
    } catch (error) {
        console.log(error)
    }
}