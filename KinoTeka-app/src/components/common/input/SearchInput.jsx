import { Input } from "antd";
const { Search } = Input;

export default function SearchInput({ onSearch }) {
  return (
    <Search
      placeholder="input search text"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      onSearch={onSearch}
      size="large"
      enterButton
    />
  );
}
