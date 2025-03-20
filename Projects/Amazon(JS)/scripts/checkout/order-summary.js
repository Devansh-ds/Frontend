import { cart, removeFromCart, updateQuantity, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { calculateCartQuantity } from "../utils/quantity.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymet-summary.js";

export function renderOrderSummary() {
  let cartSummaryHtml = ``;

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    cartSummaryHtml += `
    <div class="cart-item-container js-cart-item-${matchingProduct.id}">
        <div class="delivery-date">Delivery date: ${dateString}</div>

        <div class="cart-item-details-grid">
            <img class="product-image" src="${matchingProduct.image}" />

            <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">${matchingProduct.getPrice()}</div>
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
              <div class="delivery-options-title">Choose a delivery option:
              </div>
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
            </div>
        </div>
    </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const priceString = deliveryOption.priceCents === 0 ? "FREE" : `$${formatCurrency(deliveryOption.priceCents)}`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
    <div 
    data-product-id="${matchingProduct.id}"
    data-delivery-option-id="${deliveryOption.id}"
    class="delivery-option js-delieveryOption">
      <input ${isChecked ? "checked" : ""} type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}" />
      <div>
        <div class="delivery-option-date">${dateString}</div>
        <div class="delivery-option-price">${priceString} - Shipping</div>
      </div>
    </div>
    `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderPaymentSummary();
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

      // -----------------------------------------------

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

  document.querySelectorAll(".js-delieveryOption").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
