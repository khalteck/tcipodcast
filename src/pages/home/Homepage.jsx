import Header from "../../components/common/header/Header";
import Section1 from "../../components/home/Section1";
import Section2 from "../../components/home/Section2";
import Section3 from "../../components/home/Section3";
import TopPodcastCard from "../../components/home/TopPodcastCard";

const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Section1 />

        <Section2 />

        <Section3 />
      </main>
    </>
  );
};

export default Homepage;
