
var method = 'GET';
var url = './data.json';

function ajax(method, url, collback) {
    var request = new XMLHttpRequest();
    request.open(method, url, true);
    request.onloadstart = function () {
        document.getElementById("preloader").style.display = "block"
    };
    request.onload = setTimeout(function () {
        collback(request.responseText);
        document.getElementById("preloader").style.display = "none"
    }, 2500);
    request.onloadend = function () {
    };
    request.send();
};
var getProducts = function () {
    ajax(method, url, function (response) {
        var products = JSON.parse(response);
        var html_str = '';
        for (var i = 0; i < products.length; i++) {
            html_str += '<div id="'
                + products[i].id + '" class="products_content_block"><div class="products_content_block_name_text"><img class="products_content_block_images" src='
                + products[i].img_url + ' alt="Roll"></img><h4 class="products_content_block_name">'
                + products[i].name + '</h4><p class="products_content_block_text">'
                + products[i].composition + '</p></div><div class="products_content_block_span"><span class="products_content_block_weight">'
                + products[i].weight + '</span><span class="products_content_block_price">'
                + products[i].price + 'грн</span></div><div class="products_content_block_section_button"><button id="products_content_block_button_'
                + products[i].id + '" class="products_content_block_button">Заказать</button></div></div>';
        };
        document.getElementById("products_contents").innerHTML = html_str;
    });
};
getProducts();




