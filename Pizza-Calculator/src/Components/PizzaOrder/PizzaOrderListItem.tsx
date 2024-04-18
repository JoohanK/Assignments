import { CartItem } from "../../Type"

type PizzaOrderListItemProps = {
    cart: CartItem 
    handleUpdateQuantity: (cart: CartItem, updateQuantity: string) => void;
    handleDelete: (id:string) => void
}

const PizzaOrderListItem = ({cart, handleUpdateQuantity, handleDelete}: PizzaOrderListItemProps) => {
  return (
    <div>
         <div className="pizza-content" key={cart.product.name}>
            <div className="pizza-name">
              <p>{cart.product.name}</p>
            </div>
            <div className="pizza-remove">
              <button
                className="pizza-remove-btn"
                onClick={() => handleUpdateQuantity(cart, "-")}
              >
                -
              </button>
              <span className="pizza-quantity">{cart.quantity}</span>
              <button
                className="pizza-add-btn"
                onClick={() => handleUpdateQuantity(cart, "+")}
              >
                +
              </button>
            </div>

            <div className="pizza-totalprice">
              <p>
                {(cart.product.price * cart.quantity).toFixed(2)}: kr
              </p>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(cart.id)}
            >
              X
            </button>
          </div>
      
    </div>
  )
}

export default PizzaOrderListItem
