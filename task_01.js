let docCart = document.querySelector('.cart');
let docGoods = document.querySelector('.goods');

let cart = [];
let storeGoods = [new StoreGood("товар_1", 10), new StoreGood("товар_2", 15), new StoreGood("товар_3", 20), new StoreGood("товар_4", 190), new StoreGood("товар_5", 1000), new StoreGood("товар_6", 420)];

function Good(name, price, quantity = 1) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.updateCost = function () {
        this.cost = this.price * this.quantity;;
    }    
    this.updateCost();
}

function StoreGood(name, price) {
    this.name = name;
    this.price = price;
    this.images = [
        './img/box.png'
    ]
}

function countBasketPriceAndQuantity (array) {
    let sum = 0;
    let quant = 0;
    for(let i in array) {
        sum += array[i].cost;
        quant += array[i].quantity;
    }
    return {sum, quant};
}

function updateCartsText() {
    docCart.textContent = '';

    const p = document.createElement('p');
    cartData = countBasketPriceAndQuantity(cart);

    if (cart.length > 0) {
        p.textContent = `в корзине ${cartData.quant} товаров, на сумму  ${cartData.sum} рублей`;
    } else {
        p.textContent = 'корзина пуста'
    }
    
    docCart.appendChild(p);
}

function showGoods() {
    storeGoods.forEach(function (good, i) {
        const imagesHtml = good.images.map(function(src) {
            return `<img width="30" src="${src}"></img>`
        }).join('');

        console.log(imagesHtml);
        const html = `<div class="good"><h5>${good.name}</h5><p>${good.price}</p>${imagesHtml}<button class="button" data-id="${i}">+</button></div>`;
        docGoods.insertAdjacentHTML('beforeend', html);
    })
}

docGoods.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const good = storeGoods[id];

        const uniqeId = cart.findIndex(function(item) {
            return good.name == item.name; 
        });

        if(uniqeId < 0) {
            cart.push(new Good(good.name, good.price));
        } else {
            cart[uniqeId].quantity++;
            cart[uniqeId].updateCost();
        }

        console.log(uniqeId);
        console.log(cart);

        updateCartsText();
    }
});

//cart = [new Good("товар_1", 10, 10), new Good("товар_2", 15, 5), new Good("товар_3", 20, 20), new Good("товар_4", 190, 3), new Good("товар_5", 1000, 1), new Good("товар_6", 420, 6)];
updateCartsText();
showGoods();
//console.log(countBasketPriceAndQuantity(cart));



