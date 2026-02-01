import { Input } from "antd";
const { Search } = Input;
import SearchTrigger from "../../../hooks/searchTrigger.jsx"

const onSearch = (value, _e, info) => console.log(info?.source, value, "bruh");


export default function SearchInput() {

  return (
    <Search
      placeholder="input search text"
      style={{ maxWidth: "30vh", marginRight: "3rem" }}
      onSearch={onSearch}
      trigger={SearchTrigger(onSearch)}
      size="large"
      enterButton
    />
  );
}
