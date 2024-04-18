import React, { useContext, useState } from "react";
import { PizzaContext } from "../../context/PizzaContextProvider";
import { Pizza } from "../../Type";
import SortMenu from "../SortMenu/SortMenu";
import { Button } from "@mui/material";
import PopUp from "../PopUp/PopUp";

const PizzaMenu: React.FC = () => {
  const { state } = useContext(PizzaContext);
  const [pizzas, setPizzas] = useState<Pizza[]>(state.pizza);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedPizza, setSelectedPizza] = useState({} as Pizza);
  const [popUp, setPopUp] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredPizzas = state.pizza.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm)
    );
    setPizzas(filteredPizzas);
  };

  const handleSelectPizza = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setSearchTerm("");
    setPopUp(true);
  };

  return (
    <div className="pizza-menu">
      <SortMenu pizzas={state.pizza} setPizzas={setPizzas} />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Sök Pizza..."
        className="search"
      />
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="menu-item">
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients.join(", ")}</p>
          </div>
          <div>
            <p>{pizza.price} kr</p>
            <Button
              className="btn"
              sx={{ backgroundColor: "#4EB395" }}
              variant="contained"
              onClick={() => handleSelectPizza(pizza)}
            >
              Välj
            </Button>
          </div>
        </div>
      ))}
      {popUp ? (
        <div className="modal">
          <PopUp
            selectedPizza={selectedPizza}
            onClose={() => {
              setPopUp(false);
              setPizzas(state.pizza);
            }}
          ></PopUp>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PizzaMenu;
