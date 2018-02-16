"use strict";

const mongoose = require("mongoose");

// definir el esquema
const anuncioSchema = mongoose.Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
});

// crear el modelo
const Anuncio = mongoose.model("Agente", agenteSchema);

// exportar el modelo
module.exports = Anuncio;
