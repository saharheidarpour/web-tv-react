import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("@pages/home"));
const About = React.lazy(() => import("@pages/about"));
const Search = React.lazy(() => import("@pages/search"));
const Authenticate = React.lazy(() => import("@pages/auth"));

export default function Router() {
  return (
    <Routes>
      {/* element={<Layout hasMenu="false" />} */}
      <Route path="/">
        <Route
          index
          element={
            <React.Suspense fallback={<>...</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="auth"
          element={
            <React.Suspense fallback={<>...</>}>
              <Authenticate />
            </React.Suspense>
          }
        />
        <Route
          path="search"
          element={
            <React.Suspense fallback={<>...</>}>
              <Search />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
