import AllaImage from "../../Assets/img/unleashed-agency-EZpGDYWBAYA-unsplash.jpg";
import StandardImage from "../../Assets/img/vit-ch-Oxb84ENcFfU-unsplash.jpg";
import VegoImage from "../../Assets/img/likemeat-CbNAuxSZTFo-unsplash.jpg";

import React, { useState } from "react";
import { Pizza } from "../../Type";

type SortMenuProps = {
  pizzas: Pizza[];
  setPizzas: React.Dispatch<React.SetStateAction<Pizza[]>>;
};

const SortMenu = ({ pizzas, setPizzas }: SortMenuProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSort = (category: string) => {
    let sortedPizzas: Pizza[] = [];
    switch (category) {
      case "all":
        sortedPizzas = pizzas;
        break;
      case "pizza":
        sortedPizzas = pizzas.filter((pizza) => pizza.category === "pizza");
        break;
      case "vego":
        sortedPizzas = pizzas.filter((pizza) => pizza.category === "vego");
        break;

      default:
        sortedPizzas = pizzas;
        break;
    }
    setPizzas(sortedPizzas);
    setSelectedCategory(category);
  };

  return (
    <div className="sort-menu">
      <div
        className={selectedCategory === "all" ? "selected" : ""}
        onClick={() => handleSort("all")}
      >
        <img src={AllaImage} alt="Alla" className="sort-image all" />
        <h3>ALLA</h3>
      </div>
      <div
        className={selectedCategory === "pizza" ? "selected" : ""}
        onClick={() => handleSort("pizza")}
      >
        <img
          src={StandardImage}
          alt="Standard"
          className="sort-image standard"
        />
        <h3>PIZZA</h3>
      </div>
      <div
        className={selectedCategory === "vego" ? "selected" : ""}
        onClick={() => handleSort("vego")}
      >
        <img src={VegoImage} alt="Vego" className="sort-image vego" />
        <h3>VEGO</h3>
      </div>
    </div>
  );
};

export default SortMenu;
