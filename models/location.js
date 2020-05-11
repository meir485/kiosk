const mongoose = require("mongoose"),
     
locationSchema = new mongoose.Schema({
	name: String,
	area:String,
	products: [
		{
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "Product"
		}
		]
})

module.exports = mongoose.model("Location", locationSchema);