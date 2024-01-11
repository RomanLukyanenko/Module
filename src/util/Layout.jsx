import { NavigationBar } from "../sections/NavigationBar"; // Імпорт компоненту навігаційної панелі
import { Footer } from "../sections/Footer"; // Імпорт компоненту футера

// Компонент Layout, який обгортає основний контент веб-сторінки
export const Layout = ({ children }) => {
  return (
    // React Fragment для групування кількох елементів без додаткових вузлів у DOM
    <>
      <NavigationBar /> {/* Вставка навігаційної панелі */}
      <main>{children}</main> {/* Основний контент сторінки, переданий як дочірні елементи */}
      <Footer /> {/* Вставка футера */}
    </>
  );
};
