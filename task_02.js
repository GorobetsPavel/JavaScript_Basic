/*
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

function Good(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.cost = this.price * this.quantity;
    this.test = function () {
        return '$this.name';
    }
}

function countBasketPrice (array) {
    let sum = 0;
    for(let i in array) {
        sum += array[i].cost;
    }
    return sum;
}



basket = [new Good("товар_1", 10, 10), new Good("товар_2", 15, 5), new Good("товар_3", 20, 20), new Good("товар_4", 190, 3), new Good("товар_5", 1000, 1), new Good("товар_6", 420, 6)];
console.log(countBasketPrice(basket));






