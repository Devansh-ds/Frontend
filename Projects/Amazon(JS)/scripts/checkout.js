import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from "./checkout/paymet-summary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// ansyc makes function return promise
async function loadPage() {
  try {
    // throw "error string 1";

    await loadProductsFetch();
    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        // reject("error from reject");
        resolve("resolve from loadCart()");
      });
    });
    console.log(value);
  } catch (error) {
    console.log("Unexpected error. Try again later");
    console.log(error);
  }
  console.log("load page async");

  renderOrderSummary();
  renderPaymentSummary();

  return "extra value";
}

loadPage().then((value) => {
  console.log("next step of async |", value);
});

// -------------------------------------------------------

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve("2nd value");
//     });
//   }),
// ]).then((values) => {
//   console.log(values);
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// -----------------------------------------------------

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
