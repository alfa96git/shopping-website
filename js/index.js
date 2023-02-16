

let serial = 0;

// Coffee Js - first Card
document.getElementById('btn-coffee-card').addEventListener('click', function () {
    serial += 1;
    const cardName = document.getElementById('coffee-card-Name').innerText;
    const cardPrice = document.getElementById('coffee-Price').innerText;

    const cardQuantity = document.getElementById('coffee-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) / parseInt(cardQuantity);

    // Take Data From Card & Display on table
    // const productValueContainer = document.getElementById('table-container');

    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <td>${1}</td>
    // <td>${cardName}</td>
    // <td>${cardPrice}</td>
    // <td>${cardQuantity}</td>
    // <td>$ ${totalPrice}</td>
    // <td>
    // <button class="btn btn-sm "> Double </button>
    // </td>
    // `;
    // productValueContainer.appendChild(tr);

    countTotalProductNumber('total-product', serial);
    
    setProductValueOnContainerUsingData(serial, cardName, cardPrice, cardQuantity, totalPrice);

    disableButtonUsingButtonId('btn-coffee-card');

});



// Panda JS - Second Card
document.getElementById('btn-panda-card').addEventListener('click', function () {
    serial += 1;
    const cardName = document.getElementById('panda-card-Name').innerText;
    const cardPrice = document.getElementById('panda-Price').innerText;
    const cardQuantity = document.getElementById('panda-Quantity').innerText;

    // getProductDataValueUsingId('panda-card-Name','panda-Price', 'panda-Quantity');

    const totalPrice = parseInt(cardPrice) + parseInt(cardQuantity);

    // Take Data From Card & Display on table
    // const productValueContainer = document.getElementById('table-container');
    // const tr = document.createElement('tr');
    // tr.innerHTML = `
    // <td> ${2} </td>
    // <td> ${cardName} </td>
    // <td> ${cardPrice} </td>
    // <td> ${cardQuantity} </td>
    // <td> $ ${totalPrice} </td>
    // <td> 
    // <button class="btn btn-sm "> Double </button>
    // </td>
    // `;
    // productValueContainer.appendChild(tr);


    countTotalProductNumber('total-product', serial);

    setProductValueOnContainerUsingData(serial, cardName, cardPrice, cardQuantity, totalPrice);
    disableButtonUsingButtonId('btn-panda-card');
});




// Heart JS - Third Card

document.getElementById('btn-heart-card').addEventListener('click', function () {
    serial += 1;
    // const cardName = document.getElementById('heart-card-Name').innerText;
    // const cardPrice = document.getElementById('heart-Price').innerText;
    // const cardQuantity = document.getElementById('heart-Quantity').innerText;

    const productData = getProductDataUsingId('heart-card-Name', 'heart-Price', 'heart-Quantity');

    const totalPrice = parseInt(productData.cardPrice) + parseInt(productData.cardQuantity);


    countTotalProductNumber('total-product', serial);

    setProductValueOnContainerUsingData(serial, productData.cardName, productData.cardPrice, productData.cardQuantity, totalPrice);

    disableButtonUsingButtonId('btn-heart-card');
});




// Umbrella JS - Forth Card

document.getElementById('btn-umbrella-card').addEventListener('click', function () {
    serial += 1;

    const productData = getProductDataUsingId('umbrella-card-Name', 'umbrella-Price', 'umbrella-Quantity');

    const totalPrice = parseInt(productData.cardPrice) + parseInt(productData.cardQuantity);

    countTotalProductNumber('total-product', serial);

    setProductValueOnContainerUsingData(serial, productData.cardName, productData.cardPrice, productData.cardQuantity, totalPrice);

    disableButtonUsingButtonId('btn-umbrella-card');

});



// VUE JS - Fifth Card

document.getElementById('btn-vue-card').addEventListener('click', function () {
    serial += 1;
    const productData = getProductDataUsingId('vue-card-Name', 'vue-Price', 'vue-Quantity');

    const totalPrice = parseInt(productData.cardPrice) + parseInt(productData.cardQuantity);

    countTotalProductNumber('total-product', serial);

    setProductValueOnContainerUsingData(serial, productData.cardName, productData.cardPrice, productData.cardQuantity, totalPrice);

    disableButtonUsingButtonId('btn-vue-card');

});



// Input JS - Last Card

document.getElementById('btn-input-card').addEventListener('click', function () {
    serial += 1;
    const productName = document.getElementById('input-card-Name').innerText;
    const productPrice = document.getElementById('price-input-field').value;
    const productQuantity = document.getElementById('quantity-input-field').value;

    if(productPrice == "" || productPrice <=0 || productQuantity == "" || productQuantity <=0){
       return alert(" Please, Input Valid Number");
    } 
    const totalProductPrice = parseInt(productPrice) + parseInt(productQuantity);

    countTotalProductNumber('total-product', serial);

    setProductValueOnContainerUsingData(serial, productName, productPrice, productQuantity, totalProductPrice);

    disableButtonUsingButtonId('btn-input-card');

});

