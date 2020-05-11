const layout = require('./layout')
const axios  = require('axios')

function dropPro(val){
    root = 'dropPro';
    let kitchenID
    function build(pro , kitchenID){
       return `<div>
               <form action ='/cart/${kitchenID}/${pro._id}' method = "post">
               <p>${pro.name}</p>
               <input type="submit" value="cart">
               </form>
               <a href = '/kitchen/update/product/${pro._id}'>update request</a>
               </div>`
    }
    drop(val,'product',root, build)  
}

function dropCat(val){
    root = 'dropCat'
    function build(cat , kitchenID){
        console.log("dropCAt func "+kitchenID);
        return `<div>
                <a href='/kitchen/${kitchenID}/category/${cat.name}' >
                <p>${cat.name}</p>
                </a>
                </div>`
     }
    drop(val,'category',root, build)
}
async function drop (val , type , root , build) {  
    let content ='',
        update  ='',
        d,
        kitchenID;   
    axios.get(`/kitchen/drop/${val}/${type}`).then((res)=>{ 
        kitchenID = document.getElementById('kitchenID').innerText
        d = document.getElementById(root)
        if(res.data.length>0){
            content = res.data.map(el =>{
                return build(el , kitchenID)
            }).join('');
        }
        
        d.innerHTML = `${content}
                       <form action ='/admin/${val}/${type}' method = "post">
                       <p>${val}</p>
                      <input type="submit" value="add">
                      </form>`
                      
    })
    .catch(error => {
         console.log("eeee"+error)
    })
   
}

module.exports = ({categorys , kitchenID} ) =>{

    const rendercategoreis = categorys
        .map(cat =>{
        return `<a href="/kitchen/${kitchenID}/category/${cat.name}" >
                <div class="category">
                     ${cat.name}
                </div>
                </a>`
        }).join('');
      
    return layout({
        kitchenID:kitchenID,
        content:`
            <h2 class='has-text-weight-bold'>kitchen order!</h2>
            <h3>search product:</h3><input type="text" oninput="dropPro(this.value)">
            <div id='dropPro'>
            <h4 class='has-text-weight-medium'>labels</h4>
            <h4 class='has-text-weight-medium'>popular</h4>
            <h4 class='has-text-weight-bold'>categoreis</h4>
            </div>
            ${rendercategoreis}
            <h3>search catogorie:</h3><input type="text" oninput="dropCat(this.value)">
            <div id='dropCat'></div>
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

            <script>
            ${drop}
            ${dropPro}
            ${dropCat}
            </script>
        `
    })
}