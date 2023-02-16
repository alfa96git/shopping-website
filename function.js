//Get Data From Card And Put it On Container table.
function setProductValueOnContainerUsingData(serialNumber, productName, productPrice, productQuantity, totalProductPrice) {
    const productValueContainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td> ${serialNumber} </td>
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






// Get Product value from card using ID
function getProductDataUsingId(productCardName, productCardPrice, productCardQuantity) {

    const cardName = document.getElementById(productCardName).innerText;
    const cardPrice = document.getElementById(productCardPrice).innerText;
    const cardQuantity = document.getElementById(productCardQuantity).innerText;

    const pData = {
        cardName: cardName,
        cardPrice: cardPrice,
        cardQuantity: cardQuantity,
    };

    return pData;

}





// Disable After Clicking the Button.

function disableButtonUsingButtonId (buttonId){
    document.getElementById(buttonId).setAttribute('disabled', true);
}