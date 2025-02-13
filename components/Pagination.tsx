interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
  }
  
  export default function Pagination({ currentPage, totalPages, onNext, onPrev }: PaginationProps) {
    return (
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={onPrev}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
        >
          Previous
        </button>
  
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
  
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-gray-200 rounded ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'
          }`}
        >
          Next
        </button>
      </div>
    );
  } 
  