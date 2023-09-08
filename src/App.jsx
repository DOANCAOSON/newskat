import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import ScrollToTop from "./component/ScrollToTop";
import Tintuc from "./page/tintuc";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./page/Detail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tintuc" element={<Tintuc />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
