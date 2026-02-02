import { useState, useEffect } from "react";
import { Layout } from "antd";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

export default function AppSider() {
  const [loading, setLoading] = useState(false);
  const [crypto, setCrypto] = useState([]);
  const [assets, setAssets] = useState([]);

  return (
    <Layout.Sider width="25%" style={siderStyle}>
      {assets.map((asset) => {})}
    </Layout.Sider>
  );
}
