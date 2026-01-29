import React from "react";
import Button from "./ui/Button";

const Pagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  goToPage,
  nextPage,
  prevPage,
}) => {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show around current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-6">
      <Button
        variant="secondary"
        onClick={prevPage}
        disabled={!hasPrevPage}
        className="px-4 py-2"
      >
        Previous
      </Button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-2 py-1 text-slate-400">...</span>
            ) : (
              <Button
                variant={currentPage === page ? "success" : "secondary"}
                onClick={() => goToPage(page)}
                className={`min-w-[36px] px-2 py-1 ${currentPage === page ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                {page}
              </Button>
            )}
          </React.Fragment>
        ))}
      </div>

      <Button
        variant="secondary"
        onClick={nextPage}
        disabled={!hasNextPage}
        className="px-4 py-2"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
