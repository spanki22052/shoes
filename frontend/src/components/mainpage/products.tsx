import { actionCreators } from "components/state";
import AddCartSvg from "components/svg/add-cart";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./products.scss";

const ProductsComponent = () => {
  const dispatch = useDispatch();

  const { increaseCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="products-component">
      <h1 className="popular-products">Популярные товары</h1>

      <div className="products-list">
        <div className="product">
          <img src="/images/products/1.png" />
          <div className="text-side">
            <h1>Nike Skater 3</h1>
            <p>Категории: мужское, детское</p>
            <AddCartSvg />
          </div>
        </div>
        <div className="product">
          <img src="/images/products/2.png" />
          <div className="text-side">
            <h1>Nike Skater 3</h1>
            <p>Категории: мужское, детское</p>
            <AddCartSvg />
          </div>
        </div>
        <div className="product">
          <img src="/images/products/3.png" />
          <div className="text-side">
            <h1>Nike Skater 3</h1>
            <p>Категории: мужское, детское</p>
            <span onClick={() => increaseCart(1)}>
              <AddCartSvg />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
