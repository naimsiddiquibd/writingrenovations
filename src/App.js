import { useState, useEffect } from "react";

import "./css/style.css";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Struggle from "./components/Struggle";
import Feel from "./components/Feel";
import Do from "./components/Do";
import Ideas from "./components/Ideas";
import How from "./components/How";
import Values from "./components/Values";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import About from "./components/About";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
// import Loader from "./components/Loader";

function App() {
  const [portActive, setPortActive] = useState(false);

  const togglePort = (action) => {
    if (action === "activate") {
      setPortActive(true);
      return;
    }
    setPortActive(false);
  };

  return (
    <>
      {!portActive ? (
        <main className="App">
          <Menu onToggle={togglePort} />
          <Banner />
          <Struggle />
          <Feel />
          <Do />
          <Ideas />
          <How />
          <Values />
          <Testimonials />
          <Clients />
          <About onTogglePort={togglePort} />
          <Offer />
          <Footer />
        </main>
      ) : (
        <Portfolio onTogglePort={togglePort} />
      )}
    </>
  );
}

export default App;
