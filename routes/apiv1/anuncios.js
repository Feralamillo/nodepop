"use strict";

const express = require("express");
const router = express.Router();

const Anuncio = require("../../models/Anuncio");

router.get("/", async (req, res, next) => {
  try {
    const docs = await Anuncio.find().exec();
    res.json({ success: true, result: docs });
  } catch (err) {
    next(err);
    return;
  }
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const data = req.body;

  // creamos documento en memoria
  const anuncio = new Anuncio(data);

  // guardamos documento en bbdd
  anuncio.save((err, anuncioGuardado) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ success: true, result: anuncioGuardado });
  });
});

// Incluir las rutas de la API para los tipos de tags
router.get(
  "/anuncios/tag/:tag(work|lifestyle|motor|mobile)",
  (req, res, next) => {
    console.log("req.params", req.params);
    res.send("muy bien Fernando!!");
  }
);

// Incluir las rutas de la API para filtrar por precio

module.exports = router;
