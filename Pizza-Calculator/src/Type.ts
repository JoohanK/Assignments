export type Pizza = {
  id: string;
  category: "pizza" | "vego";
  name: string;
  ingredients: string[];
  price: number;
  size: "standard" | "barn" | "familj";
};

export type CartItem = {
  id: string;
  product: Pizza;
  quantity: number;
};

export type State = {
  pizza: Pizza[];
  cart: CartItem[];
};

export type InitalContextState = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export type Action =
  | { type: "ADD_CART_ITEM"; payload: CartItem }
  | { type: "REMOVE_CART_ITEM"; payload: string }
  | { type: "CLEAR_CART" }
  | {
      type: "UPDATE_CART_ITEM";
      payload: CartItem;
    };
