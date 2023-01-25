var express = require("express");
var router = express.Router();

const Flower = require("../flower");
const Concentrate = require("../concentrates");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Form", employee: req.body.username });
  if (err) throw err;
});

console.log("this works");


router.post("/", (req, res) => {
  const productType = req.body.type;
  const strain = req.body.strain;
  const classification = req.body.classification;
  const cannabanoidTHC = req.body.cannabanoidsTHC;
  const cannabanoidCBD = req.body.cannabanoidsCBD;
  const qty = req.body.qty;
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
    qty,
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
      qty,
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
  qty,
  topTerpenes,
  price,
  stock
) => {
  try {
    const newProduct = await Concentrate.create({
      strainName: strain,
      classification: classification,
      cannabanoids: {
        THC: cannabanoidsTHC,
        CBD: cannabanoidsCBD,
      },
      qty: qty,
      topTerpenes: topTerpenes,
      price: price,
      stock: stock,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });
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
  qty,
  topTerpenes,
  price,
  stock
) => {
  try {
    const newProduct = await Flower.create({
      strainName: strain,
      classification: classification,
      cannabanoids: {
        THC: cannabanoidsTHC,
        CBD: cannabanoidsCBD,
      },
      qty: qty,
      topTerpenes: topTerpenes,
      price: price,
      stock: stock,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};


module.exports = router;
