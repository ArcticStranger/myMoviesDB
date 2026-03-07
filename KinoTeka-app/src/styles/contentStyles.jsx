export const contentStyle = {
  minHeight: "calc(100vh - 90px)",
  lineHeight: "normal",
  color: "rgb(37, 37, 51)",
  paddingBottom: 110,
  background:
    "radial-gradient(circle at 18% 18%, rgba(255, 194, 72, 0.15), transparent 28%), radial-gradient(circle at 82% 12%, rgba(38, 186, 164, 0.14), transparent 34%), linear-gradient(180deg, #f8fbff 0%, #f3f6f9 100%)",
};

export const textStyle = {
  color: "#24343f",
  fontFamily: "'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif",
  fontWeight: 500,
  fontSize: 16,
  whiteSpace: "pre-wrap",
  lineHeight: 1.55,
  width: "100%",
  textAlign: "left",
  padding: "0 18px 18px",
};

export const filmCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: "6px",
  width: "100%",
  minHeight: 620,
  borderRadius: 22,
  overflow: "hidden",
  background:
    "linear-gradient(158deg, rgba(255, 248, 236, 0.95) 0%, rgba(251, 254, 255, 0.98) 52%, rgba(230, 249, 247, 0.95) 100%)",
  border: "1px solid rgba(60, 84, 102, 0.14)",
  boxShadow:
    "0 12px 34px rgba(17, 38, 58, 0.14), 0 2px 8px rgba(17, 38, 58, 0.08)",
  transition:
    "transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease",
};

export const filmsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "22px",
  padding: "12px 16px 28px",
  alignItems: "stretch",
};

export const starStyle = {
  fontSize: 25,
  color: "#ec5f41",
};
