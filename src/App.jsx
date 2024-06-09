// Importing global CSS styles
import "./index.css";

// Other imports
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "./components/common/Loader";

// Importing React's lazy and Suspense for code splitting and lazy loading
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

// Code splitting - dynamic import of components
const Homepage = lazy(() => import("./pages/client/home/Homepage"));
const Episodes = lazy(() => import("./pages/client/episodes/Episodes"));
const Login = lazy(() => import("./pages/admin/Login"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));

function App() {
  const user = useSelector((state) => state.user.user);

  // console.log("user", user);

  return (
    // Suspense component to show a fallback (Loader) while the lazy-loaded component is being fetched
    <Suspense fallback={<Loader />}>
      {/* Routes component to define application routes */}
      <Routes>
        {/* client pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/login" element={<Login />} />

        {/* admin pages */}
        <Route
          path="/admin"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
