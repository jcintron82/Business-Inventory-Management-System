const mongoose = require('mongoose');
const multer  = require('multer')

const flowerSchema = new mongoose.Schema({
    strainName: {
        type: String, 
        required: true
      },
      classification: String,
      topTerpenes: String,
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


mongoose.model('Flower', flowerSchema)

module.exports = mongoose.model("Flower", flowerSchema)