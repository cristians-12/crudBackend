import Add from "../models/addModel.js";

export const getAdd = async (req, res) => {
  const add = await Add.find();
  res.send(add);
  // res.send("Hola");
};

export const aggAdd = async (req, res) => {
  const {
    iglesia,
    telefono,
    direccion,
    ciudad,
    correo,
    congregacion,
    pastor,
    denominacion,
    encargado,
    estado,
    asistentes,
    observacion,
  } = req.body;

  try {
    const addFound = await Add.findOne({ correo });
    if (addFound) return res.status(400).json({ error: "El correo ya está en uso." });

    const nuevaAdd = new Add({
      iglesia,
      telefono,
      direccion,
      ciudad,
      correo,
      congregacion,
      pastor,
      denominacion,
      encargado,
      estado,
      asistentes,
      observacion,
    });
    const addSaved = await nuevaAdd.save();

    res.json({
        iglesia: addSaved.iglesia,
        telefono: addSaved.telefono,
    });
  } catch (error) {
    console.log(error);
  }
};
