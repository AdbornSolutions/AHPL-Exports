import Navbar from "./Components/Common/Navbar";
import ScrollToTop from "./Components/Common/ScrollToTop";
import WhatsAppButton from "./Components/Common/WhatsAppButton";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Metaltable from "./pages/products/Metaltable";
import MetalWall from "./pages/products/MetalWall";
import PoyresinDecor from "./pages/products/PoyresinDecor";
import MarbleDecor from "./pages/products/MarbleDecor";
import LifestyleUtility from "./pages/products/LifestyleUtility";
import WoodenDecore from "./pages/products/WoodenDecore";
import ProductDetail from "./pages/products/ProductDetail";
import IndustryVBelt from "./pages/products/Industry-v-Belt";
import { Route, Routes } from "react-router-dom";
import Saffron from "./pages/Saffron";
import HomeDecorManufacturerBlog from "./Components/Blogs/HomeDecorManufacturerBlog";
import IndianHandicraftsExporterBlog from "./Components/Blogs/IndianHandicraftsExporterBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => (
  <div className="overflow-hidden bg-white text-[#162b50] antialiased">
    <ScrollToTop />
    <Navbar />
    <WhatsAppButton />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/saffron" element={<Saffron />} />
      <Route path="/product" element={<Industries />} />
      <Route path="/product/metal-table-decor" element={<Metaltable />} />
      <Route path="/product/metal-wall-decor" element={<MetalWall />} />
      <Route path="/product/polyresin-decor" element={<PoyresinDecor />} />
      <Route path="/product/marble-decor" element={<MarbleDecor />} />
      <Route path="/product/lifestyle-utility" element={<LifestyleUtility />} />
      <Route path="/product/wooden-decor" element={<WoodenDecore />} />
      <Route path="/product/industrial-v-belts" element={<IndustryVBelt />} />
      <Route path="/product/:categorySlug/:productSlug" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/home-decor-manufacturer-india-stand-out-global-markets" element={<HomeDecorManufacturerBlog />} />
      <Route path="/how-to-choose-the-best-indian-handicrafts-exporter" element={<IndianHandicraftsExporterBlog />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  </div>
);

export default App;
