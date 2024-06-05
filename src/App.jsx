// Importing global CSS styles
import "./index.css";

// Other imports
import { Routes, Route } from "react-router-dom";
import Loader from "./components/common/Loader";

// Importing React's lazy and Suspense for code splitting and lazy loading
import { lazy, Suspense } from "react";

// Code splitting - dynamic import of components
const Homepage = lazy(() => import("./pages/client/home/Homepage"));
const Episodes = lazy(() => import("./pages/client/episodes/Episodes"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));

function App() {
  return (
    // Suspense component to show a fallback (Loader) while the lazy-loaded component is being fetched

    <Suspense fallback={<Loader />}>
      {/* Routes component to define application routes */}
      <Routes>
        {/* client pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/episodes" element={<Episodes />} />

        {/* admin pages */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

export default App;
