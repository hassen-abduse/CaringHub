import { Menu } from "antd";
import {
  CalendarFilled,
  SettingOutlined,
  HeartFilled,
} from "@ant-design/icons";

import React, { useState } from "react";

const { SubMenu } = Menu;

export default function NavMenu() {
  const [current, setCurrent] = useState("causes");
  const [selected, setSelected] = useState("Options");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const subMenuClick = (name) => {
    setSelected(name);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <SubMenu key="causes" icon={<HeartFilled />} title={selected}>
        <Menu.Item onClick={() => subMenuClick("Option 1")} key="setting:1">
          Option 1
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 2")} key="setting:2">
          Option 2
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 3")} key="setting:3">
          Option 3
        </Menu.Item>
        <Menu.Item onClick={() => subMenuClick("Option 4")} key="setting:4">
          Option 4
        </Menu.Item>
      </SubMenu>
      <SubMenu key="SubMenu2" icon={<SettingOutlined />} title={selected}>
        <Menu.Item onClick={() => subMenuClick("Option 1")} key="setting:1">
          Option 1
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 2")} key="setting:2">
          Option 2
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 3")} key="setting:3">
          Option 3
        </Menu.Item>
        <Menu.Item onClick={() => subMenuClick("Option 4")} key="setting:4">
          Option 4
        </Menu.Item>
      </SubMenu>
      <SubMenu key="SubMenu3" icon={<CalendarFilled />} title={selected}>
        <Menu.Item onClick={() => subMenuClick("Option 1")} key="setting:1">
          Option 1
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 2")} key="setting:2">
          Option 2
        </Menu.Item>

        <Menu.Item onClick={() => subMenuClick("Option 3")} key="setting:3">
          Option 3
        </Menu.Item>
        <Menu.Item onClick={() => subMenuClick("Option 4")} key="setting:4">
          Option 4
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
