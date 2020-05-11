module.exports = ({ content, kitchenID }) => {
    let cartB;
    if (kitchenID) { cartB = `<a  class="button is-success" href='/cart/${kitchenID}'>cart</a>` }
    return `<!DOCTYPE html>
            <html>
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Lightrikiosk</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css">
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </head>
            <body class='has-text-centered is-italic'>
            
    
                <nav class="level">
                <!-- Left side -->
                    <div class="level-left">
                         <div class="level-item">
                             <p id='kitchenID'  class="subtitle is-5">
                                 <strong>${kitchenID}</strong>
                             </p>
                         </div>
                    </div>

                <!-- Right side -->
                     <div class="level-right">
                           <p class="level-item">${cartB}</p>
                           <p class="level-item"><a class="button is-success" href="/admin">admin</a></p>
                     </div>
                </nav>

                  ${content}

                  <footer class="footer is-primary">
                  <section class="hero is-primary">
                  <div class="hero-body">
                    <div class="container">
                      <h1 class="title">
                       a kiosk
                      </h1>
                      <h2 class="subtitle">
                        ohhh .. buy the meir mayor
                      </h2>
                    </div>
                  </div>
                </section>                  
                </footer>                  
                  
            </body>

            </html>
    `
}