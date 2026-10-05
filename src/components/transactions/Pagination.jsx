import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = () => {
  return (
    <>
      {/* Pagination */}
      <div className="pagination flex justify-end items-center gap-2 mt-6">

        <button className="pagination-prev flex items-center gap-1 text-emerald-600 text-sm cursor-pointer">
          <ChevronLeft className="pagination-arrow" size={16} />
          Previous
        </button>

        <button className="pagination-number pagination-active w-9 h-9 rounded-lg bg-emerald-600 text-white font-semibold cursor-pointer">
          1
        </button>

        <button className="pagination-number w-9 h-9 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer">
          2
        </button>

        <button className="pagination-number w-9 h-9 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer">
          3
        </button>

        <button className="pagination-number w-9 h-9 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer">
          4
        </button>

        <button className="pagination-next flex items-center gap-1 text-emerald-600 text-sm cursor-pointer">
          Next
          <ChevronRight className="pagination-arrow" size={16} />
        </button>

      </div>
    </>
  );
};

export default Pagination;