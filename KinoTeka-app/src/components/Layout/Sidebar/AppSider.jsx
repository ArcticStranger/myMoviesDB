import { useDispatch, useSelector } from "react-redux";

import {
  setGenre,
  setYear,
  setKeyword,
  setKeywordQuery,
  setGenreQuery,
  setAlphabetSort,
  setRadioFilter,
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

export default function AppSider({ asPanel = false }) {
  const radioFilter = useSelector((state) => state.filter.radioFilter);
  const dispatch = useDispatch();

  const onRadioClick = (value) => {
    dispatch(setRadioFilter(radioFilter === value ? null : value));
  };

  const genre = useSelector((state) => state.filter.genre);
  const selectedGenre = useSelector((state) => state.filter.selectedGenre);
  const year = useSelector((state) => state.filter.year);
  const keyword = useSelector((state) => state.filter.keyword);
  const keywordQuery = useSelector((state) => state.filter.keywordQuery);
  const alphabetSort = useSelector((state) => state.filter.alphabetSort);

  const panelContainerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 16,
    paddingTop: 8,
  };

  const filtersContent = (
    <>
      <Space
        vertical
        style={{
          marginTop: 20,
          width: "100%",
          display: "flex",
          alignItems: "center",
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
        <Radio.Group name="radiogroup" value={radioFilter}>
          <Space direction="vertical">
            <Radio value="HighRating" onClick={() => onRadioClick("HighRating")}>
              С рейтингом 4 и выше
            </Radio>
            <Radio value="ZeroAdult" onClick={() => onRadioClick("ZeroAdult")}>
              Для детей (до 12+)
            </Radio>
            <Radio value="RussianLang" onClick={() => onRadioClick("RussianLang")}>
              Есть русский язык
            </Radio>
          </Space>
        </Radio.Group>
      </Space>
    </>
  );

  if (asPanel) {
    return <div style={panelContainerStyle}>{filtersContent}</div>;
  }

  return <Layout.Sider width="25%" style={siderStyle}>{filtersContent}</Layout.Sider>;
}
