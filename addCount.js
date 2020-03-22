document.getElementById('basket_contents').addEventListener('click', function (e) {
  if (e.target.className === 'basket_content_block_product_minus_plus plus') {

    add({
      id: e.target.parentNode.parentNode.id,
      name: e.target.parentNode.parentNode.name,
      composition: e.target.parentNode.parentNode.composition,
      weight: e.target.parentNode.parentNode.weight,
      price: e.target.parentNode.parentNode.price,
      img_url: e.target.parentNode.parentNode.img_url
    });
    setBasketCont()
    getProductsOfSS()
    document.getElementById('basket_payment_amount_num').textContent = updateBasket().totalPrice;
    //console.dir(e)
    //console.dir(i)
    //console.dir(basket[i])
  };
  if (e.target.className === 'basket_content_block_product_minus_plus minus') {
    var i = e.target.parentNode.parentNode.id;
    remove(i);
    updateBasket()
    getProductsOfSS()
    setBasketCont()
    document.getElementById('basket_payment_amount_num').textContent = updateBasket().totalPrice;
    // console.dir(e)
    // console.dir(i)
    //console.dir(basket[i])
  };
  if (e.target.className === 'basket_content_block_product_button_trashcan') {
    var i = e.target.parentNode.id;
    removeAll(i);
    //console.dir(e.target)
    //console.dir(i)
    updateBasket()
    getProductsOfSS()
    setBasketCont()
    document.getElementById('basket_payment_amount_num').textContent = updateBasket().totalPrice;
  };



}, false);