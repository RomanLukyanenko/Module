import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './sections/NavigationBar';
import { Cataloge } from './sections/Cataloge';
import { Contacts } from './sections/Сontacts';
import { Delivery } from './sections/Delivery';
import { SearchPage } from './components/SearchPage';
import { Gallary } from './sections/Gallary';
import { Footer } from './sections/Footer';
import { Cart }  from './components/cart/Cart';
import { Icons } from './assets/Icons';
import './App.css';
import Order from './sections/Order';
import { AboutUs } from './sections/AboutUs';

export const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<Cataloge />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/search" element= {<SearchPage />} />
        <Route path="/about-us" element= {<AboutUs />} />
        <Route path="/order" element= {<Order />} />
      </Routes>
      <Icons />
      <Gallary />
      <Cart />
      <Footer />
    </Router>
  );
};
