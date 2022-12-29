var express = require("express");
var router = express.Router();
const float = require("../app.js");
const arr = [];

const flower = require("../flower");
const concentrate = require("../concentrates");

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
  const formattedTerps = terpenes.split(",");
  const price = req.body.price;
  const stock = req.body.stock;


  if(productType === 'flower') {
  runFlower(
    null,
    productType,
    strain,
    classification,
    cannabanoidTHC,
    cannabanoidCBD,
    sku,
    formattedTerps,
    price,
    stock
  );}
  else {
    run(
      null,
      productType,
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
  productType,
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
    const OGKush = await concentrate.create({
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
  productType,
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
    const OGKush = await flower.create({
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
