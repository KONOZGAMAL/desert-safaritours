import { Tabs } from "antd";
import Children1 from "./SectionSix/Children1";
import Children2 from "./SectionSix/Children2";
import Children3 from "./SectionSix/Children3";
import Children4 from "./SectionSix/Children4";
import Children5 from "./SectionSix/Children5";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Overview of Desert Tours",
    children: <Children1 />,
  },
  {
    key: "2",
    label: "Packages Include",
    children: <Children2 />,
  },
  {
    key: "3",
    label: "Timing",
    children: <Children3 />,
  },
  {
    key: "4",
    label: "Food Menu",
    children: <Children4 />,
  },
  {
    key: "5",
    label: "Value-Added Activities",
    children: <Children5 />,
  },
];
const SectionSix = () => {
  return (
    <div className="bg-backGround">
      <div className="container py-[40px]">
        <Tabs
          className="border p-6"
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SectionSix;
