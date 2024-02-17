/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useMemo } from "react";
import { PizzaContext } from "../context/PizzaContext";

const TotalPrice = () => {
  const { cart } = useContext(PizzaContext);

  const total = useMemo(() => {
    const totalPrice = cart.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    return totalPrice.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
    });
  }, [cart, cart.length]);

  return (
    <div>
      <p>{total}</p>
    </div>
  );
};

export default TotalPrice;
