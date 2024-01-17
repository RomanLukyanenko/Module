import { NavigationBar } from "../pages/NavigationBar";
import { Footer } from "../pages/Footer";
import { Gallary } from "../pages/Gallary";

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Gallary />
      <Footer />
    </>
  );
};
