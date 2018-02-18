"use strict";

var express = require("express");
var router = express.Router();

// Cargar libreria de validaciones
const { query, validationResult } = require("express-validator/check");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.locals.condicion = {
    time: 123,
    user: "Fernando"
  };
  res.locals.users = [
    { nombre: "bicicleta", precio: 60 },
    { nombre: "moto", precio: 300 }
  ];
  res.render("index");
});

// Incluir las rutas de la API para los tipos de tags
router.get(
  "/anuncios/tag/:tag(work|lifestyle|motor|mobile)",
  (req, res, next) => {
    console.log("req.params", req.params);
    res.send("Estos son los anuncios de la tag");
  }
);

// Incluir las rutas de busqueda
router.get(
  "/anuncios",
  [
    query("precio")
      .isNumeric()
      .withMessage("deberia ser un numero")
      .custom(value => {
        if (value < 0) {
          throw new Error("debe ser un numero positivo");
        }
        return true;
      })
  ],
  (req, res, next) => {
    validationResult(req).throw();
    console.log("req.query", req.query);
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const tag = req.query.tag;
    const start = req.query.start;
    const limit = req.query.limit;
    const sort = req.query.sort;
    res.send("ok man");
  }
);

// Incluir las rutas de la API para los tipos de tags
router.post("/enelbody", (req, res, next) => {
  console.log("req.body", req.body);
  res.send("ok");
});

module.exports = router;
