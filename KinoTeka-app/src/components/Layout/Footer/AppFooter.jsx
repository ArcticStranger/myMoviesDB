import { Layout } from "antd";
import { GithubOutlined, WindowsFilled } from "@ant-design/icons";

import { footerStyle, hrefStyle } from "./FooterItems";
import { myGithubStyle, emailStyle } from "../../../styles/footerStyles";

export default function AppFooter() {
  return (
    <Layout.Footer className="app-footer" style={footerStyle}>
      <div className="app-footer__group">
        <a href="https://github.com/ArcticStranger" style={hrefStyle}>
          GitHub
          <GithubOutlined style={myGithubStyle} />
        </a>
        <a href="mailto:atlasovtimofey@hotmail.com" style={hrefStyle}>
          Написать на почту
          <WindowsFilled style={emailStyle} />
        </a>
      </div>
      <span className="app-footer__copyright">
        © 2025–2026 KinoTeka. Учебный проект.
      </span>
    </Layout.Footer>
  );
}
