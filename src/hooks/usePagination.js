import { useMemo } from 'react';

// Функция для вычисления количества страниц с проверкой на NaN и undefined
export const getPageCount = (totalCount, limit) => {
  if (isNaN(totalCount) || totalCount === undefined || isNaN(limit) || limit === undefined || limit === 0) {
    return 0;
  }
  return Math.ceil(totalCount / limit);
}

// Функция для создания массива страниц с проверкой на NaN и undefined
export const getPagesArray = (totalPages) => {
  if (isNaN(totalPages) || totalPages === undefined) {
    return [];
  }
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
}

// Кастомный хук usePages для работы с пагинацией
export const usePages = (totalCount, limit) => {
  // Используем useMemo для вычисления и кэширования значений
  const pageCount = useMemo(() => {
    return getPageCount(totalCount, limit);
  }, [totalCount, limit]);

  const pagesArray = useMemo(() => {
    return getPagesArray(pageCount);
  }, [pageCount]);

  return { pageCount, pagesArray };
}
