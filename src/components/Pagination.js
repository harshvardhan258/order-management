import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPage ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div style={{ marginTop: "18px" }}>
      <button
        className={currentPage === 1 ? "disabled" : ""}
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {renderPages()}
      <button
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
