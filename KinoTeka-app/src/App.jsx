import { Layout } from "antd";
import AppHeader from "./components/Layout/Header/AppHeader";
import AppContent from "./components/Layout/Content/AppContent";
import AppSider from "./components/Layout/Sidebar/AppSider";
import AppFooter from "./components/Layout/Footer/AppFooter";

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
