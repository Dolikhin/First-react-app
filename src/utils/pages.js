export const getPageCount = (totalCount, limit) => {
  if (isNaN(totalCount) || totalCount === undefined || isNaN(limit) || limit === undefined || limit === 0) {
    return 0;
  }
  return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
  if (isNaN(totalPages) || totalPages === undefined) {
    return [];
  }
  let result = []
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
    
  }
  return result;
}