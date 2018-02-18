"use strict";

var express = require("express");
var router = express.Router();

const Anuncio = require("../models/Anuncio");
var appLib = require("../lib/appLib.js");

// Cargar libreria de validaciones
const { query, validationResult } = require("express-validator/check");

/* GET home page. */
router.get("/", async (req, res, next) => {
  try {
    // Get request parameters
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const tags = req.query.tags;
    const precio = req.query.precio;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const sort = req.query.sort;
    const fields = req.query.fields;

    // Build filter query with parameters
    const filter = {};
    /*
    // Filter by name validation
    if (typeof nombre !== "undefined") {
      name !== ""
        ? (filter.nombre = { $regex: ".*" + nombre + ".*", $options: "i" })
        : (filter.nombre = nombre);
    }
    // Filter by forsale validation
    if (typeof venta !== "undefined") filter.venta = appLib.parseBoolean(venta);

    // Filter by tags validation
    if (typeof tags !== "undefined") {
      if (Array.isArray(tags)) {
        filter.tags = { $in: tags };
      } else {
        filter.tags = tags;
      }
    }

    // Filter by price validation
    if (typeof precio !== "undefined") {
      const precioRange = precio.split("-");

      if (precioRange.length == 1) {
        filter.precio = precio;
      }

      if (precioRange.length == 2) {
        if (precioRange[0] == "") {
          filter.precio = { $lte: precioRange[1] };
        } else if (precioRange[1] == "") {
          filter.precio = { $gte: precioRange[0] };
        } else if (precioRange[0] < precioRange[1]) {
          filter.precio = { $gte: precioRange[0], $lte: precioRange[1] };
        } else if (precioRange[0] > precioRange[1]) {
          filter.precio = { $gte: precioRange[1], $lte: precioRange[0] };
        }
      }
    }
    if (precio == "null" || precio == "0") filter.precio = null;*/

    // Run query
    const docs = await Anuncio.listar(filter, skip, limit, sort, fields);

    res.render("index", {
      title: "NodePop",
      docs: docs
    });
    // Status server 204: Content not found
    if (docs.length === 0) {
      res.status(204);
    }
  } catch (err) {
    return next(err);
  }

  /*
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
    res.send("ok!");
    /*res.render("anuncios", {
      title: "Anuncios",
      anuncios: anuncios
    });*/
});

// Incluir las rutas de la API para los tipos de tags
router.post("/enelbody", (req, res, next) => {
  console.log("req.body", req.body);
  res.send("ok");
});

module.exports = router;
