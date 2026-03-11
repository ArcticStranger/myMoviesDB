const FAVORITES_KEY = "favorite_films";

function readFavorites() {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to read favorites from localStorage:", error);
    return [];
  }
}

function writeFavorites(favorites) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.warn("Failed to write favorites to localStorage:", error);
  }
}

export { readFavorites, writeFavorites };
