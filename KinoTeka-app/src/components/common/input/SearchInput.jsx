import { Input } from "antd";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function SearchInput() {
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
