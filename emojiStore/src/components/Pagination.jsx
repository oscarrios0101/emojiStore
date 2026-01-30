import Button from "./ui/Button";

const Pagination = ({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <Button
        variant="secondary"
        onClick={prevPage}
        disabled={!hasPrevPage}
        className="min-w-[100px] px-4 py-2 text-sm"
      >
        Previous
      </Button>

      <span className="font-medium text-slate-100 tabular-nums">
        Page <span className="text-sky-400">{currentPage}</span> of {totalPages}
      </span>

      <Button
        variant="secondary"
        onClick={nextPage}
        disabled={!hasNextPage}
        className="min-w-[100px] px-4 py-2 text-sm"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
