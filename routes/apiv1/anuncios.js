"use strict";

const express = require("express");
const router = express.Router();

const Anuncio = require("../../models/Anuncio");

router.get("/", (req, res, next) => {
  Anuncio.find().exec((err, docs) => {
    if (err) {
      next(err);
      return;
    }
    // Si no hay error
    res.json({ success: true, result: docs });
  });
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

module.exports = router;
