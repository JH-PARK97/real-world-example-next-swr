import React from "react";

const Pagination = ({ limit, articlesCount, clickPageButton }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(articlesCount / limit); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <button
            className={"page-link"}
            onClick={() => {
              clickPageButton(number);
            }}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
