import { Typography } from "antd";
import { plotTitleStyle, plotTextStyle } from "../Styles/movieDescStyles";

export default function PlotSection({ plot }) {
  return (
    <section>
      <Typography.Text style={plotTitleStyle}>Краткое описание</Typography.Text>
      <div className="movie-desc__plot">
        <Typography.Paragraph style={{ ...plotTextStyle, marginBottom: 0 }}>
          {plot}
        </Typography.Paragraph>
      </div>
    </section>
  );
}
