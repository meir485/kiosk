let express = require("express"),
    router = express.Router();
function adminRemove(req , res){
    Admin.findByIdAndRemove(req.params.adminID, function(err, found){
        if(err){console.log(err);}
        else{
            res.redirect("/admin")}
       })
}
// /product
router.post('/:adminID' ,async (req , res)=>{
   await Product.create(req.body)
   //delete from admin
   if(req.params.adminID!=='regulaCreatRoute'){
       adminRemove(req , res)
   }
   
})

router.put("/:adminID/:proUpdateID" , function(req , res){
	Product.findByIdAndUpdate(req.params.proUpdateID, {name:req.body.name}, function(err, update){
		if(err){console.log(err)}
		else{adminRemove(req , res)}
	})
})

module.exports = router