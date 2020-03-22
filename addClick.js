var addToBasket = document.getElementById("products_contents");
addToBasket.addEventListener('click', function (e) {
    
    if (e.target.className === 'products_content_block_button') {
        var elm_id = e.target.parentNode.parentNode.id;
        console.dir(elm_id);
        var elm_name = e.target.parentNode.parentNode.children[0].children[1].textContent;
        console.dir(elm_name);
        var elm_composition = e.target.parentNode.parentNode.children[0].children[2].textContent;
        console.dir(elm_composition);
        var elm_weight = e.target.parentNode.parentNode.children[1].children[0].textContent;
        console.dir(elm_weight);
        var elm_price = e.target.parentNode.parentNode.children[1].children[1].textContent;
        console.dir(elm_price);
        var elm_img_url = e.target.parentNode.parentNode.children[0].children[0].src;
        console.dir(e.target);

        add({
            id: elm_id,
            name: elm_name,
            composition: elm_composition,
            weight: elm_weight,
            price: parseInt(elm_price, 10),
            img_url: elm_img_url
        });
        setBasketCont();
    };
}, false);