import { NavigationBar } from "../sections/NavigationBar";
import { Footer } from "../sections/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
