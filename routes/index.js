var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// Incluir las rutas de la API para los tipos de tags
router.get(
  "/anuncios/tag/:tag(work|lifestyle|motor|mobile)",
  (req, res, next) => {
    console.log("req.params", req.params);
    res.send("muy bien Fernando!!");
  }
);

router.get("/anuncios", (req, res, next) => {
  console.log("req.query", req.query);
  const nombre = req.query.nombre;
  const venta = req.query.venta;
  const precio = req.query.precio;
  const tag = req.query.tag;
  const start = req.query.start;
  const limit = req.query.limit;
  const sort = req.query.sort;
  res.send("ok man");
});

module.exports = router;
