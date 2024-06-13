import { useEffect, useState } from "react";
import PodcastCardAdmin from "./PodcastCardAdmin";
import ReactPaginate from "react-paginate";
import CommunityCard from "./CommunityCard";
import { useAppContext } from "../../contexts/AppContext";

const PaginatedList = ({ data, type }) => {
  const { scrollToTop } = useAppContext();

  const [itemDataPag, setitemDataPag] = useState([]);
  useEffect(() => {
    setitemDataPag(data);
  }, [data]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 5;
  const pagesVisited = pageNumber * rowPerPage;

  const displayItems = itemDataPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      return type === "podcast" ? (
        <PodcastCardAdmin key={index} item={item} index={index} />
      ) : (
        <CommunityCard key={index} item={item} />
      );
    });

  const pageCount = Math.ceil(itemDataPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };

  // to fetch data
  // const { isLoading: loadingInfo, data: infoData } = useFetchInitialCommunityQuery();

  return (
    <div>
      <div className="w-full bg-neutral-100 flex flex-col gap-2 md:p-3 py-2">
        {displayItems}
      </div>
      {itemDataPag?.length > rowPerPage && (
        <div className="w-full flex justify-center my-5">
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
    </div>
  );
};

export default PaginatedList;
