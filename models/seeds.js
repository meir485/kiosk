const mongoose = require("mongoose"),
      Admin    = require('./admin'),
      Location = require('./location'),
      Category = require("./category"),
      Product = require('./product');
let cat
removeCallBack = (type , err) => {
    if(err){
            console.log(err);
        }else{
            console.log(`all ${type}s removed`)
        }
}

const data = {
    location:[{name:'4.3'}, {name:'4.6'} , {name:'4.7'} , {name:'4.8'}],
    category:[
        {seed:{name:'choclate'} , prodacts:[{name:'twix' , detail:'sooo gooey'}]},// , {name:'kinder bouner' , detail:'sooo good'}]},
        {seed:{name:'dariy'} , prodacts:[{name:'milk' , detail:'good for my bones'}]},// , {name:'swiss cheese' , detail:'holy'} , {name:'camamber' , detail:'stinky'}]},
        {seed:{name:'cereal'} ,prodacts:[{name:'cappin crunch' , detail:'like a piret'}]} 
    ]

}

async function seedDB(){
    await Location.remove({} ,  function(err){removeCallBack('location' , err)} );
    await Category.remove({} ,  function(err){removeCallBack('category' , err)} );
    await Product.remove({} ,   function(err){removeCallBack('prodact' ,err)} );
    await Admin.remove({} ,   function(err){removeCallBack('admin' ,err)} );
    Admin.create({TYPE:'product' , name:'salt' })
    Admin.create({TYPE:'product' , name:'green tea' })
    Admin.create({TYPE:'category' , name:'spices' })
    data.location.forEach(l =>{
        Location.create(l , function(err , location){
            if(err){  console.log(err);}
                else{console.log('added location')}
        })
    })

    data.category.forEach(async cat =>{
        Category.create(cat.seed, async function(err, category){
                    if(err){console.log(err)}     
                    else {
                
                        console.log("added a category");
                        cat.prodacts.forEach(pro =>{
                            Product.create(pro ,async function(err, prodac){
                               if(err){  console.log(err);}
                                else{
                                  
                                   console.log("Created new prodact");
                                   category.products.push(prodac)
                                   category.save();
                               }
                            });
                            
                        })
                    }
                })
    })

    
}
module.exports = seedDB;


// data.category.forEach(async cat =>{
//     function ca(){
//          Category.create(cat.seed, async function(err, category){
//         if(err){console.log(err)}     
//         else {
//             console.log("added a category");
//             //create prodacts
//             await  prOdact(cat ,category)
           
//         }
//     });
//     }
//    await ca()
// })


// }

// function prOdact(cat ,category){ 
// let arr=[];
// cat.prodacts.forEach(pro =>{
// Product.create(pro ,async function(err, prodac){
//    if(err){  console.log(err);}
//     else{
//        arr.push(prodac)
//        console.log("Created new prodact");
//        category.products.push(prodac)  
//         await category.save();
//    }
// });

// })        