import { State, Action } from "../Type";

export const Reducer = (state: State, action: Action) => {
  let pizzaNameIndex;
  switch (action.type) {
    case "ADD_CART_ITEM":
      pizzaNameIndex = state.cart.findIndex(
        (item) =>
          item.product.name === action.payload.product.name &&
          item.product.size === action.payload.product.size &&
          JSON.stringify(item.product.ingredients.sort()) ===
            JSON.stringify(action.payload.product.ingredients.sort())
      );

      if (pizzaNameIndex !== -1) {
        const updateCartQuantity = [...state.cart];
        updateCartQuantity[pizzaNameIndex].quantity +=
          action.payload.quantity / 2;
        return {
          cart: updateCartQuantity,
          pizza: state.pizza,
        };
      } else {
        return { cart: [...state.cart, action.payload], pizza: state.pizza };
      }
    case "UPDATE_CART_ITEM":
      return {
        cart: state.cart.map((i) => {
          if (i.id === action.payload.id) {
            return action.payload;
          } else {
            return i;
          }
        }),
        pizza: state.pizza,
      };
    case "REMOVE_CART_ITEM":
      return {
        cart: state.cart.filter((i) => i.id !== action.payload),
        pizza: state.pizza,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
