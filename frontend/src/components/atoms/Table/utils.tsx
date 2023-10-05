export const generatePaginationRange = (
  currentPage: number,
  lastPage: number,
  delta = 3
): (string | number)[] => {
  const range: number[] = Array(lastPage)
    .fill(undefined)
    .map((_, index) => index + 1);

  return range.reduce((pages: (number | string)[], page: number) => {
    if (page === 1 || page === lastPage) {
      return [...pages, page];
    }

    if (page - delta + 1 <= currentPage && page + delta - 3 >= currentPage) {
      return [...pages, page];
    }

    if (pages[pages.length - 1] !== '...') {
      return [...pages, '...'];
    }

    return pages;
  }, []);
};
