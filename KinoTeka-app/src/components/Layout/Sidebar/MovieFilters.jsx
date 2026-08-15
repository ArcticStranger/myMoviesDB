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
  panelHeaderStyle,
  filtersSectionStyle,
  sectionTitleStyle,
  filtersSpaceStyle,
} from "../../../styles/siderStyles";
import { genreOptions } from "./SiderItems";

function FiltersContent({ dispatch, state }) {
  const { genre, selectedGenre, year, keyword, keywordQuery, alphabetSort } =
    state;
  const onRadioClick = (value) => {
    dispatch(setRadioFilter(state.radioFilter === value ? null : value));
  };

  return (
    <>
      <Space style={filtersSpaceStyle}>
        <span style={sectionTitleStyle}>Жанр</span>
        <Switch
          checkedChildren="Жанр вкл."
          unCheckedChildren="Жанр выкл."
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
            style={{ width: "100%" }}
            allowClear
          />
        )}
      </Space>

      <Space style={filtersSectionStyle}>
        <span style={sectionTitleStyle}>Сортировка</span>
        <Switch
          checkedChildren="По году вкл."
          unCheckedChildren="По году выкл."
          checked={year}
          onChange={(checked) => dispatch(setYear(checked))}
          style={switchStyle}
        />
        <Switch
          checkedChildren="По алфавиту вкл."
          unCheckedChildren="По алфавиту выкл."
          checked={alphabetSort}
          onChange={(checked) => dispatch(setAlphabetSort(checked))}
          style={switchStyle}
        />
      </Space>

      <Space style={filtersSectionStyle}>
        <span style={sectionTitleStyle}>Ключевые слова</span>
        <Switch
          checkedChildren="Ключевые слова вкл."
          unCheckedChildren="Ключевые слова выкл."
          checked={keyword}
          onChange={(checked) => dispatch(setKeyword(checked))}
          style={switchStyle}
        />
        {keyword && (
          <Input
            value={keywordQuery}
            onChange={(e) => dispatch(setKeywordQuery(e.target.value))}
            placeholder="Ключевое слово"
            allowClear
          />
        )}
      </Space>

      <Space style={filtersSectionStyle}>
        <span style={sectionTitleStyle}>Специальная подборка</span>
        <Radio.Group name="radiogroup" value={state.radioFilter}>
          <Space direction="vertical">
            <Radio
              value="HighRating"
              onClick={() => onRadioClick("HighRating")}
            >
              С рейтингом 7+ и выше
            </Radio>
            <Radio value="ZeroAdult" onClick={() => onRadioClick("ZeroAdult")}>
              Для детей (до 12+)
            </Radio>
            <Radio
              value="RussianLang"
              onClick={() => onRadioClick("RussianLang")}
            >
              Есть русский язык
            </Radio>
          </Space>
        </Radio.Group>
      </Space>
    </>
  );
}

export default function MovieFilters({ asPanel = false }) {
  const state = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  if (asPanel) {
    return (
      <div style={panelContainerStyle}>
        {<FiltersContent dispatch={dispatch} state={state} />}
      </div>
    );
  }

  return (
    <Layout.Sider width="300px" style={siderStyle}>
      <div style={panelHeaderStyle}>Фильтры</div>
      <FiltersContent dispatch={dispatch} state={state} />
    </Layout.Sider>
  );
}
