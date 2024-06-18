import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import ScrollToTop from "../../ScrollToTop";
import Section1 from "../../components/admin/Section1";
import Section2 from "../../components/admin/Section2";
import { useAppContext } from "../../contexts/AppContext";
import CreatePodcast from "../../components/admin/CreatePodcast";
import CreateImmigrantsCorner from "../../components/admin/CreateImmigrantsCorner";

const Dashboard = () => {
  const {
    addpodcast,
    handleToggleaddPodcast,
    addImmigrantsCorner,
    handleToggleaddImmigrantsCorner,
  } = useAppContext();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Section1 />

        <Section2 />

        {addpodcast && <CreatePodcast onClose={handleToggleaddPodcast} />}
        {addImmigrantsCorner && (
          <CreateImmigrantsCorner onClose={handleToggleaddImmigrantsCorner} />
        )}
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;
