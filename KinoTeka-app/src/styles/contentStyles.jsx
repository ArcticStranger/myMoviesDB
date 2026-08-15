import { COLORS, SIZES, FONTS } from "./designTokens.js";

// ====== LAYOUT ======
export const contentStyle = {
  minHeight: "calc(100vh - 90px)",
  lineHeight: "normal",
  color: COLORS.primary.text,
  paddingBottom: SIZES.spacing.xxxl,
};

// ====== CARDS ======
export const textStyle = {
  color: COLORS.primary.text,
  fontFamily: FONTS.secondary,
  fontWeight: FONTS.weight.normal,
  fontSize: SIZES.text.fontSize,
  lineHeight: SIZES.text.lineHeight,
  width: "100%",
  textAlign: "left",
};

export const filmCard = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "flex-start",
  gap: `${SIZES.card.gap}px`,
  width: "100%",
  minHeight: SIZES.card.minHeight,
  borderRadius: SIZES.card.borderRadius,
  overflow: "hidden",
  background: COLORS.card.solid,
  border: `1px solid ${COLORS.card.border}`,
  boxShadow: `${SIZES.shadow.primary} ${COLORS.card.shadow.primary}, ${SIZES.shadow.secondary} ${COLORS.card.shadow.secondary}`,
  transition: `${SIZES.transition.properties} ${SIZES.transition.duration}s ease`,
};

export const filmsGrid = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${SIZES.grid.minColumnWidth}px, 1fr))`,
  gap: `${SIZES.grid.gap}px`,
  padding: `${SIZES.spacing.xl} ${SIZES.spacing.xl} ${SIZES.spacing.xxl}`,
  alignItems: "stretch",
};

export const starStyle = {
  fontSize: SIZES.text.starSize,
  color: COLORS.rating.active,
};
