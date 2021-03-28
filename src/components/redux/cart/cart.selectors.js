import { createSelector } from "reselect";

// input selector - doesn't create selector
const selectCart = (state) => state.cart; // get the whole state and return a slice of the state

// output selector - use input selectors and create selector to build themseleves
export const selectCartitems = createSelector(
  [selectCart], // collection of array which is selectCart from input selector
  (cart) => cart.cartItems // a function that is the value we want to return out of the selector
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartitems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, currentElement) => accumulator + currentElement.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartitems], (cartItems) =>
  cartItems.reduce(
    (accumulator, currentElement) =>
      accumulator + currentElement.quantity * currentElement.price,
    0
  )
);
