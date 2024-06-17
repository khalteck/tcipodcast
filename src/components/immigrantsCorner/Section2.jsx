import { FaYoutube } from "react-icons/fa";
import immigrantsCornerData from "../../data/immigrantsCorner.json";
import ImmigrantsCornerCard from "./ImmigrantsCornerCard";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";

const Section2 = () => {
  const { handleScrollTo } = useAppContext();
  const [immigrantsCornerDataPag, setimmigrantsCornerDataPag] = useState([]);
  useEffect(() => {
    setimmigrantsCornerDataPag(immigrantsCornerData);
  }, [immigrantsCornerData]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 4;
  const pagesVisited = pageNumber * rowPerPage;

  const displayImmigrantsCorner = immigrantsCornerDataPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      const isOdd = (index + 1) % 2 === 1;
      return <ImmigrantsCornerCard key={index} item={item} isOdd={isOdd} />;
    });

  const pageCount = Math.ceil(immigrantsCornerDataPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    handleScrollTo("immigrants-container");
  };

  return (
    <div className="w-full bg-secondary2 text-white pb-[80px] pt-10 md:pt-0">
      <section className="w-full">
        <h3 className="text-center mb-5">Catch The Latest</h3>
        <p className="w-full mx-auto text-[1.1rem] mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <div
        id="immigrants-container"
        className="w-full max-w-[1550px] mx-auto lg:px-14"
      >
        {displayImmigrantsCorner}

        {immigrantsCornerDataPag?.length > rowPerPage && (
          <div className="w-full flex justify-center mt-10">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              subContainerClassName={"immigrants corner pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
