// body structure
const body = document.body;
const header = document.createElement("header");
const main = document.createElement("main");
body.append(header, main);

// header top
const headerTitle = document.createElement("h1");
headerTitle.innerText = "Virtual Market";
header.append(headerTitle);

// header cart
const cartHeader = document.createElement("div");
cartHeader.classList.add("cart-header");
main.append(cartHeader);

const itemColumn = document.createElement("h2");
itemColumn.innerText = "Item";

const valueColumn = document.createElement("span");
valueColumn.innerText = "Valor";
cartHeader.append(itemColumn, valueColumn);

// products area
const productList = document.createElement("ul");
productList.classList.add("products-selected");
main.append(productList); 

function selectItems() {
    for (let i = 0; i < productsCart.length; i++) {
        const productDetails = document.createElement("li");
        productDetails.innerHTML = `
        <h3>${productsCart[i].name}</h3>
        <span>R$ ${productsCart[i].price}</span>
        `;
        productList.append(productDetails);
    }
}
selectItems();

// footer cart
const footerCart = document.createElement("section");
footerCart.classList.add("footer-cart");
main.append(footerCart);

const divTotal = document.createElement("div");
divTotal.classList.add("total");
footerCart.append(divTotal);

const totalElement = document.createElement("h3");
totalElement.innerText = "Total";

const priceElement = document.createElement("span");
priceElement.innerText = `R$ ${sumCart()}`;
divTotal.append(totalElement, priceElement);

const buttonEnd = document.createElement("button");
buttonEnd.innerHTML = "Finalizar Compra";
footerCart.append(buttonEnd);

function sumCart() {
    let sum = 0;
    for (let i = 0; i < productsCart.length; i++) {
        sum += productsCart[i].price;
    }
    return sum % 2 === 0 ? Math.floor(sum) : sum.toFixed(2);
}