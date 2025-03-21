import { cart, addToCart } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { calculateCartQuantity } from "./utils/quantity.js";

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHtml = "";
  products.forEach((product) => {
    productsHtml += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class ="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHtml()}

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
  });

  document.querySelector(".js-products-grid").innerHTML = productsHtml;

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    let addedMessageTimeoutId;
    button.addEventListener("click", () => {
      const { productId } = button.dataset;

      // add product with varying quantity
      addToCart(productId);

      // updates the number above the cart image
      updateCartQuantityImage();

      // showing (added) above it
      const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
      addedMessage.classList.add("show-added");

      setTimeout(() => {
        if (addedMessageTimeoutId) {
          clearTimeout(addedMessageTimeoutId);
        }
        const timeoutId = setTimeout(() => {
          addedMessage.classList.remove(`show-added`);
        }, 2000);
        addedMessageTimeoutId = timeoutId;
      });
      // ----------------------------------
    });
  });

  updateCartQuantityImage();

  function updateCartQuantityImage() {
    let cartQuantity = calculateCartQuantity(cart);

    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  }
}
