import React, { useState } from "react";
import "./App.css";

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
  // <>
  //   <h1>Home page stay hera</h1>
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       {/* Redirect example: redirecting from "/old-home" to "/" */}
  //       <Route path="/old-home" element={<Navigate to="/" />} />
  //       {/* Catch-all route for 404 not found */}
  //       <Route path="*" element={<NotFound />} />
  //     </Routes>
  //   </Router>
  // </>
  const [selectedBike, setSelectedBike] = useState(null);

  const handleButtonClick = (bike) => {
    setSelectedBike(bike);
  };
  return (
    <div className="App">
      <h1>Select a Bike Type</h1>
      <button onClick={() => handleButtonClick("tvs")}>TVS</button>
      <button onClick={() => handleButtonClick("yamaha")}>Yamaha</button>
      <button onClick={() => handleButtonClick("ducati")}>Ducati</button>

      <BikeImage bike={selectedBike} />
    </div>
  );
}

function BikeImage({ bike }) {
  if (!bike) {
    return <div>Please select a bike type.</div>;
  }

  const bikeImages = {
    tvs: "path/to/tvs-image.jpg",
    yamaha: "path/to/yamaha-image.jpg",
    ducati: "path/to/ducati-image.jpg",
  };

  return (
    <div className="bike-images">
      <img src={bikeImages[bike]} alt={`${bike} Bike`} />
    </div>
  );
}

export default App;
