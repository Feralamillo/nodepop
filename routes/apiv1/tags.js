"use strict";

const express = require("express");
const router = express.Router();

const Anuncio = require("../../models/Anuncio");

router.get("/", (req, res, next) => {
  Anuncio.find()
    .exec()
    .then(docs => {
      res.json({ success: true, result: docs });
    })
    .catch(err => {
      next(err);
      return;
    });
});

module.exports = router;
