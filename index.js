// Coffee Js - first Card
document.getElementById('btn-coffee-card').addEventListener('click', function () {

    const cardName = document.getElementById('coffee-card-Name').innerText;
    const cardPrice = document.getElementById('coffee-Price').innerText;

    const cardQuantity = document.getElementById('coffee-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) / parseInt(cardQuantity);
    // console.log(cardName, cardPrice, cardQuantity, totalPrice);

    // Take Data From Card & Display on table
    const productValueContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${cardName}</td>
    <td>${cardPrice}</td>
    <td>${cardQuantity}</td>
    <td>$ ${totalPrice}</td>

    <td>
    <button class="btn btn-sm "> Double </button>
    </td>

    `;

    productValueContainer.appendChild(tr);

});



// Panda JS - Second Card

document.getElementById('btn-panda-card').addEventListener('click', function(){

    const cardName = document.getElementById('panda-card-Name').innerText;
    const cardPrice = document.getElementById('panda-Price').innerText;
    const cardQuantity = document.getElementById('panda-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) + parseInt(cardQuantity);
    // console.log(cardName, cardPrice, cardQuantity,totalPrice);

    const productValueContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td> ${2} </td>
    <td> ${cardName} </td>
    <td> ${cardPrice} </td>
    <td> ${cardQuantity} </td>
    <td> $ ${totalPrice} </td>
    <td> 
    <button class="btn btn-sm "> Double </button>
    </td>
    `;
    productValueContainer.appendChild(tr);

});




// Heart JS - Third Card

document.getElementById('btn-heart-card').addEventListener('click', function(){

});



// Umbrella JS - Forth Card

document.getElementById('btn-umbrella-card').addEventListener('click', function(){

});



// VUE JS - Fifth Card

document.getElementById('btn-vue-card').addEventListener('click', function(){

});



// Input JS - Last Card

document.getElementById('btn-input-card').addEventListener('click', function(){

});

