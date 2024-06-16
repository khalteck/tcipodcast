import ReactPaginate from "react-paginate";

const Section3 = ({
  displayPodcasts,
  podcastDataPag,
  rowPerPage,
  pageCount,
  changePage,
}) => {
  return (
    <div className="w-full bg-secondary py-[80px] md:pt-[80px]">
      <section className="pb-[100px]">
        <h3 className="text-center mb-10 text-secondary2">All Episodes</h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {displayPodcasts}
        </div>
        {podcastDataPag?.length > rowPerPage && (
          <div className="w-full flex justify-center mt-10">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              subContainerClassName={"podcast pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default Section3;
