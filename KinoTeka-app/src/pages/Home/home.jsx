import AppContent from "../../components/Layout/Content/AppContent";
import { useGetFilmInfoDefaults } from "../../hooks/useMovieInfo.jsx";

export const defaultMovies = [
  "The King's Speech",
  "The Hateful Eight",
  "Jojo Rabbit",
  "District 9",
  "The Green Mile",
  "Jobs",
  "Chappie",
  "Pacific Rim",
  "All Quiet on the Western Front",
  "Oldboy",
  "Rush Hour",
  "The Wild Robot",
  "Kung Fury",
  "Astartes",
  "The Hobbit: The Battle of the Five Armies",
  "The Intouchables",
  "TRON: Legacy",
  "Puss in Boots: The Last Wish",
  "1917",
  "Bridge of Spies",
];

export default function HomePage() {
  const def = useGetFilmInfoDefaults(defaultMovies);
  return <AppContent database={def} />;
}
