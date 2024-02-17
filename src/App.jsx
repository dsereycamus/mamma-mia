import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import Home from "./views/Home";
import Card from "./views/Card";
import Shop from "./views/Shop";
import NotFound from "./views/NotFound";
import TopBar from "./components/Topbar";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pizza/:name" element={<Card />} />
        <Route path="/carrito" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
