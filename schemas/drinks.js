const mongoose = require('mongoose');
const multer  = require('multer')

const concentrateSchema = new mongoose.Schema({
  strainName: {
    type: String, 
    // required: true
  },
  classification: String,
  // consistency: {
  //   type: String, 
  //   required: true
  // },
  cannabanoids: {
    THC:Number,
    CBD: Number,
    required: false
  },
  topTerpenes: String,
  qty: {
    type:Number,
    // required:true
},
  price:  {
    type:Number,
    // required:true
},
  stock:  {
    type:Number,
    // required:true
},
image:  {
  data: Buffer,
    contentType: String,
  // required:true
},
  similarTo: mongoose.SchemaTypes.ObjectId,
  lastUpdated: {
    type: Date,
    default: () => Date.now()
  }
})

mongoose.model('drinks', concentrateSchema)

module.exports = mongoose.model("drinks", concentrateSchema)