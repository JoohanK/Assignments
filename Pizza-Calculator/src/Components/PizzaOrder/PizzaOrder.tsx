import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { CartItem } from "../../Type";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import PizzaOrdered from "./PizzaOrdered";
import PizzaOrderListItem from "./PizzaOrderListItem";
import Loggo from "../Loggo/Loggo";

const PizzaOrder = () => {
  const { state, dispatch } = useContext(PizzaContext);

  const handelUpdateQuantity = (cart: CartItem, updateQuantitiy: string) => {
    if (updateQuantitiy === "+") {
      dispatch({
        type: "UPDATE_CART_ITEM",
        payload: {
          ...cart,
          quantity: cart.quantity + 1,
        },
      });
    } else if (updateQuantitiy === "-") {
      if (cart.quantity >= 1) {
        dispatch({
          type: "UPDATE_CART_ITEM",
          payload: {
            ...cart,
            quantity: cart.quantity - 1,
          },
        });
      } else {
        dispatch({
          type: "REMOVE_CART_ITEM",
          payload: cart.id,
        });
      }
    }
  };

  const handleDeleteCartItem = (id: string) => {
    dispatch({
      type: "REMOVE_CART_ITEM",
      payload: id,
    });
  };

  const calculateTotalPrice = () => {
    return state.cart
      .reduce((total, pizza) => total + pizza.product.price * pizza.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="pizza-order-container">
        <div className="pizza-container">
          <div className="order-header-container">
            <Loggo />
            <h1 className="order-header">Din beställning!</h1>
          </div>
          <div>
            {state.cart.map((cart) => (
              <PizzaOrderListItem
                cart={cart}
                handleUpdateQuantity={handelUpdateQuantity}
                handleDelete={handleDeleteCartItem}
              />
            ))}

            {state.cart && state.cart.length > 0 ? (
              <h3 className="price-cartitem">
                Totalt pris: {calculateTotalPrice()} Kr
              </h3>
            ) : (
              <div className="no-order">
                <h1 className="price-cartitem text">
                  Ingen order : {calculateTotalPrice()} Kr
                </h1>
              </div>
            )}
          </div>
          <div className="order-btn-container">
            <Button className="btn" variant="contained">
              <Link className="link" to="/">
                {" "}
                Lägg till mer ?
              </Link>
            </Button>
            <PizzaOrdered />
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaOrder;
