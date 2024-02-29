import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Servicepage from "./pages/services/Servicepage";
import Footer from "./components/footer/Footer";
import Contactpage from "./pages/contact/Contactpage";
import Blog from "./components/blog/Blog";
import Faqpage from "./pages/faq/Faqpage";

function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Servicepage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/faq" element={<Faqpage />}></Route>
          <Route path="/contact" element={<Contactpage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
