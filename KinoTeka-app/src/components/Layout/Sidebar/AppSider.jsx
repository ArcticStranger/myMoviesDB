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
import { 
  switchStyle, 
  siderStyle, 
  panelContainerStyle,
  filtersSpaceStyle } from "../../../styles/siderStyles";
import { genreOptions } from "./SiderItems";

export default function AppSider({ asPanel = false }) {
  const radioFilter = useSelector((state) => state.filter.radioFilter);
  const dispatch = useDispatch();

  const onRadioClick = (value) => {
    dispatch(setRadioFilter(radioFilter === value ? null : value));
  };

const {
  genre,
  selectedGenre,
  year,
  keyword,
  keywordQuery,
  alphabetSort,
} = useSelector((state) => state.filter);

  const filtersContent = (
    <>
      <Space
        vertical
        style={filtersSpaceStyle}
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
          <Space orientation="vertical">
            <Radio value="HighRating" onClick={() => onRadioClick("HighRating")}>
              С рейтингом 7+ и выше
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
