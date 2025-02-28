import menuArray from "./data"

const menu = document.getElementById('menu')

const items = menuArray.map((item) =>{
    const {name, ingredients, id, price, emoji} = menuArray
    
    return `
   <div class="menu-items">
                <img src="${emoji}" alt="" class="item-graphic">
                <div class="item-content">
                    <h2 class="item-title">${name}</h2>
                    <p class="item-description">INGREDIENTS</p>
                    <h3 class="item-price">${price}</h3>
                </div>
                <button class="add-btn"><i class="fa-regular fa-plus"></i></button>
            </div>
    `
})

menu.innerHTML += items