export const contentStyle = {
  minHeight: "calc(100vh - 90px)",
  lineHeight: "120px",
  color: "rgb(37, 37, 51)",
  backgroundColor: "#ffffff",
};

export const textStyle = {
  color: "#342d2d",
  fontFamily: "Inter",
  fontWeight: 700,
  fontSize: 20,
  whiteSpace: "pre-wrap",
  lineHeight: 1.4,
  width: 250,
  textAlign: "left",
};

export const filmCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  backgroundColor: "#bccd28",
  width: 300,
  minHeight: 580,
  borderRadius: 20,
};

export const posterStyle = (isHovered) => ({
  width: 250,
  marginBottom: 20,
  marginTop: 20,
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  transform: isHovered ? "scale(1.05)" : "scale(1)",
  boxShadow: isHovered ? "0 10 25px rgba(0,0,0,0.25)" : "none",
  cursor: "pointer",
});

export const filmsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
};
