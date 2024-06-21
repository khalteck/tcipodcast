// Importing global CSS styles
import "./index.css";

// Other imports
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/common/Loader";

// Importing React's lazy and Suspense for code splitting and lazy loading
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import Modal from "./components/home/Modal";
import { useAppContext } from "./contexts/AppContext";

// Importing ErrorBoundary
import ErrorBoundary from "./components/error/ErrorBoundary";

// Code splitting - dynamic import of components
const Homepage = lazy(() => import("./pages/client/home/Homepage"));
const Episodes = lazy(() => import("./pages/client/episodes/Episodes"));
const Contact = lazy(() => import("./pages/client/contact/Contact"));
const About = lazy(() => import("./pages/client/about/About"));
const ImmigrantsCorner = lazy(() =>
  import("./pages/client/immigrantsCorner/ImmigrantsCorner")
);

const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));

const ComingSoon = lazy(() => import("./pages/client/comingSoon/ComingSoon"));

function App() {
  const user = useSelector((state) => state.user.user);
  const { podcast, handleToggleModal } = useAppContext();

  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* Routes component to define application routes */}
          <Routes>
            {/* coming soon */}
            {/* <Route path="/" element={<ComingSoon />} /> */}

            {/* client pages */}
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/immigrants-corner" element={<ImmigrantsCorner />} />

            <Route path="/login" element={<Login />} />

            {/* admin pages */}
            <Route
              path="/admin"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      {/* //pop up modal */}
      {podcast && (
        <Modal onClose={handleToggleModal} action={() => console.log("play")} />
      )}
    </>
  );
}

export default App;
