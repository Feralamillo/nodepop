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

// método estático del modelo, obteniendo las queries sin ejecutarlas
anuncioSchema.statics.listar = function(
  filtro,
  skip,
  limit,
  sort,
  fields,
  callback
) {
  const query = Anuncio.find(filtro);
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec(callback);
};

// crear el modelo
const Anuncio = mongoose.model("Anuncio", anuncioSchema);

// exportar el modelo
module.exports = Anuncio;
