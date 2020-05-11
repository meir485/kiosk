const layout = require('./layout')

module.exports = ({kit}) =>{
    const renderProducts = kit.products
        .map(pro =>{
        return `<div class="product">
                     ${pro.name}
                </div>`
        }).join('');

    
    return layout({
        kitchenID:kit.name,
        content:`<h4>cart</h4>
            ${renderProducts}`
        
    })
}