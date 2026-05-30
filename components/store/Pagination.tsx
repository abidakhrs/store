interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 pt-12 border-t border-zinc-100 dark:border-zinc-900">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-white dark:border-zinc-800 dark:bg-[#0d0d0d] dark:text-zinc-300 dark:hover:bg-zinc-900"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          const isSelected = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`h-8 w-8 rounded-xl text-xs font-medium transition-all ${
                isSelected
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 transition hover:bg-zinc-50 disabled:opacity-40 disabled:hover:bg-white dark:border-zinc-800 dark:bg-[#0d0d0d] dark:text-zinc-300 dark:hover:bg-zinc-900"
      >
        Next
      </button>
    </div>
  );
}