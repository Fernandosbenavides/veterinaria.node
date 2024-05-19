const fs = require("fs");

// Generación de ID
const generarId = () => {
  return Math.floor(Math.random() * 999) + 1;
};

// Agregar cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
  if (!nombre || !edad || !tipo || !color || !enfermedad) {
    console.log(
      "Error: Todos los campos (nombre, edad, tipo, color, enfermedad) son requeridos."
    );
    return;
  }
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  const agregarCita = {
    id: generarId(),
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };
  citas.push(agregarCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf-8");
  console.log("Cita registrada exitosamente.");
}; 

// Leer todas las citas
const leer = () => {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log("Citas registradas:");
  console.log(citas);
};

module.exports = { registrar, leer };
