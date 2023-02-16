//Get Data From Card And Put it On Container table.
function setProductValueOnContainerUsingData(productName, productPrice, productQuantity, totalProductPrice) {
    const productValueContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td> ${2} </td>
    <td> ${productName} </td>
    <td> ${productPrice} </td>
    <td> ${productQuantity} </td>
    <td> $ ${totalProductPrice} </td>
    <td> 
    <button class="btn btn-sm "> Double </button>
    </td>
    `;
    productValueContainer.appendChild(tr);
}






//  Not work properly right now.

// function getProductDataValueUsingId(productCardName,productCardPrice, productCardQuantity){
//     const cardName = document.getElementById(productCardName).innerText;
//     const cardPrice = document.getElementById(productCardPrice).innerText;
//     const cardQuantity = document.getElementById(productCardQuantity).innerText;
// console.log(cardName,cardPrice,cardQuantity);

// }