import { Input } from "antd";
const { Search } = Input;

import searchReducer from "../../redux/partReducers/searchReducer";

export default function SearchInput({ onSearch }) {
  
  return (
    <Search
      placeholder="Введите название фильма"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      onSearch={onSearch}
      size="large"
      enterButton
    />
  );
}
