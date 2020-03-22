var getProductsOfSS = function () {
  //  console.log(basket);
    var html_str = '';
    for (var i = 0; i < basket.length; i++) {
        html_str += '<div id="'
            + basket[i].id + '" class="basket_content_block"><img class="basket_content_block_images" src="'
            + basket[i].img_url + '" alt="Roll"><div class="basket_content_block_name_text"><h3 class="basket_content_block_name">'
            + basket[i].name + '</div><span class="basket_content_block_price">'
            + basket[i].price + ' грн</span><div class="basket_content_block_buttons"><button class="basket_content_block_product_minus_plus minus">-</button><span class="basket_content_block_product">'
            + basket[i].count + '</span><button class="basket_content_block_product_minus_plus plus">+</button></div><span class="basket_content_block_price_sum">'
            + basket[i].price * basket[i].count + ' грн</span><button class="basket_content_block_product_button_trashcan"></button></div>'
    };
    document.getElementById("basket_contents").innerHTML = html_str;
};
getProductsOfSS();

