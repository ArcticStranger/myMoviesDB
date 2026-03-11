import {
  COLORS,
  SIZES,
  FONTS,
  getGray,
  createTransition,
  createShadow,
} from "../styles/designTokens.js";

// Пример стилей для кнопок с использованием дизайн-системы
export const buttonStyles = {
  primary: {
    "backgroundColor": COLORS.primary.accent.primary,
    "color": COLORS.neutral.white,
    "fontFamily": FONTS.primary,
    "fontWeight": FONTS.weight.medium,
    "fontSize": FONTS.size.base,
    "padding": `${SIZES.spacing.sm}px ${SIZES.spacing.xl}px`,
    "borderRadius": SIZES.radius.md,
    "border": "none",
    "cursor": "pointer",
    "transition": createTransition(),

    "&:hover": {
      backgroundColor: COLORS.primary.accent.secondary,
      transform: "translateY(-2px)",
      boxShadow: createShadow(COLORS.primary.accent.primary, 0.2),
    },

    "&:active": {
      transform: "translateY(0)",
    },
  },

  secondary: {
    "backgroundColor": "transparent",
    "color": COLORS.primary.text,
    "fontFamily": FONTS.primary,
    "fontWeight": FONTS.weight.medium,
    "fontSize": FONTS.size.base,
    "padding": `${SIZES.spacing.sm}px ${SIZES.spacing.xl}px`,
    "borderRadius": SIZES.radius.md,
    "border": `2px solid ${getGray(300)}`,
    "cursor": "pointer",
    "transition": createTransition(),

    "&:hover": {
      borderColor: COLORS.primary.accent.primary,
      color: COLORS.primary.accent.primary,
      backgroundColor: COLORS.primary.accent.light,
    },
  },
};

// Пример стилей для формы
export const formStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: SIZES.spacing.md,
    padding: SIZES.spacing.xl,
    backgroundColor: COLORS.neutral.white,
    borderRadius: SIZES.radius.xl,
    boxShadow: `${SIZES.shadow.primary} ${COLORS.card.shadow.primary}`,
  },

  input: {
    "fontFamily": FONTS.primary,
    "fontSize": FONTS.size.base,
    "padding": `${SIZES.spacing.sm}px ${SIZES.spacing.md}px`,
    "borderRadius": SIZES.radius.md,
    "border": `1px solid ${getGray(300)}`,
    "backgroundColor": COLORS.neutral.white,
    "color": COLORS.primary.text,
    "transition": createTransition("border-color, box-shadow"),

    "&:focus": {
      outline: "none",
      borderColor: COLORS.primary.accent.primary,
      boxShadow: `0 0 0 3px ${COLORS.primary.accent.light}`,
    },

    "&::placeholder": {
      color: getGray(400),
    },
  },

  label: {
    fontFamily: FONTS.primary,
    fontSize: FONTS.size.sm,
    fontWeight: FONTS.weight.medium,
    color: COLORS.primary.text,
    marginBottom: SIZES.spacing.xs,
  },
};

// Пример адаптивных стилей
export const responsiveStyles = {
  card: {
    "width": "100%",
    "padding": SIZES.spacing.lg,
    "backgroundColor": COLORS.neutral.white,
    "borderRadius": SIZES.radius.xl,
    "boxShadow": `${SIZES.shadow.secondary} ${COLORS.card.shadow.secondary}`,

    // Мобильная версия
    "@media (max-width: 768px)": {
      padding: SIZES.spacing.md,
      borderRadius: SIZES.radius.lg,
    },

    // Планшетная версия
    "@media (max-width: 1024px)": {
      padding: SIZES.spacing.lg,
    },
  },
};
