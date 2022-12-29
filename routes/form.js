var express = require("express");
var router = express.Router();
const float = require("../app.js");
const arr = [];

const Flower = require("../flower");
const Concentrate = require("../concentrates");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Form" });
  // res.send('AHHHH')
  if (err) throw err;
});

console.log("this works");


router.post("/", (req, res) => {
  const productType = req.body.type;
  const strain = req.body.strain;
  const classification = req.body.classification;
  const cannabanoidTHC = req.body.cannabanoidsTHC;
  const cannabanoidCBD = req.body.cannabanoidsCBD;
  const sku = req.body.sku;
  const terpenes = req.body.terpenes;
  const formattedTerps = terpenes;
  const price = req.body.price;
  const stock = req.body.stock;


  if(productType === 'Flower') {
  runFlower(
    null,
    strain,
    classification,
    cannabanoidTHC,
    cannabanoidCBD,
    sku,
    formattedTerps,
    price,
    stock
  );}
  else if (productType === 'Concentrate') {
    run(
      null,
      strain,
      classification,
      cannabanoidTHC,
      cannabanoidCBD,
      sku,
      formattedTerps,
      price,
      stock)
  }
  res.redirect("./home");
});

const run = async (
  err,
  strain,
  classification,
  cannabanoidsTHC,
  cannabanoidsCBD,
  SKU,
  topTerpenes,
  price,
  stock
) => {
  try {
    const OGKush = await Concentrate.create({
      strainName: strain,
      classification: classification,
      cannabanoids: {
        THC: cannabanoidsTHC,
        CBD: cannabanoidsCBD,
      },
      SKU: SKU,
      topTerpenes: topTerpenes,
      price: price,
      stock: stock,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });
    console.log(OGKush);
    console.log("Function works");
  } catch (err) {
    console.log(err.message);
  }
};
const runFlower = async (
  err,
  strain,
  classification,
  cannabanoidsTHC,
  cannabanoidsCBD,
  SKU,
  topTerpenes,
  price,
  stock
) => {
  try {
    const OGKush = await Flower.create({
      strainName: strain,
      classification: classification,
      cannabanoids: {
        THC: cannabanoidsTHC,
        CBD: cannabanoidsCBD,
      },
      SKU: SKU,
      topTerpenes: topTerpenes,
      price: price,
      stock: stock,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });
    console.log(OGKush);
    console.log("Function works");
  } catch (err) {
    console.log(err.message);
  }
};


module.exports = router;
