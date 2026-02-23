import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setGenre,
  setYear,
  setKeyword,
  setKeywordQuery,
  setGenreQuery,
  setAlphabetSort,
} from "../../redux/partReducers/filterSlice";

import { Layout, Space, Switch, Select, Input, Radio } from "antd";

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

export default function AppSider() {
  const [radioValue, setRadioValue] = useState(1);
  const onRadioChange = (e) => {
    const selected = e.target.value;
    setRadioValue(e.target.value);

    if (selected === "HighRating") {
    } else if (selected === "ZeroAdult") {
    } else if (selected === "RussianLang") {
    }
  };

  const genre = useSelector((state) => state.filter.genre);
  const selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const year = useSelector((state) => state.filter.year);
  const keyword = useSelector((state) => state.filter.keyword);
  const keywordQuery = useSelector((state) => state.filter.keywordQuery);
  const alphabetSort = useSelector((state) => state.filter.alphabetSort);

  const dispatch = useDispatch();

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
          checked={genre}
          onChange={(checked) => dispatch(setGenre(checked))}
          style={switchStyle}
        />
        {genre && (
          <Select
            value={selectedGenre}
            onChange={(value) => dispatch(setGenreQuery(value))}
            options={genreOptions}
            placeholder="Выбрать жанр"
            style={{ width: 240 }}
            allowClear
          />
        )}
        <Switch
          checkedChildren="Сортировка по годам вкл."
          unCheckedChildren="Сортировка по годам откл."
          checked={year}
          onChange={(checked) => dispatch(setYear(checked))}
          style={switchStyle}
        />
        <Switch
          checkedChildren="Поиск по ключевым словам"
          unCheckedChildren="Поиск по ключевым словам"
          checked={keyword}
          onChange={(checked) => dispatch(setKeyword(checked))}
          style={switchStyle}
        />
        {keyword && (
          <Input
            value={keywordQuery}
            onChange={(e) => dispatch(setKeywordQuery(e.target.value))}
            placeholder="Ключевое слово"
            style={{ width: 240 }}
            allowClear
          />
        )}
        <Switch
          checkedChildren="Сортировка по алфавиту вкл. (A-Z)"
          unCheckedChildren="Сортировка по алфавиту откл."
          checked={alphabetSort}
          onChange={(checked) => dispatch(setAlphabetSort(checked))}
          style={switchStyle}
        />
      </Space>

      <Space>
        <Radio.Group
          name="radiogroup"
          value={radioValue}
          onChange={onRadioChange}
          options={[
            { value: "HighRating", label: "С рейтингом 4 и выше" },
            { value: "ZeroAdult", label: "Для детей (до 12+)" },
            { value: "RussianLang", label: "Есть русский язык" },
          ]}
        />
      </Space>
    </Layout.Sider>
  );
}
