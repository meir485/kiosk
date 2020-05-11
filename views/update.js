const layout = require('./layout')

module.exports = ({pro}) =>{
    return `<form action ='/admin/${pro._id}/updateProduct' method = "post">
                <p>name:</p> <input type='text' name='namePUT' value=${pro.name}>
                <p>detail:</p> <input type='text' name='detailPUT' value=${pro.detail}>
                <input type="submit" value="update">
            </form>`
}