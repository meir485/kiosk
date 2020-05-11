let express = require("express"),
    router = express.Router();

// /kitchen

router.get('/' , (req , res)=>{ 
    Location.find({} , (err , locations)=>{
          handllErr(err)
          .then( res.send(homeTemplate({locations})))
    })  
})

router.get('/:kitchenID' , (req , res)=>{ 
    Category.find({} , (err , categorys)=>{
          kitchenID = req.params.kitchenID
          handllErr(err)
         .then( res.send(kitchenTemplate({categorys , kitchenID})))
    })   
})

router.get('/:kitchenID/category/:catID' , (req , res)=>{ 
    Category.findOne({name:req.params.catID}).populate("products").exec(function(err , cat){
          kitchenID = req.params.kitchenID;
          handllErr(err)
         .then( res.send(categoryTemplate({cat , kitchenID}) ) )
         .catch(function(value){console.log(value);
         });
         
    })   
})

router.get('/drop/:id/:type' , async (req , res) => {
    if(req.params.type==='product'){found = await Product.find({name: { $regex: '.*' + req.params.id + '.*' } })}
    else if(req.params.type==='category'){found = await Category.find({name: { $regex: '.*' + req.params.id + '.*' } })}
    if(!found.length){
          res.send();
    }
    else{ res.send(found);}
})

router.get('/update/product/:id' , async (req , res) => {
    pro = await Product.findById(req.params.id)
    res.send(updateTemplate({pro}))
})
const handllErr = (err=null) =>{
    if(err){console.log('rrr'+err); return  Promise.reject(err)}
    else{ return Promise.resolve() }
}

module.exports = router