import ReactPaginate from 'react-paginate';
import {ChangePageData} from '../interfaces/IEvent'

interface PaginationProps {
  changePage(event: ChangePageData): void
  totalPages: number
}

function Pagination({changePage, totalPages}: PaginationProps) {
  return (
    <div >
         <>
        <ReactPaginate
           pageClassName='bg-lime-400 p-2 w-12 h-12 rounded-full text-center'
           pageLinkClassName='font-bold text-lime-900 text-lg align-bottom'
           previousClassName='bg-lime-400 p-2 w-12 h-12 rounded-full mr-4 text-center'
           previousLinkClassName='font-bold text-lime-900 text-lg p-2  w-12 h-12'
           nextClassName='bg-lime-400 p-2 w-12 h-12 rounded-full ml-4 text-center'
           nextLinkClassName=' bg-lime-400 font-bold text-lime-900 text-lg p-2  w-12 h-12'
           marginPagesDisplayed={2}
           containerClassName='flex mt-5 gap-0.5'
           activeClassName='bg-lime-200'
           activeLinkClassName='font-bold text-lime-900 text-lg'
           breakClassName='bg-lime-400 p-2 w-12 h-12 rounded-full text-center'
          breakLabel="..."
          nextLabel=">"
          onPageChange={changePage}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    </div>
  );
}

export default Pagination;