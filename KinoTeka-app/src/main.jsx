import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from "antd";

import "./index.css";
import "./styles/theme.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./components/redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: antdTheme.darkAlgorithm,
          token: {
            colorPrimary: "#6366f1",
            colorBgBase: "#0a0d16",
            colorBgContainer: "#12161f",
            colorBgElevated: "#171c2b",
            colorBorder: "rgba(255, 255, 255, 0.12)",
            colorText: "#e8eaf0",
            colorTextSecondary: "#98a1b3",
            borderRadius: 10,
            fontFamily:
              "'Inter', 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif",
          },
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
