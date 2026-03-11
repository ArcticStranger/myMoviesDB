// ====== DESIGN SYSTEM TOKENS ======
// Централизованная палитра и размеры для всего приложения

export const COLORS = {
  // Основные цвета - теплая, уютная палитра
  primary: {
    text: "#2c3e50", // Более мягкий темно-синий, лучше читается
    background: {
      main: "#fefefe", // Чистый белый с теплым оттенком
      secondary: "#f8f9fa", // Легкий серый для глубины
    },
    accent: {
      primary: "#e67e22", // Теплый апельсин
      secondary: "#f39c12", // Золотистый
      light: "rgba(230, 126, 34, 0.1)", // Легкий акцент для фона
    },
  },
  // Карточки - минималистичные и элегантные
  card: {
    background:
      "linear-gradient(145deg, #ffffff 0%, #fafbfc 50%, #f5f6f8 100%)",
    border: "rgba(52, 73, 94, 0.08)",
    shadow: {
      primary: "rgba(52, 73, 94, 0.1)",
      secondary: "rgba(52, 73, 94, 0.05)",
    },
    hover: {
      background:
        "linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #f1f3f4 100%)",
      border: "rgba(52, 73, 94, 0.12)",
      shadow: "rgba(52, 73, 94, 0.15)",
    },
  },
  // Рейтинги и интерактивные элементы
  rating: {
    active: "#f39c12", // Золотистый для звезд
    inactive: "rgba(189, 195, 199, 0.3)", // Нейтральный для неактивных
  },
  // Дополнительные семантические цвета
  semantic: {
    success: "#27ae60",
    warning: "#f39c12",
    error: "#e74c3c",
    info: "#3498db",
  },
  // Нейтральные цвета
  neutral: {
    white: "#ffffff",
    black: "#000000",
    gray: {
      50: "#f8f9fa",
      100: "#e9ecef",
      200: "#dee2e6",
      300: "#ced4da",
      400: "#adb5bd",
      500: "#6c757d",
      600: "#495057",
      700: "#343a40",
      800: "#212529",
      900: "#2c3e50",
    },
  },
};

export const SIZES = {
  // Карточки
  card: {
    minHeight: 620,
    borderRadius: 22,
    gap: 6,
  },
  // Сетка
  grid: {
    gap: 22,
    minColumnWidth: 280,
  },
  // Отступы - семантическая шкала
  spacing: {
    xs: 6,
    sm: 12,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    xxxl: 110,
  },
  // Текст
  text: {
    fontSize: 16,
    lineHeight: 1.55,
    starSize: 25,
  },
  // Тени
  shadow: {
    primary: "0 12px 34px",
    secondary: "0 2px 8px",
  },
  // Анимации
  transition: {
    duration: 0.24,
    properties: "transform, box-shadow, border-color",
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

// Создать тень с кастомным цветом
export const createShadow = (color, opacity = 0.1) =>
  `0 12px 34px ${color}${Math.round(opacity * 255)
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
