import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PizzaContextProvider from "./context/PizzaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PizzaContextProvider>
      <App />
    </PizzaContextProvider>
  </BrowserRouter>
);
