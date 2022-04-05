import getWindowSize from "../micro-functions/getWindowSize";
import MenuComponent from "./menu";
import Navbar from "./navbar";

export const NavbarComponent = () => {
  return (
    <div className="navbar-component">
      {getWindowSize().width < 1100 ? <MenuComponent /> : <Navbar />}
    </div>
  );
};
