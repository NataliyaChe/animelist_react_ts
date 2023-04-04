import ReactPaginate from 'react-paginate';

// interface PaginationProps extends ChangePageData {
//   // changePage: () => void
//   totalPages: number
// }

function Pagination({changePage, totalPages}: any) {
  return (
    <div >
         <>
        <ReactPaginate
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item previous"
           previousLinkClassName="page-link previous-link"
           nextClassName="page-item next"
           nextLinkClassName="page-link next-link"
           marginPagesDisplayed={2}
           containerClassName="pagination"
           activeClassName="active"
           activeLinkClassName="active-link"
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