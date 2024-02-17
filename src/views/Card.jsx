import { PizzaContext } from "../context/PizzaContext";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";

const Card = () => {
  const { pizzas, cart, setCart } = useContext(PizzaContext);
  const { name } = useParams();

  const selectedPizza = pizzas.find((pizza) => pizza.name === name);
  if (!selectedPizza) {
    return <p>No se encontró el producto</p>;
  }
  const addToCart = (pizza) => {
    const checkPizza = cart.filter((cartPizza) => cartPizza.id === pizza.id);
    if (checkPizza.length > 0)
      setCart((cart) => {
        const newCart = [...cart];
        const idx = newCart.findIndex((cartPizza) => cartPizza.id === pizza.id);
        newCart[idx].count += 1;
        return newCart;
      });
    else setCart((cart) => [...cart, { ...pizza, count: 1 }]);
  };
  return (
    <>
      <div key={selectedPizza.id} className="card-container">
        <img
          className="card-img"
          src={selectedPizza.img}
          alt={selectedPizza.name}
        ></img>
        <div className="info-container">
          <h3 className="card-title">{selectedPizza.name.toUpperCase()}</h3>
          <p className="card-details">{selectedPizza.desc}</p>
          <p className="card-data">
            Ingredientes: {selectedPizza.ingredients[0]},{" "}
            {selectedPizza.ingredients[1]}, {selectedPizza.ingredients[2]} &{" "}
            {selectedPizza.ingredients[3]}
          </p>
          <div className="info-price">
            <h3>
              {selectedPizza.price.toLocaleString("es-CL", {
                currency: "CLP",
                style: "currency",
              })}
            </h3>
          </div>
          <div className="btn-pizza">
            <button onClick={() => addToCart(selectedPizza)}>
              {" "}
              <AddIcon className="addcart-icon" />
            </button>
            <Link to="/">
              {" "}
              <button className="home-btn">Seguir viendo</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
