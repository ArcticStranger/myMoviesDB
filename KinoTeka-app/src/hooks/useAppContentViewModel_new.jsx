import useContentType from "./useContentType";
import useDataProcessor from "./useDataProcessor";

export default function useAppContentViewModel({
  database,
  forceFavorites = false,
}) {
  // 1. Определяем режим отображения и исходные данные
  const contentTypeData = useContentType({ database, forceFavorites });

  // 2. Применяем фильтры и сортировку
  const processedData = useDataProcessor(contentTypeData);

  return processedData;
}
