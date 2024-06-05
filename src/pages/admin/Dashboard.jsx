import { useEffect, useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import topPodcastData from "../../data/topPodcasts.json";
import ReactPaginate from "react-paginate";
import { useAppContext } from "../../contexts/AppContext";
import ScrollToTop from "../../ScrollToTop";
import getTimeOfDay from "../../utils/getTimeOfDay";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa6";
import PodcastCardAdmin from "../../components/admin/PodcastCardAdmin";

const Dashboard = () => {
  const { scrollToTop } = useAppContext();
  const [podcastDataPag, setpodcastDataPag] = useState([]);
  useEffect(() => {
    setpodcastDataPag(topPodcastData);
  }, [topPodcastData]);

  const [pageNumber, setPageNumber] = useState(0);

  const rowPerPage = 5;
  const pagesVisited = pageNumber * rowPerPage;

  const displayPodcasts = podcastDataPag
    ?.slice(pagesVisited, pagesVisited + rowPerPage)
    ?.map((item, index) => {
      return <PodcastCardAdmin key={index} item={item} index={index} />;
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
        <div className="w-full h-[200px] bg-primary1/90 center-flex md:flex-row flex-col gap-10 relative">
          <h2 className="text-white">Admin Dashboard</h2>
          <button className="w-fit bg-secondary font-bold px-5 py-2 text-[.75rem] shadow-custom">
            Back to website
          </button>
        </div>
        <section className="py-[50px] min-h-screen ">
          <h4 className="font-medium text-[1.25rem]">
            Good {getTimeOfDay()} <span className="font-bold">Admin</span>,
          </h4>
          <div className="mt-10 flex gap-5 flex-wrap">
            <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
              <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
                <FaMicrophoneAlt color="#f9a815" size={"50px"} />
              </div>
              <div className="w-full">
                <p>Total Podcasts</p>
                <p className="text-[2rem] font-bold flex gap-2 items-center">
                  8
                  <FaCaretUp color="green" size={"20px"} />
                  <button className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto">
                    View all
                  </button>
                </p>
              </div>
            </div>

            <div className="w-full md:w-[350px] flex gap-4 p-4 rounded-md bg-white shadow-md">
              <div className="w-fit h-fit p-3 bg-primary1 rounded-md">
                <FaMicrophoneAlt color="#f9a815" size={"50px"} />
              </div>
              <div className="w-full">
                <p>Total Joined Community</p>
                <p className="text-[2rem] font-bold flex gap-2 items-center">
                  32
                  <FaCaretUp color="green" size={"20px"} />
                  <button className="px-2 py-1 bg-secondary font-bold text-[.75rem] rounded-md ml-auto">
                    View all
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button className="btn-secondary bg-secondary font-bold text-[1rem] rounded-md">
              Add New Podcast
            </button>
          </div>

          <div className="w-full mt-10 flex flex-col md:flex-row gap-5 md:gap-7">
            <div className="w-full md:w-1/2 p-4 rounded-md bg-white">
              <h4 className="font-bold">Podcasts</h4>
              <div className="w-full bg-neutral-100 flex flex-col gap-2 md:p-3 py-2">
                {displayPodcasts}
              </div>
              {podcastDataPag?.length > rowPerPage && (
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
            <div className="w-full md:w-1/2 p-4 rounded-md bg-white">
              <h4 className="font-bold">Joined Community</h4>
              <div className="w-full bg-neutral-100 flex flex-col gap-2 md:p-3 py-2"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;
