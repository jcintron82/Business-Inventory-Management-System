const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  strainName: {
    type: String, 
    required: true
  },
  classification: String,
  cannabanoids: {
    THC:Number,
    CBD: Number
  },
  SKU: {
    type:Number,
    required:true,
    unique: true
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

mongoose.model('Flower', flowerSchema)

module.exports = mongoose.model("Flower", flowerSchema)