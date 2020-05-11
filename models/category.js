var mongoose = require("mongoose")
//var prodact   = require("./product");
 
categorySchema = new mongoose.Schema({
    name: String,
    img:String,
    labels:[],
	products: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Product"
      }
      ]
})

module.exports = mongoose.model("Category", categorySchema);