import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/paymet-summary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve("sending resolve a value");
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve("2nd value");
    });
  }),
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve("value 1");
//   });
// })
//   .then((value) => {
//     return new Promise((resolve) => {
//       loadCart(() => {
//         console.log("cart is loaded ", value);
//         resolve();
//       });
//     });
//   })
//   .then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });

// ---------------------------------------------------------------

// loadProducts(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
// });

// ----------------------------------------------------------------

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
