import { NavLink, Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import TotalPrice from "./TotalPrice";

const NavBar = () => {
  const ActiveClass = ({ isActive }) =>
    isActive ? "pizza-active" : "pizza-inactive";

  return (
    <header>
      <div className="navbar-pizzeria">
        <Link to="/" className="link-btn">
          {" "}
          <div className="logo-text-pizzeria">
            <LocalPizzaIcon className="pizza-icon" />
            <h3>MAMMA MIA PIZZERÍA</h3>
          </div>
        </Link>

        <nav>
          <NavLink to="/carrito" className={ActiveClass}>
            <div className="shopping-container">
              <ShoppingBasketIcon className="shopping-icon" /> <TotalPrice />
            </div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
