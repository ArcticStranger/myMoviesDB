import { Typography } from "antd";
import { plotTitleStyle, plotTextStyle } from "../Styles/movieDescStyles";

export default function PlotSection({ plot }) {
  return (
    <>
      <Typography.Text style={plotTitleStyle}>
        Краткое описание:
      </Typography.Text>
      <Typography.Text style={plotTextStyle}>{plot}</Typography.Text>
    </>
  );
}
