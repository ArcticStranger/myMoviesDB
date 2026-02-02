import { Layout, Switch } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import bruh from "../../controller/apiRequest";
import SearchInput from "/src/components/common/Input/SearchInput.jsx";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

bruh();
export default function AppHeader({ onSearch }) {
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <SearchInput onSearch={onSearch} />
      <Switch
        defaultChecked
        onChange={onChange}
        style={{ marginRight: "1rem" }}
      />
      <p style={{ color: "#fff" }}>Switch for local</p>
    </Layout.Header>
  );
}
