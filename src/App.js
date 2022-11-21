import Header from "./components/Header";
import "./style.css";
import ShowCase from "./components/ShowCase";
import ModelSlider from "./components/ModelSlider";
import Apr from "./components/Apr";
import Craftsmanship from "./components/Craftsmanship";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ShowCase />
      <ModelSlider />
      <Apr />
      <Craftsmanship />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
