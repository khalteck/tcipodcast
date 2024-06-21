import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import ScrollToTop from "../../ScrollToTop";
import Section1 from "../../components/admin/Section1";
import Section2 from "../../components/admin/Section2";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Section1 />

        <Section2 />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Dashboard;
