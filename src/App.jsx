import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Catalogue } from "./components/products-render/CatalogeSection";
import { Contacts } from "./sections/Сontacts";
import { Delivery } from "./sections/Delivery";
import { SearchPage } from "./components/search/SearchSection";
import "./App.css";
import { Order } from "./components/order/Order";
import { AboutUs } from "./sections/AboutUs";
import { Layout } from "./util/Layout";
import { Icons } from "./assets/Icons";
import { Cart } from "./components/cart/Cart";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Catalogue />} />
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
