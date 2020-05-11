const layout = require('./layout')

module.exports = ({items}) =>{
    let renderProductsPUT ='no products to update'
    const renderCategories = items.categories
        .map(cat =>{
        return `<p></p>
                <form action ='/category/${cat._id}' method = "post">
                    <input type="text" name = 'name' value=${cat.name}>
                    <input type="submit" value="add categorie">
                </form>`
        }).join('')

    const renderProducts = items.products
        .map(pro =>{
        return `
                <form action ='/product/${pro._id}' method = "post">
                    <input type="text" name = 'name' value=${pro.name}>
                    <input type="submit" value="add prodact">
                </form>`
        }).join('')
    if(items.productsUpdate){
        //
        renderProductsPUT = items.productsUpdate
        .map((pro , i) =>{
        return `
                <form action ='/product/${pro._id}/${pro.oldProduct[0]._id}?_method=PUT' method="post">
                    old product <input type="text" value=${pro.oldProduct[0].name}>
                    update to <input type="text" name="name" value=${pro.name}>
                    <input type="submit" value="update prodact">
                </form>`
        }).join('')
    }
    
    return layout({
        kitchenID:'',
        content:`
            <h2>admin</h2>
            <h4>products</h4>
            ${renderProducts}
            <h4>categories</h4>
            ${renderCategories}
            <h3>update!</h3>
            <h4>products</h4>
            ${renderProductsPUT}
        `
    })
}