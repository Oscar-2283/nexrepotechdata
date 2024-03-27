function Pagination({ page, setPage, totalCount, itemsPerPage }: { page: number, setPage: Function, totalCount: number, itemsPerPage: number }) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const nextPage = () => {
      setPage(page + 1 > totalPages ? totalPages : page + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevPage = () => {
      setPage(page - 1 < 1 ? 1 : page - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <div className="flex gap-5">
          <button onClick={prevPage} disabled={page === 1}>上一頁</button>
          <span>Page {page} of {totalPages}</span>
          <button onClick={nextPage} disabled={page === totalPages}>下一頁</button>
      </div>
  );
}

export default Pagination;
