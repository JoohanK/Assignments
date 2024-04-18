import Loggo from "../Loggo/Loggo"
import ShoppingCartButton from "../ShoppingCartButton/ShoppingCartButton"

const Header = () => {
  return (
    <header className="header-main">
      <Loggo />
      <h1>Bäst i Sverige, Type</h1>
      <ShoppingCartButton />
    </header>
  )
}

export default Header
