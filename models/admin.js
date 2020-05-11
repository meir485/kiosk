var mongoose = require("mongoose")
 
adminSchema = new mongoose.Schema({
    name: String,
    img:String,
    TYPE:String,
    oldProduct: [
		{
		   type: mongoose.Schema.Types.ObjectId,
		   ref: "Product"
		}
		]
})

module.exports = mongoose.model("Admin", adminSchema);