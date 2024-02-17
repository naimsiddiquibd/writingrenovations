import Menu from "./Menu";
import PortHeader from "./PortHeader";
import Gallery from "./Gallery";
import Footer from "./Footer";

function Portfolio(props) {
  return (
    <main className="App">
      <Menu onToggle={props.onTogglePort} portfolio={true} />
      <PortHeader />
      <Gallery />
      <Footer />
    </main>
  );
}

export default Portfolio;
