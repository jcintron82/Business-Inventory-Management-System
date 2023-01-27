var express = require("express");
var router = express.Router();
// var multer = require('multer');
 
// //Set storage engine
// var storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb) {
//     cb(null,file.fieldname + '-' + Date.now() +
//      path.extname(file.originalname))
//   }
// });

// //Init upload 
// const upload = multer({
//   storage: storage
// }).single('image');

const Flower = require("../flower");
const Drinks = require("../schemas/drinks");

/* Relevent functions to save products to the DB */
const run = async (
  err,
  strain,
  classification,
  cannabanoidsTHC,
  cannabanoidsCBD,
  qty,
  topTerpenes,
  price,
  stock,
  image
) => {
  try {
    const newProduct = await Drinks.create({
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
      image: image,
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
  stock,
  image
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
      image: image,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};

/* GET form page. */
router.get("/", function (req, res, next) {
  res.render("form", { title: "Form", employee: req.body.username });
  if (err) throw err;
});

console.log("this works");

/* POST form data. */
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
  const image = req.body.image
  


  if(productType === 'Food') {
  runFlower(
    null,
    strain,
    classification,
    cannabanoidTHC,
    cannabanoidCBD,
    qty,
    formattedTerps,
    price,
    stock,
    image
  );}
  else if (productType === 'Drinks') {
    run(
      null,
      strain,
      classification,
      cannabanoidTHC,
      cannabanoidCBD,
      qty,
      formattedTerps,
      price,
      stock,
      image);
      
  }
  res.redirect("./form");
});



module.exports = router;
