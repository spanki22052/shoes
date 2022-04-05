import getWindowSize from "components/micro-functions/getWindowSize";
import CatalogComponent from "./catalog";
import "./index.scss";
import ProductsComponent from "./products";

export const MainpageComponent = () => {
  return (
    <div
      className="mainpage"
      style={getWindowSize().width > 500 ? { marginTop: "110px" } : {}}
    >
      <img src="/shoe-ad.png" />
      <CatalogComponent />
      <ProductsComponent />
    </div>
  );
};
