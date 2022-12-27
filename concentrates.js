const mongoose = require('mongoose');

const concentrateSchema = new mongoose.Schema({
  strainName: {
    type: String, 
    required: true
  },
  classification: String,
  consistency: {
    type: String, 
    required: true
  },
  cannabanoids: {
    THC:Number,
    CBD: Number
  },
  SKU: {
    type:Number,
    required:true
},
  topTerpenes: [String],
  price:  {
    type:Number,
    required:true
},
  stock:  {
    type:Number,
    required:true
},
  similarTo: mongoose.SchemaTypes.ObjectId,
  lastUpdated: {
    type: Date,
    default: () => Date.now()
  }
})

mongoose.model('Concentrates', concentrateSchema)

module.exports = mongoose.model("Concentrates", concentrateSchema)