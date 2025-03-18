import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe("test suite: add to cart", () => {
  it("adds an existing product to the cart", () => {});

  it("adds a new product to the cart", () => {
    // spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart("d2785924-743d-49b3-8f03-ec258e640503");
    expect(cart.length).toEqual(1);
    // expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
