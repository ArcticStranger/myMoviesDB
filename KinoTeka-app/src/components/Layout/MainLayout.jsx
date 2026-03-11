import { Layout } from "antd";
import { contentStyle } from "../../styles/contentStyles.jsx";
import AppRoutes from "./AppRoutes.jsx";

export default function MainLayout({ children }) {
  return (
    <Layout style={{ marginTop: 64 }}>
      <Layout.Content style={contentStyle}>
        <AppRoutes />
      </Layout.Content>
      {children}
    </Layout>
  );
}
