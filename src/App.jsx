import "./App.css";
import "./App.js";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Header from "./Components/Header/Header.jsx";
import Services from "./Components/Services/Services.jsx";
import HostingPricing from "./Components/HostingPricing/HostingPricing.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Header></Header>
        <Services></Services>
        <HostingPricing></HostingPricing>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
