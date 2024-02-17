import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import TotalPrice from "../components/TotalPrice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Shop = () => {
  const { cart, increasePizzas, decreasePizzas, deletePizza } =
    useContext(PizzaContext);
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  console.log(cart);

  return (
    <>
      <button onClick={(e) => goBack(e)}>Volver</button>

      <div className="shop-container">
        <div className="box-container">
          <h2 className="box-title">Carro de Compra</h2>
          {cart.map((pizza, index) => (
            <div key={index} className="box-price">
              <div className="shop-details-1">
                <img
                  className="cart-img"
                  src={pizza.img}
                  alt={pizza.name}
                ></img>
                <h3 className="cart-title">{pizza.name}</h3>
                <p className="cart-list">
                  ({pizza.ingredients[0]}, {pizza.ingredients[1]},{" "}
                  {pizza.ingredients[2]} & {pizza.ingredients[3]})
                </p>
              </div>

              <div className="shop-details-2">
                <div>
                  <h3 className="text-price">
                    {(pizza.price * pizza.count).toLocaleString("es-CL", {
                      currency: "CLP",
                      style: "currency",
                    })}
                  </h3>
                </div>
                <div className="btn-shop">
                  <button
                    className="btn-shop-cart"
                    disabled={pizza.count === 0}
                    onClick={() => decreasePizzas(pizza)}
                  >
                    -
                  </button>
                  <span>{pizza.count}</span>
                  <button
                    className="btn-shop-cart"
                    onClick={() => increasePizzas(pizza)}
                  >
                    +
                  </button>
                  <button
                    className="btn-shop-delete"
                    onClick={() => deletePizza(pizza)}
                  >
                    <DeleteOutlineIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="total-price">
            <h3>Total:</h3>
            <h3>
              <TotalPrice />
            </h3>
          </div>
          <div className="info-price">
            <button>Ir a Pagar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
