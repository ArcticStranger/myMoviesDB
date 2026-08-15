import { Input } from "antd";
import useSearch from "../../../hooks/useSearch.jsx";

const { Search } = Input;

export default function SearchInput() {
  const search = useSearch();

  return (
    <Search
      placeholder="Поиск фильмов, сериалов..."
      className="app-search"
      value={search.searchInput}
      onChange={(e) => search.setSearchInput(e.target.value)}
      onSearch={() => search.handleSearch()}
      size="large"
      allowClear
    />
  );
}
