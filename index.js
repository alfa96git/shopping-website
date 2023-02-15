// Coffee Js - first Card
document.getElementById('btn-coffee-card').addEventListener('click', function () {

    const cardName = document.getElementById('coffee-card-Name').innerText;
    const cardPrice = document.getElementById('coffee-Price').innerText;

    const cardQuantity = document.getElementById('coffee-Quantity').innerText;

    const totalPrice = parseInt(cardPrice) / parseInt(cardQuantity);
    console.log(cardName, cardPrice, cardQuantity, totalPrice);

    // Take Data From Card & Display on table
    const ProductValueContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}</td>
    <td>${cardName}</td>
    <td>${cardPrice}</td>
    <td>${cardQuantity}</td>
    <td>${totalPrice}</td>

    <td>
    <button class="btn btn--sm btn-red-400"> Double </button>
    </td>

    `;

    ProductValueContainer.appendChild(tr);

})