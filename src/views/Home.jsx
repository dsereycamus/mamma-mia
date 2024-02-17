import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PizzaHeader from "../assets/img/headerpizza.jpg";

const Home = () => {
  const { pizzas, loading, error, cart, setCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleClick = (name) => {
    const path = `/pizza/${name}`;
    navigate(path);
  };

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
      {error && !loading && (
        <h3 className="error">
          Ha ocurrido un error. Intente de nuevo más tarde
        </h3>
      )}
      <section>
        <div className="header-container">
          <img
            className="header-pizza"
            src={PizzaHeader}
            alt="pizzaheader"
          ></img>
          <p className="header-text">
            {" "}
            Que nadie te diga que la pizza es para el fin de semana{" "}
          </p>
        </div>

        <h1 className="home-title">SELECCIÓN DE PIZZAS</h1>
        <div className="home-pizzas">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="home-pizzas-container">
              <img className="img-pizza" src={pizza.img} alt={pizza.name}></img>
              <div className="data-pizza">
                <h3 className="name-pizza">{pizza.name.toUpperCase()}</h3>
                <p className="lista-pizza">
                  {pizza.ingredients[0]}, {pizza.ingredients[1]},{" "}
                  {pizza.ingredients[2]} & {pizza.ingredients[3]}
                </p>

                <p>
                  {pizza.price.toLocaleString("es-CL", {
                    currency: "CLP",
                    style: "currency",
                  })}
                </p>
                <div className="btn-pizza-home">
                  <button onClick={() => handleClick(pizza.name)}>
                    Ver Detalle
                  </button>

                  <button onClick={() => addToCart(pizza)}>
                    <AddShoppingCartIcon className="addcart-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
