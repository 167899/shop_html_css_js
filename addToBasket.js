const basket = JSON.parse(sessionStorage.getItem('basket')) || [];
const add = ({ id, name, composition, weight, price, img_url }) => {
    let alreadyInBasket = false;
    basket.find(item => {
        if (item.id === id) {
            item.count++;
            alreadyInBasket = true;
            return true;
        };
        return false;
    });
    if (!alreadyInBasket) {
        basket.push({
            id,
            name,
            composition,
            weight,
            price,
            img_url,
            count: 1,
        });
    };
};


