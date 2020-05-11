const layout = require('./layout')

module.exports = ({locations}) =>{
    const renderLocations = locations
        .map(location =>{
        return `<a href="/kitchen/${location.name}" >
                <div class="location">
                     ${location.name}
                </div>
                </a>`
        }).join('')
        console.log(renderLocations);
    return layout({
        kitchenID:'',
        content:`
            <h2>where are u??</h2>
            ${renderLocations}
        `
    })
}