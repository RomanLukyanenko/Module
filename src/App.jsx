import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalog } from "./section/products-render/CatalogSection";
import { Contacts } from "./pages/Сontacts";
import { Delivery } from "./pages/Delivery";
import { SearchPage } from "./section/search/SearchSection";
import "./App.css";
import { Order } from "./section/order/Order";
import { AboutUs } from "./pages/AboutUs";
import { Layout } from "./util/Layout";
import { Icons } from "./assets/Icons";
import { Cart } from "./section/cart/Cart";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Layout>
      <Icons />
      <Cart />
    </Router>
  );
};
