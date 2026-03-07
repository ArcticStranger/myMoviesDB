import { Layout } from "antd";
import { GithubOutlined, WindowsFilled } from "@ant-design/icons";

import { hrefStyle, footerStyle } from "./FooterItems";
import { myGithubStyle, emailStyle } from "../../../styles/footerStyles";

export default function AppFooter() {
  return (
    <Layout.Footer style={footerStyle}>
      <a href="https://github.com/ArcticStranger" style={hrefStyle}>
        Мой Github
        <GithubOutlined style={myGithubStyle} />
      </a>

      <a href="mailto:atlasovtimofey@hotmail.com" style={hrefStyle}>
        Напишите мне на почту
        <WindowsFilled style={emailStyle} />
      </a>
      <p style={hrefStyle}>
        @2025-2026 non-trademarked, cuz it's 4fun & demonstrate skills ;D
      </p>
    </Layout.Footer>
  );
}
