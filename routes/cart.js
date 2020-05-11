let express = require("express"),
    router = express.Router();
// /cart
router.post('/:kitchenID/:productID' ,async (req , res) => {
    kit = await Location.find({name:req.params.kitchenID})
    pro = await Product.findById(req.params.productID)
    if(!pro || !kit){res.send(err); return}
    if(kit[0].products.some(p => p.equals(pro._id) )){res.send('alredy here')}
    else{
      kit[0].products.push(pro)
      kit[0].save()
      res.send('added to cart')
    }
})

router.get('/:kitchenID' , async (req , res) => {
    kit = await Location.find({name:req.params.kitchenID}).populate("products")
    kit = kit[0]
    if(kit){ res.send(cartTemplate({kit}) ) }
})

module.exports = router