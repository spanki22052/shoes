import "./catalog.scss";
import { catalogTypes } from "./interfaces/catalog-types";

const CatalogComponent = () => {
  const catalogTypesList: catalogTypes[] = [
    { type: "Мужчинам", img: "/images/men.png" },
    { type: "Женщинам", img: "/images/women.png" },
    { type: "Детям", img: "/images/kids.png" },
  ];

  return (
    <div className="catalog">
      {catalogTypesList.map((el, index) => {
        return (
          <div key={index} className="catalog-element">
            <h1>{el.type}</h1>
            <img src={el.img} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogComponent;
