import { Layout, Switch } from "antd";

import SearchInput from "/src/components/common/Input/SearchInput.jsx";



export default function AppHeader({ onSearch }) {
  return (
    <Layout.Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <SearchInput onSearch={onSearch} />
      <Switch defaultChecked style={{ marginRight: "1rem" }} />
      <p style={{ color: "#fff" }}>Switch for local</p>
    </Layout.Header>
  );
}
