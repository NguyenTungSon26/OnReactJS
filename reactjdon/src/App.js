import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Details from "./Component/Details";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Page404 from "./Component/Page404";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Header />
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
