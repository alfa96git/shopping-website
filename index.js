// Coffee Js - first Card
document.getElementById('btn-coffee-card').addEventListener('click', function () {

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

    setProductValueOnContainerUsingData(cardName, cardPrice, cardQuantity, totalPrice);

});



// Panda JS - Second Card
document.getElementById('btn-panda-card').addEventListener('click', function () {

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

    setProductValueOnContainerUsingData(cardName, cardPrice, cardQuantity, totalPrice);

});




// Heart JS - Third Card

document.getElementById('btn-heart-card').addEventListener('click', function () {
    const cardName = document.getElementById('heart-card-Name').innerText;
    const cardPrice = document.getElementById('heart-Price').innerText;
    const cardQuantity = document.getElementById('heart-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) + parseInt(cardQuantity);

    setProductValueOnContainerUsingData(cardName, cardPrice, cardQuantity, totalPrice);
});



// Umbrella JS - Forth Card

document.getElementById('btn-umbrella-card').addEventListener('click', function () {
    const cardName = document.getElementById('umbrella-card-Name').innerText;
    const cardPrice = document.getElementById('umbrella-Price').innerText;
    const cardQuantity = document.getElementById('umbrella-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) + parseInt(cardQuantity);

    setProductValueOnContainerUsingData(cardName, cardPrice, cardQuantity, totalPrice);

});



// VUE JS - Fifth Card

document.getElementById('btn-vue-card').addEventListener('click', function () {
    const cardName = document.getElementById('vue-card-Name').innerText;
    const cardPrice = document.getElementById('vue-Price').innerText;
    const cardQuantity = document.getElementById('vue-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) + parseInt(cardQuantity);

    setProductValueOnContainerUsingData(cardName, cardPrice, cardQuantity, totalPrice);

});



// Input JS - Last Card

document.getElementById('btn-input-card').addEventListener('click', function () {

});

