import { Layout } from "antd";
import { GithubOutlined, WindowsFilled } from "@ant-design/icons";

import { hrefStyle, footerStyle } from "./FooterItems";

export default function AppFooter() {
  return (
    <Layout.Footer style={footerStyle}>
      <a href="https://github.com/ArcticStranger" style={hrefStyle}>
        Мой Github
        <GithubOutlined
          style={{
            fontSize: 30,
            justifyContent: "center",
            marginLeft: 10,
            marginRight: 40,
          }}
        />
      </a>

      <a href="mailto:atlasovtimofey@hotmail.com" style={hrefStyle}>
        Напишите мне на почту
        <WindowsFilled
          style={{
            fontSize: 30,
            justifyContent: "center",
            marginLeft: 10,
            marginRight: 50,
          }}
        />
      </a>
      <p style={hrefStyle}>
        @2025-2026 non-trademarked, cuz it's 4fun & demonstrate skills ;D
      </p>
    </Layout.Footer>
  );
}
