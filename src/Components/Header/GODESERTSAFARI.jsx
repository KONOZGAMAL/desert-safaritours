import { memo } from "react";
import { Menu, Dropdown } from "antd";
import "./Header.css";

 function GODESERTSAFARI() {
    const menu = (
        <Menu className="flex flex-col gap-3 justify-center menu-parent">
          <Menu.Item className="border-b border-gray-300 rounded-none menu">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
              className="my-9"
            >
            Hatta Package
            </a>
          </Menu.Item>
          <Menu.Item className="border-b border-gray-300 rounded-none menu">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.taobao.com/"
            >
            Morning Package
            </a>
          </Menu.Item>
          <Menu.Item className="menu">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
            Abu Dhabi city tour packages
            </a>
          </Menu.Item>
        </Menu>
      );
    
      return (
        <Dropdown overlay={menu} className="pb-[20px]">
          <a className="ant-dropdown-link" href="#">
          Go Desert Safari
          </a>
        </Dropdown>
      );
}
export default memo(GODESERTSAFARI)
