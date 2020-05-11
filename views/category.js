const layout = require('./layout')
Category     = require('../models/category'),
module.exports = ({cat , kitchenID }) =>{
    const renderProducts = cat.products
        .map(pro =>{
        return `<div class="category">
                     ${pro.name}
                    <form action ='/cart/${kitchenID}/${pro._id}' method = "post">
                    <input type="submit" value="cart">
                    </form>
                </div>`
        }).join('');

    
    return layout({
        kitchenID:kitchenID,
        content:`
            <h2>${cat.name} order!</h2>
            <h3>search</h3>
            <h4>labels</h4>
            <h4>products</h4>
            ${renderProducts}
        `
    })
}