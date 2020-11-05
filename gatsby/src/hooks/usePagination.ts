import { useCallback, useMemo, useState } from 'react';

/**
 * Wraps paging logic,
 * Can be passed to Pagination component
 * Use slicedItems to get array of current page items
 */
const usePagination = <T extends unknown>(items: T[], pageSize = 10) => {
  const pageCount = Math.ceil(items.length / pageSize);
  const [currentPage, setCurrentPage] = useState(0);

  const handleChange = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex > pageCount - 1) {
        return;
      }
      setCurrentPage(newIndex);
    },
    [currentPage],
  );

  const slicedItems = useMemo(
    () => items.slice(currentPage * pageSize, (currentPage + 1) * pageSize),
    [currentPage, pageSize],
  );

  return {
    pageCount,
    currentPage,
    handleChange,
    slicedItems,
  };
};

export default usePagination;
