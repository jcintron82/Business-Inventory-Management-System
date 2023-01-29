const mongoose = require('mongoose');
const multer  = require('multer')

const entreeSchema = new mongoose.Schema({
  strainName: {
    type: String, 
    required: true
  },
  classification:  {
    type: String, 
    required: true
  },
  
  topTerpenes:  {
    type: String, 
    required: true
  },
  price:  {
    type:Number,
    required:true
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

mongoose.model('appetizer', entreeSchema)

module.exports = mongoose.model("appetizer", entreeSchema)