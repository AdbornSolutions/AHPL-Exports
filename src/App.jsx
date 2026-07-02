import Navbar from "./Components/Common/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import { Route, Routes } from "react-router-dom";

const App = () => (
  <div className="overflow-hidden bg-white text-[#162b50] antialiased">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/product" element={<Industries />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contactus />} />
    </Routes>
  </div>
);

export default App;
