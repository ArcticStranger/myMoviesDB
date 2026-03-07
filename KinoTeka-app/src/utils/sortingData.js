export default function sortingData({ year, alphabet, database, keyword }) {
  if (!Array.isArray(database)) return [];

  const parseYear = (value) => {
    const num = Number.parseInt(value, 10);
    return Number.isNaN(num) ? 0 : num;
  };

  const byYear = (a, b) => parseYear(a.Year) - parseYear(b.Year);

  const byTitleAsc = (a, b) => {
    const titleA = String(a?.Title ?? "");
    const titleB = String(b?.Title ?? "");
    return titleA.localeCompare(titleB, "en", { sensitivity: "base" });
  };

  const combinedSort = (a, b) =>
    (year ? byYear(a, b) : 0) || (alphabet ? byTitleAsc(a, b) : 0);

  const keywordValue = String(keyword ?? "").toLowerCase();
  const matchesKeyword = (movie) => {
    if (!keywordValue) return true;
    return Object.values(movie).some((value) => {
      if (value == null) return false;
      return String(value).toLowerCase().includes(keywordValue);
    });
  };

  const baseDatabase = database.filter((movie) => {
    return matchesKeyword(movie);
  });

  const sortedDatabase =
    year || alphabet ? [...baseDatabase].sort(combinedSort) : baseDatabase;

  return sortedDatabase;
}
