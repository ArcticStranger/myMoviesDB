// ====== DESIGN SYSTEM TOKENS ======
// Тёмная кинематографичная палитра "premium", как у современных продуктов

export const COLORS = {
  // Основные цвета - глубокая тёмная палитра
  primary: {
    text: "#e8eaf0",
    textMuted: "#98a1b3",
    background: {
      main: "#0a0d16",
      secondary: "#0f1320",
    },
    accent: {
      primary: "#6366f1", // Индиго
      secondary: "#8b5cf6", // Виолет
      tertiary: "#22d3ee", // Циан
      pink: "#ec4899",
      light: "rgba(99, 102, 241, 0.14)", // Лёгкий акцент для фона
    },
    gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
  },
  // Карточки - стеклянные, с тонкими границами
  card: {
    background:
      "linear-gradient(160deg, rgba(255, 255, 255, 0.055) 0%, rgba(255, 255, 255, 0.018) 100%)",
    solid: "#12161f",
    border: "rgba(255, 255, 255, 0.09)",
    borderHover: "rgba(99, 102, 241, 0.45)",
    shadow: {
      primary: "rgba(0, 0, 0, 0.45)",
      secondary: "rgba(0, 0, 0, 0.25)",
    },
    hover: {
      background:
        "linear-gradient(160deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.025) 100%)",
      border: "rgba(99, 102, 241, 0.55)",
      shadow: "rgba(99, 102, 241, 0.18)",
    },
  },
  // Рейтинги и интерактивные элементы
  rating: {
    active: "#fbbf24",
    background: "rgba(20, 24, 35, 0.72)",
    inactive: "rgba(148, 155, 175, 0.35)",
    good: "#34d399",
    mid: "#fbbf24",
    low: "#f87171",
  },
  // Дополнительные семантические цвета
  semantic: {
    success: "#34d399",
    warning: "#fbbf24",
    error: "#f87171",
    info: "#38bdf8",
  },
  // Нейтральные цвета
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#0f1320",
      100: "#171c2b",
      200: "#222a3d",
      300: "#303950",
      400: "#4b5569",
      500: "#6b7280",
      600: "#98a1b3",
      700: "#b9bfcd",
      800: "#d7dae3",
      900: "#e8eaf0",
    },
  },
};

export const SIZES = {
  // Карточки
  card: {
    minHeight: 590,
    borderRadius: 16,
    gap: 6,
  },
  // Сетка
  grid: {
    gap: 24,
    minColumnWidth: 272,
  },
  // Отступы - семантическая шкала
  spacing: {
    xs: 6,
    sm: 12,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    xxxl: 96,
  },
  // Текст
  text: {
    fontSize: 16,
    lineHeight: 1.55,
    starSize: 22,
  },
  // Тени
  shadow: {
    primary: "0 18px 44px",
    secondary: "0 4px 12px",
  },
  // Анимации
  transition: {
    duration: 0.22,
    properties: "transform, box-shadow, border-color, background",
  },
  // Скругления
  radius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    xxl: 22,
    full: "50%",
  },
  // Z-index
  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 20,
    modal: 100,
    tooltip: 200,
  },
};

export const FONTS = {
  primary: "'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif",
  secondary: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  mono: "'Fira Code', 'Monaco', 'Consolas', monospace",
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  size: {
    "xs": 12,
    "sm": 14,
    "base": 16,
    "lg": 18,
    "xl": 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
  },
};

// ====== HELPER FUNCTIONS ======

// Получить цвет из нейтральной палитры
export const getGray = (shade) => COLORS.neutral.gray[shade];

// Рейтинг в цвет для бейджа
export const ratingColor = (value) => {
  const rating = Number.parseFloat(value);
  if (Number.isNaN(rating)) return "#94a3b3";
  if (rating >= 7.5) return COLORS.rating.good;
  if (rating >= 6) return COLORS.rating.mid;
  return COLORS.rating.low;
};

// Создать тень с кастомным цветом
export const createShadow = (color, opacity = 0.1) =>
  `0 18px 44px ${color}${Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0")}`;

// Создать переход с кастомными свойствами
export const createTransition = (
  properties = SIZES.transition.properties,
  duration = SIZES.transition.duration
) => `${properties} ${duration}s ease`;

// Получить отступ
export const getSpacing = (size) => SIZES.spacing[size];

// ====== BREAKPOINTS ======
export const BREAKPOINTS = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1280px",
  xl: "1536px",
};

// ====== MEDIA QUERIES ======
export const mediaQueries = {
  xs: `@media (max-width: ${BREAKPOINTS.xs})`,
  sm: `@media (max-width: ${BREAKPOINTS.sm})`,
  md: `@media (max-width: ${BREAKPOINTS.md})`,
  lg: `@media (max-width: ${BREAKPOINTS.lg})`,
  xl: `@media (max-width: ${BREAKPOINTS.xl})`,
};
