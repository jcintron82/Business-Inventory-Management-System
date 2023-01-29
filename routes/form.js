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

const Flower = require("../schemas/food");
const Drinks = require("../schemas/drinks");
const Entree = require("../schemas/entrees");
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
  const image = req.body.image
  


  if(productType === 'Entree') {
  addEntree(
    null,
    strain,
    classification,
    terpenes,
    price,
    image
  );}
  else if (productType === 'Drinks') {
    run(
      null,
      strain,
      classification,
      terpenes,
      price,
      image);
      
  }
  else if (productType === 'Entree') {
    addEntree(
    null,
    strain,
    classification,
    terpenes,
    price,
    image);
    
}
  res.redirect("./form");
});


/* Relevent functions to save products to the DB */
const run = async (
  err,
  strain,
  classification,
  topTerpenes,
  price,
  image
) => {
  try {
    const newProduct = await Drinks.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
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
  topTerpenes,
  price,
  image
) => {
  try {
    const newProduct = await Flower.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      image: image,
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
  image
) => {
  try {
    const newProduct = await Entree.create({
      strainName: strain,
      classification: classification,
      topTerpenes: topTerpenes,
      price: price,
      image: image,
      // similarTo: mongoose.SchemaTypes.ObjectId
    });

  } catch (err) {
    console.log(err.message);
  }
};


module.exports = router;
