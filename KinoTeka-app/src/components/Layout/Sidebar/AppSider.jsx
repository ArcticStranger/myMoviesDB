import { useState } from "react";

import { CarryOutOutlined } from "@ant-design/icons";
import {
  Layout,
  Space,
  Switch,
  Select,
  Input,
  Button,
  Drawer,
  Radio,
} from "antd";

const switchStyle = {
  transform: "scale(1.5)",
  marginTop: 15,
  minWidth: 200,
};

const treeData = [
  {
    value: "parent 1",
    title: "parent 1",
    icon: <CarryOutOutlined />,
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        icon: <CarryOutOutlined />,
        children: [
          {
            value: "leaf1",
            title: "leaf1",
            icon: <CarryOutOutlined />,
          },
          {
            value: "leaf2",
            title: "leaf2",
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        icon: <CarryOutOutlined />,
        children: [
          {
            value: "sss",
            title: "sss",
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];

const siderStyle = {
  textAlign: "center",
  minHeight: "calc(100vh - 90px)",
  color: "#fff",
  backgroundColor: "#99a4b4",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: 16,
};

const genreOptions = [
  { value: "Action", label: "Action" },
  { value: "Drama", label: "Drama" },
  { value: "Comedy", label: "Comedy" },
  { value: "Sci-Fi", label: "Sci-Fi" },
];

export default function AppSider({ filterData }) {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Space
        vertical
        style={{
          marginTop: 20,
          width: "100%",
          marginBottom: 20,
        }}
      >
        <Switch
          checkedChildren="Поиск по жанру"
          unCheckedChildren="Поиск по жанру"
          checked={filterData.genre}
          onChange={(checked) => filterData.onGenre(checked)}
          style={switchStyle}
        />
        {filterData.genre && (
          <Select
            value={filterData.selectedGenre}
            onChange={filterData.onGenreChange}
            options={genreOptions}
            placeholder="Выбрать жанр"
            style={{ width: 240 }}
            allowClear
          />
        )}
        <Switch
          checkedChildren="Поиск по годам"
          unCheckedChildren="Поиск по годам"
          checked={filterData.year}
          onChange={(checked) => filterData.onYear(checked)}
          style={switchStyle}
        />
        <Switch
          checkedChildren="Поиск по ключевым словам"
          unCheckedChildren="Поиск по ключевым словам"
          checked={filterData.keyword}
          onChange={(checked) => filterData.onKeyword(checked)}
          style={switchStyle}
        />
        {filterData.keyword && (
          <Input
            value={filterData.keywordQuery}
            onChange={(e) => filterData.onKeywordChange(e.target.value)}
            placeholder="Ключевое слово"
            style={{ width: 240 }}
            allowClear
          />
        )}
      </Space>

      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">На русском языке</Radio>
          <Radio value="right">Для детей</Radio>
          <Radio value="bottom">С рейтингом 4 и выше</Radio>
        </Radio.Group>
      </Space>
    </Layout.Sider>
  );
}
