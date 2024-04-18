import { useContext } from "react"
import { PizzaContext } from "../../context/PizzaContextProvider"
import { Link } from "react-router-dom"

const ShoppingCartButton = () => {
  const { state } = useContext(PizzaContext)

  const getNumberOfItemsOrdered = () => {
    let sum = 0
    state.cart.forEach((item) => {
      sum += item.quantity
    })
    return sum
  }
  return (
    <Link className="shopping-cart-button" to={"/order"}>
      <p>{getNumberOfItemsOrdered()}</p>
      <p>🛒</p>
    </Link>
  )
}

export default ShoppingCartButton
