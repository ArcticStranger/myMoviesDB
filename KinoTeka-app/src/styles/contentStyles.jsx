import { COLORS, SIZES, FONTS } from "./designTokens.js";

// ====== COMPONENT STYLES ======
export const contentStyle = {
  minHeight: "calc(100vh - 90px)",
  lineHeight: "normal",
  color: COLORS.primary.text,
  paddingBottom: SIZES.spacing.xxxl,
  background: `linear-gradient(135deg, ${COLORS.primary.background.main} 0%, ${COLORS.primary.background.secondary} 100%)`,
};

export const textStyle = {
  color: COLORS.primary.text,
  fontFamily: FONTS.primary,
  fontWeight: FONTS.weight.medium,
  fontSize: SIZES.text.fontSize,
  whiteSpace: "pre-wrap",
  lineHeight: SIZES.text.lineHeight,
  width: "100%",
  textAlign: "left",
  padding: `0 ${SIZES.spacing.lg} ${SIZES.spacing.lg}`,
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
  background: COLORS.card.background,
  border: `1px solid ${COLORS.card.border}`,
  boxShadow: `${SIZES.shadow.primary} ${COLORS.card.shadow.primary}, ${SIZES.shadow.secondary} ${COLORS.card.shadow.secondary}`,
  transition: `${SIZES.transition.properties} ${SIZES.transition.duration}s ease`,
};

export const filmsGrid = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${SIZES.grid.minColumnWidth}px, 1fr))`,
  gap: `${SIZES.grid.gap}px`,
  padding: `${SIZES.spacing.sm} ${SIZES.spacing.md} ${SIZES.spacing.xxl}`,
  alignItems: "stretch",
};

export const starStyle = {
  fontSize: SIZES.text.starSize,
  color: COLORS.rating.active,
};
