const express            = require("express"),
      bodyP              = require("body-parser"),
      methodOverride     = require("method-Override"),
      axios              = require('axios')
      mongoose           = require("mongoose"), 
      seed               = require("./models/seeds"),
      homeTemplate       = require('./views/home'),
      kitchenTemplate    = require('./views/kitchen'),
      categoryTemplate   = require('./views/category'),
      cartTemplate       = require('./views/cart'),
      adminTemplate      = require('./views/admin'),
      updateTemplate     = require('./views/update'),
      adminCartsTemplate = require ('./views/adminCats') 
      Location           = require("./models/location"), 
      Category           = require('./models/category'),
      Product            = require('./models/product'),
      Admin              = require('./models/admin'),
      kitchenRouets      = require('./routes/kitchen'),
      cartRoutes         = require('./routes/cart'),
      adminRoutes        = require('./routes/admin'),
      productRoutes      = require('./routes/product'),
      categoryRoutes     = require('./routes/category')
      app = express() 

let kit,
    pro,
    cat,
    found;


mongoose.connect("mongodb://localhost/kiosk" , {useNewUrlParser: true}); 
mongoose.set('useFindAndModify', false);

seed();

app.use(bodyP.urlencoded({extended: true}));   
app.use(methodOverride("_method"))

//routes
app.use('/kitchen'  , kitchenRouets)
app.use('/cart'     , cartRoutes)
app.use('/admin'    , adminRoutes)
app.use('/product'  , productRoutes )
app.use('/category' , categoryRoutes)




const port = process.env.PORT || 3000;  
app.listen(port, function () { console.log("Server Has Started!"); }); 
