export const paginate = (repos, pageNumber, pageSize) => {
 const startIndex = (pageNumber - 1) * pageSize;
 return repos.slice(startIndex, startIndex + pageSize);
};