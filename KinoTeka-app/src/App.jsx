import { Layout } from "antd";
import AppHeader from "./components/Layout/AppHeader";
import AppContent from "./components/Layout/AppContent";
import AppSider from "./components/Layout/AppSider";
import AppFooter from "./components/Layout/AppFooter";

const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
};

function App() {
  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <Layout>
        <AppContent />
        <AppSider />
      </Layout>
      <AppFooter />
    </Layout>
  );
}

export default App;
