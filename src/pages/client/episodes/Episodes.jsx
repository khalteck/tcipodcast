import { useEffect, useState } from "react";
import Footer from "../../../components/common/footer/Footer";
import Header from "../../../components/common/header/Header";
import topPodcastData from "../../../data/topPodcasts.json";
import { useAppContext } from "../../../contexts/AppContext";
import ScrollToTop from "../../../ScrollToTop";
import PodcastCard2 from "../../../components/home/PodcastCard2";
import Section1 from "../../../components/episodes/Section1";
import Section2 from "../../../components/episodes/Section2";
import Section3 from "../../../components/episodes/Section3";
import FixedFloater from "../../../components/common/FixedFloater";

const Episodes = () => {
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
      return <PodcastCard2 key={index} item={item} index={index} />;
    });

  const pageCount = Math.ceil(podcastDataPag?.length / rowPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };

  const latestEpisode = podcastDataPag?.slice(1)?.[0];

  return (
    <>
      <Header />
      <main>
        <Section1 />

        <Section2 latestEpisode={latestEpisode} />

        <Section3
          displayPodcasts={displayPodcasts}
          podcastDataPag={podcastDataPag}
          rowPerPage={rowPerPage}
          pageCount={pageCount}
          changePage={changePage}
        />

        <FixedFloater />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Episodes;
