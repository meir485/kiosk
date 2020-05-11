let express = require("express"),
    router = express.Router();
    
// /admin

router.post('/:proID/:type', async (req , res) => {
    let n ='',
        type=req.params.type
    if(type==='category' || type==='product'){
        n = req.params.proID;
    }
    else if(type==='updateProduct'){
        n = req.body.namePUT;
    }
    console.log(n);
    
    Admin.create({TYPE:type , name:n } ,async function(err, adminReq){
          if(err){res.send(err)}     
          else {
            if(type==='updateProduct'){
                let p = await Product.findById(req.params.proID)
                adminReq.oldProduct.push(p) 
                adminReq.save()
            }  
            res.send(`request for adding ${n} to ${type} was made`); return}
    })   

})


router.get("/" , async (req , res) => {        
cat    = await Admin.find({TYPE:'category'}) 
pro    = await Admin.find({TYPE:'product'}) 
proUpdate = await Admin.find({TYPE:'updateProduct'}).populate("oldProduct")

console.log(proUpdate)

items={
    categories:cat ,
    products:pro,
    productsUpdate:proUpdate
}
res.send(adminTemplate({items}))
})

// router.delete("/:id" , function(req , res){
// 	Admin.findByIdAndRemove(req.params.id, function(err, found){
// 		if(err){console.log(err);}
// 		else{
// 			res.render("/admin")}
// 	})
// })
router.get('/carts' , async (req , res) => {
    kit = await Location.find({}).populate("products")
    console.log(kit)
    res.send(adminCartsTemplate({kit}))
    
})


module.exports = router


