import React from "react";

const Pagination = ({ repos, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(repos / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div>
      <ul className="flex justify-center items-center list-none w-full gap-4">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "flex justify-center items-center w-8 h-6 border-solid bg-purple text-white rounded-2xl shadow-lg"
                : "flex justify-center items-center w-8 h-6 border-solid rounded-2xl shadow-lg"
            }>
            <a className="cursor-pointer" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
