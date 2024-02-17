/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const decreasePizzas = (pizza) => {
    if (pizza.count === 1) {
      setCart((cartPizzas) => {
        const filtered = [...cartPizzas].filter(
          (cartPizza) => cartPizza.id !== pizza.id
        );
        return filtered;
      });
    } else {
      setCart((cartPizzas) => {
        const index = [...cartPizzas].findIndex(
          (cartPizza) => cartPizza.id === pizza.id
        );
        const newArray = [...cartPizzas];
        newArray[index].count -= 1;
        return newArray;
      });
    }
  };

  const deletePizza = (pizza) => {
    setCart((cartPizzas) => {
      const filtered = [...cartPizzas].filter(
        (cartPizza) => cartPizza.id !== pizza.id
      );
      return filtered;
    });
  };

  const increasePizzas = (pizza) => {
    setCart((cartPizzas) => {
      const index = [...cartPizzas].findIndex(
        (cartPizza) => cartPizza.id === pizza.id
      );
      const newArray = [...cartPizzas];
      newArray[index].count += 1;
      return newArray;
    });
  };

  useEffect(() => {
    if (pizzas.length > 0) {
      setLoading(false);
      return;
    }
    getPizzas();
  }, [pizzas.length]);

  const getPizzas = async () => {
    const response = await fetch("/info/pizzas.json");
    const data = await response.json();
    setPizzas(data);
    console.log(data);
  };
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        cart,
        setCart,
        loading,
        setLoading,
        error,
        setError,
        increasePizzas,
        decreasePizzas,
        deletePizza,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
