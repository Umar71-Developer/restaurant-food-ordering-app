import menuArray from "./data.js"


const menu = document.getElementById('menu')

function feedHtml() {

    const items = menuArray.map((item) =>{
     
        const {name, price, emoji,ingredients} = item
        
        
        return `
       <div class="menu-items">
                    <div class="item-graphic">${emoji}</div>
                    <div class="item-content">
                        <h2 class="item-title">${name}</h2>
                        <p class="item-description">${[...ingredients]}</p>
                        <h3 class="item-price">$${price}</h3>
                    </div>
                    <button class="add-btn"><i class="fa-regular fa-plus"></i></button>
                </div>
        `
    }).join('')
    return items
}



function render(){
    menu.innerHTML = feedHtml()
}

render()