import "./App.css";
import Footer from "./components/footer/footer";
import Work from "./components/works/work";
import Main from "./components/main/main";
import Logo from "./components/logo/logos";
import Main2 from "./components/main2/main2";
import Work2 from "./components/work2/work2";
import Galery from "./components/cssGrid/cssgrid";
import CarItem from "./components/itemCar/carItem";
import Beetween from "./components/beetween/beetween";
import About from "./components/about/about";
import Map from "./components/map/map";
function App() {
  return (
    <div>
      <Footer />
      <Work />
      <Main />
      <Logo />
      <Main2 />
      <Work2 />
      <Galery />
      <CarItem />
      <Beetween />
      <About />
      <Map/>
    </div>
  );
}

export default App;
