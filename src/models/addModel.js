import mongoose from "mongoose";

const addSchema = new mongoose.Schema({
  iglesia: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  congregacion: {
    type: String,
    required: true,
  },
  pastor: {
    type: String,
    required: true,
  },
  denominacion: {
    type: String,
    required: true,
  },
  encargado: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  asistentes: {
    type: String,
    required: true,
  },
  observacion: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Add", addSchema);