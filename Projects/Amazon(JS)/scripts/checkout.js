import { cart, removeFromCart, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { calculateCartQuantity } from "./utils/quantity.js";

let cartSummaryHtml = ``;

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHtml += `
    <div class="cart-item-container js-cart-item-${matchingProduct.id}">
        <div class="delivery-date">Delivery date: Tuesday, June 21</div>

        <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}" />

            <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">$${formatCurrency(matchingProduct.priceCents)}</div>
            <div class="product-quantity">
                <span>
                Quantity:
                <span data-product-id="${matchingProduct.id}" class="quantity-label js-quantity-update">${cartItem.quantity}</span>
                </span>
                <span data-product-id="${matchingProduct.id}" class="update-quantity-link link-primary js-update-link js-update-${
    matchingProduct.id
  }">Update</span>
                <input data-product-id="${matchingProduct.id}" class = "quantity-input js-quantity-input-${matchingProduct.id}">
                <span data-product-id="${matchingProduct.id}" class = "save-quantity-link link-primary js-save-link">Save</span>
                <span data-product-id="${matchingProduct.id}" class="delete-quantity-link link-primary js-delete-link">Delete</span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">Choose a delivery option:</div>
            <div class="delivery-option">
                <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                <div>
                <div class="delivery-option-date">Tuesday, June 21</div>
                <div class="delivery-option-price">FREE Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                <div>
                <div class="delivery-option-date">Wednesday, June 15</div>
                <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
                <div>
                <div class="delivery-option-date">Monday, June 13</div>
                <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-${productId}`);
    container.remove();

    calculateCheckoutQuantity();
  });
});

calculateCheckoutQuantity();

function calculateCheckoutQuantity() {
  const checkoutLink = document.querySelector(".js-checkout-quantity");
  let totalQuantity = calculateCartQuantity(cart);
  checkoutLink.innerHTML = `${totalQuantity} items`;
}

// making the update link responsive

document.querySelectorAll(".js-update-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;
    const container = document.querySelector(`.js-cart-item-${productId}`);
    container.classList.add("is-editing-quantity");

    link.classList.add("is-editing-update");

    document.querySelectorAll(".js-quantity-update").forEach((element) => {
      if (element.dataset.productId === productId) {
        element.classList.add("is-editing-update");
      }
    });
  });
});

document.querySelectorAll(".js-save-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.productId;

    // ----------------------

    let newQuantity = document.querySelector(`.js-quantity-input-${productId}`).value;
    newQuantity = Number(newQuantity);
    console.log(newQuantity);
    updateQuantity(productId, newQuantity);
    calculateCheckoutQuantity();

    // ----------------------

    const updateBtn = document.querySelector(`.js-update-${productId}`).classList.remove("is-editing-update");

    console.log(updateBtn);

    document.querySelectorAll(".js-quantity-update").forEach((element) => {
      if (element.dataset.productId === productId) {
        element.classList.remove("is-editing-update");
        element.innerHTML = newQuantity;
      }
    });
    const container = document.querySelector(`.js-cart-item-${productId}`);
    container.classList.remove("is-editing-quantity");
  });
});
