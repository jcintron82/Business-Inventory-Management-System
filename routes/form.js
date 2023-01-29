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


const Drinks = require("../schemas/drinks");
const Appetizer = require("../schemas/appetizers");
const Entree = require("../schemas/entrees");
const Dessert = require("../schemas/desserts");

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
  const terpenes = req.body.terpenes;
  const price = req.body.price;

  if(productType === 'Drinks') {
  addDrinks(
    null,
    strain,
    classification,
    terpenes,
    price,);}
  else if (productType === 'Appetizer') {
    addAppetizer(
      null,
      strain,
      classification,
      terpenes,
      price,);    
  }
  else if (productType === 'Entree') {
    addEntree(
    null,
    strain,
    classification,
    terpenes,
    price,);   
}else {
  addDessert(
  null,
  strain,
  classification,
  terpenes,
  price,);   
}
  res.redirect("./form");
});


/* Relevent functions to save products to the DB */
const addDrinks = async (
  err,
  strain,
  classification,
  topTerpenes,
  price,
) => {
  try {
    const newProduct = await Drinks.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });
  } catch (err) {
    console.log(err.message);
  }
};
const addEntree = async (
  err,
  strain,
  classification,
  topTerpenes,
  price,
) => {
  try {
    const newProduct = await Entree.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};
const addAppetizer = async (
  err,
  strain,
  classification,
  topTerpenes,
  price,
) => {
  try {
    const newProduct = await Appetizer.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};
const addDessert = async (
  err,
  strain,
  classification,
  topTerpenes,
  price,
) => {
  try {
    const newProduct = await Dessert.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};
module.exports = router;
