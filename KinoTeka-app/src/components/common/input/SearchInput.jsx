import { Input } from "antd";
const { Search } = Input;
import useSearch from "../../../hooks/useSearch.jsx"

export default function SearchInput() {
  const search = useSearch();
  return (
    <Search
      placeholder="Введите название фильма"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      value={search.text}
      onChange={search.onChange}
      onSearch={search.onSearch}
      size="large"
      allowClear
    />
  );
}
