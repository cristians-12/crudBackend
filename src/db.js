import mongoose from "mongoose";

export const connectDB = async ()=>{
    try {
     await mongoose.connect("mongodb+srv://cristians12:bhThSIJCnp3tvhXD@crud.qitybow.mongodb.net/?retryWrites=true&w=majority");
     console.log("Conectado a la base de datos.")   
    } catch (error) {
        console.log(error)
    }
}
