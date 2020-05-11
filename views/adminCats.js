const layout = require('./layout')

module.exports = ({kit}) =>{
    const rendercarts = kit
        .map(cart =>{

            const renderProducts = cart.products
            .map(pro =>{
            return `<div class="product">
                         ${pro.name}
                    </div>`
            }).join('');

        return `<div class="product">
                     ${cart.name}
                     ${renderProducts}
                </div>`
        }).join('');

    
    return layout({
        kitchenID:'admin carts',
        content:`<h4>carts:</h4>
            ${rendercarts}`
        
    })
}