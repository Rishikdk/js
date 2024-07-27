import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <h1>Home page stay hera</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Redirect example: redirecting from "/old-home" to "/" */}
          <Route path="/old-home" element={<Navigate to="/" />} />
          {/* Catch-all route for 404 not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
