import { ReactNode, createContext, useReducer } from "react";
import { Pizza, State, InitalContextState } from "../Type";
import pizzaData from "../pizzaData.json";
import { Reducer } from "./Reducer";

const pizzas: Pizza[] = pizzaData as Pizza[];
type PizzaContextProviderType = {
  children: ReactNode;
};

export const PizzaContext = createContext<InitalContextState>({
  state: { pizza: [], cart: [] },
  dispatch: () => null,
});

const initalPizzaState: State = {
  pizza: pizzas,
  cart: [],
};

const PizzaContextProvider = ({ children }: PizzaContextProviderType) => {
  const [state, dispatch] = useReducer(Reducer, initalPizzaState);
  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContextProvider;
