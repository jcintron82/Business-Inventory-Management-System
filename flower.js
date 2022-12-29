const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
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
        CBD: Number
      },
      topTerpenes: [String],
      SKU: {
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
      similarTo: mongoose.SchemaTypes.ObjectId,
      lastUpdated: {
        type: Date,
        default: () => Date.now()
      }
    })

mongoose.model('Flower', flowerSchema)

module.exports = mongoose.model("Flower", flowerSchema)