import { useEffect, useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import PodcastCard from "../../components/home/PodcastCard";
import topPodcastData from "../../data/topPodcasts.json";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";

const Episodes = () => {
  const { scrollToTop } = useAppContext();
  const [podcastDataPag, setpodcastDataPag] = useState([]);
  useEffect(() => {
    setpodcastDataPag(topPodcastData);
  }, [topPodcastData]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 9;
  const pagesVisited = pageNumber * rowPerPage;

  const displayPodcasts = podcastDataPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      return <PodcastCard key={index} item={item} index={index} />;
    });

  const pageCount = Math.ceil(podcastDataPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };

  return (
    <>
      <Header />
      <main>
        <div className="w-full h-[200px] bg-primary1/90 center-flex">
          <h2 className="text-white">All Episodes</h2>
        </div>
        <section className="pb-[100px] min-h-screen ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-14 gap-5">
            {displayPodcasts}
          </div>
          {podcastDataPag?.length > 9 && (
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
      </main>
      <Footer />
    </>
  );
};

export default Episodes;
