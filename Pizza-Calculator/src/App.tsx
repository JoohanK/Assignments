import { Route, BrowserRouter, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import "./Scss/main.scss";
import Header from "./Components/Header/Header";
import PizzaContextProvider from "./context/PizzaContextProvider";

function App() {
  return (
    <PizzaContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </PizzaContextProvider>
  );
}

export default App;
