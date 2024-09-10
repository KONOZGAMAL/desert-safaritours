import { memo } from "react";
import { Menu, Dropdown } from "antd";
import "./Header.css";

function DesertSafariDubal() {
  const menu = (
    <Menu className="flex flex-col gap-3 justify-center menu-parent">
      <Menu.Item className="border-b border-gray-300 rounded-none menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
          className="my-9"
        >
          Desert Safari Tours
        </a>
      </Menu.Item>
      <Menu.Item className="border-b border-gray-300 rounded-none menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Dubai City Tours
        </a>
      </Menu.Item>
      <Menu.Item className="border-b border-gray-300 rounded-none menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Popular Dubai Tours
        </a>
      </Menu.Item>
      <Menu.Item className="border-b border-gray-300 rounded-none menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Evening Quad Biking Experiences
        </a>
      </Menu.Item>
      <Menu.Item className="rounded-none menu">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Best Desert Safari in Dubai
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className="pb-[20px]">
      <a className="ant-dropdown-link" href="#">
        Desert Safari Dubal
      </a>
    </Dropdown>
  );
}

export default memo(DesertSafariDubal);
