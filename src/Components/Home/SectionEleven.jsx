import { memo } from "react";
import HeadLines from "../Globel/HeadLines/HeadLines";
import { Collapse } from "antd";
import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
} from "./SectionEleven/DataEleven";
import { CaretRightOutlined } from "@ant-design/icons";


function SectionEleven() {
  const panelStyle = {
    fontWeight: "700",
    backgroundColor:"#fff",
    transitionDuration:"7s",
    color:"red-10"
  };

  const items = [
    {
      key: "1",
      label: "What is Desert Safari Dubai?",
      children: text1,
      style: panelStyle,
    },
    {
      key: "2",
      label: "Are kids allowed in Desert safari Dubai?",
      children: text2,
      style: panelStyle,
    },
    {
      key: "3",
      label: "What should I wear during the Safari?",
      children: text3,
      style: panelStyle,
    },
    {
      key: "4",
      label: "Are the desert safari tours Dubai absolutely safe?",
      children: text4,
      style: panelStyle,
    },
    {
      key: "5",
      label: "Is the Private safari option available?",
      children: text5,
      style: panelStyle,
    },
    {
      key: "6",
      label: "Is it safe to ride on a quad bike?",
      children: text6,
      style: panelStyle,
    },
    {
      key: "7",
      label: "Are there any age restrictions for the desert safari in Dubai?",
      children: text7,
      style: panelStyle,
    },
    {
      key: "8",
      label: "What are the policies regarding tipping/gratuities?",
      children: text8,
      style: panelStyle,
    },
  ];

  return (
    <div className="container py-[60px]">
      <HeadLines
        title={"FAQ"}
        suptitle={"DUBAI DESERT SAFARI FREQUENTLY ASKED QUESTIONS"}
      />
      <Collapse
        items={items}
        bordered={false}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      />
    </div>
  );
}

export default memo(SectionEleven);
