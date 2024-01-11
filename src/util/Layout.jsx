import { NavigationBar } from "../sections/NavigationBar";
import { Footer } from "../sections/Footer";
import { Gallary } from "../sections/Gallary";

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
