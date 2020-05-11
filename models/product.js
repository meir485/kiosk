var mongoose = require("mongoose")
 
productSchema = new mongoose.Schema({
    name: String,
    img:String,
    labels:[],
	detail:String
})

module.exports = mongoose.model("Product", productSchema);