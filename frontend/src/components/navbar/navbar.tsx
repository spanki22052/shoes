import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { State } from "components/state/reducers";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const cartState = useSelector((state: State) => state.cart);
  return (
    <div className="navbar">
      <Layout className="layout">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div className="left-side">
            <Menu.Item>Мужчинам</Menu.Item>
            <Menu.Item>Детям</Menu.Item>
            <Menu.Item>Женщинам</Menu.Item>
          </div>
          <div className="logo">
            <Menu.Item className="logo">
              <img src="/defaultLogo.png" />
            </Menu.Item>
            ;
          </div>
          <div className="left-side">
            <Menu.Item className="input">
              <input placeholder="Поиск..." maxLength={15} />
              <SearchOutlined />
            </Menu.Item>
            <Menu.Item>Доставка</Menu.Item>
            <Menu.Item className="cart">
              Корзина
              <ShoppingCartOutlined />
              <div className="badge">
                <p>{cartState}</p>
              </div>
            </Menu.Item>
          </div>
        </Menu>
      </Layout>
    </div>
  );
};

export default Navbar;
