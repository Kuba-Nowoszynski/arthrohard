import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Error from "./routes/error/Error";
import Loader from "./components/loader/Loader";

// Lazy load the Home component to improve initial load performance
const Home = lazy(() => import("./routes/home/Home"));

function App() {
  return (
    // Use Suspense to show a loader while components are being loaded lazily
    <Suspense fallback={<Loader />}>
      {/* Define the routes for application */}
      <Routes>
        {/* Route for the "/" (root) path */}
        <Route index element={<Home />} />

        {/* Route for any other path */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
