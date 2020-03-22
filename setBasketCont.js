var setBasketCont = function () {
    var totalPriceBasket = document.getElementById('head_nav_menu_block_coins');
    totalPriceBasket.textContent = updateBasket().totalPrice;

    var count = document.getElementById('head_nav_menu_block_products_sum');
    count.innerText = updateBasket().count;
};

const updateBasket = () => {
    sessionStorage.setItem('basket', JSON.stringify(basket));
    return basket.reduce((acc, { count, price }) => ({
        count: acc.count + count,
        totalPrice: acc.totalPrice + count * price,
    }), { count: null, totalPrice: 0 });
};

const remove = id => {
    basket.find((item, i) => {
        if (item.id == id) {
            if (item.count === 1) {
                idElem = document.getElementById(id);
                //console.log(idElem.parentNode)
                //console.log(idElem)
                idElem.parentNode.removeChild(idElem);
                updateBasket()
                //console.log(idElem.parentNode)
                basket.splice(i, 1);
                return true;
            } else {
                item.count--;
                return true;
            };
        };
        return false;
    });
};
const removeAll = id => {
    basket.find((item, i) => {
        if (item.id == id) {
            
                idElem = document.getElementById(id);
                //console.log(idElem.parentNode)
                //console.log(idElem)
                idElem.parentNode.removeChild(idElem);
                updateBasket()
                //console.log(idElem.parentNode)
                basket.splice(i, 1);
                return true;
            
        };
        return false;
    });
};


setBasketCont();