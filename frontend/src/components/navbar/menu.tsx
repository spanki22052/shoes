import { Menu } from "antd";
import {
  InfoCircleOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";

import "./menu.scss";
import { SneakerSvg } from "components/svg/sneaker";

const { SubMenu } = Menu;

const MenuComponent = () => {
  const [collapsed, setCollapse] = useState(false);

  const toggleCollapsed = () => setCollapse(!collapsed);
  return (
    <div>
      <Menu
        style={{ position: "absolute" }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        className={`menu, ${!collapsed ? "wide" : "none"}`}
      >
        <Menu.Item icon={<SneakerSvg />} onClick={() => toggleCollapsed()}>
          Закрыть меню
        </Menu.Item>
        <SubMenu key="sub1" icon={<MenuOutlined />} title="Категории">
          <Menu.Item>Мужское</Menu.Item>
          <Menu.Item>Женское</Menu.Item>
          <Menu.Item>Детям</Menu.Item>
        </SubMenu>
        <Menu.Item icon={<SearchOutlined />}>Поиск</Menu.Item>
        <Menu.Item icon={<InfoCircleOutlined />}>О нас</Menu.Item>
        <Menu.Item icon={<ShoppingCartOutlined />}>О нас</Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuComponent;
