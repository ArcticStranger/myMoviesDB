import { useState } from "react";

import {
  Layout,
  Space,
  Switch,
  Select,
  Input,
  Radio,
} from "antd";

const switchStyle = {
  transform: "scale(1.5)",
  marginTop: 15,
  minWidth: 250,
};

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
  const [radioValue, setRadioValue] = useState(1);
  const onRadioChange = (e) => {
    const selected = e.target.value;
    setRadioValue(e.target.value);

    if (selected === "HighRating") {

    } else if (selected === "ZeroAdult") {

    } else if (selected === "RussianLang") {
      
    }
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
          checkedChildren="Сортировка по годам вкл."
          unCheckedChildren="Сортировка по годам откл."
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
        <Switch
          checkedChildren="Сортировка по алфавиту вкл. (A-Z)"
          unCheckedChildren="Сортировка по алфавиту откл."
          checked={filterData.alphabet}
          onChange={(checked) => filterData.onAlphabetSort(checked)}
          style={switchStyle}
        />
       
      </Space>

      <Space>
        <Radio.Group
          name="radiogroup"
          value={radioValue}
          onChange={onRadioChange}
          options={[
            { value: "HighRating", label: 'С рейтингом 4 и выше' },
            { value: "ZeroAdult", label: 'Для детей (до 12+)' },
            { value: "RussianLang", label: 'Есть русский язык' },
          ]}
        />
      </Space>
    </Layout.Sider>
  );
}
