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
import { Navigate, Route, Routes } from "react-router-dom";
import Saffron from "./pages/Saffron";
import HomeDecorManufacturerBlog from "./Components/Blogs/HomeDecorManufacturerBlog";
import IndianHandicraftsExporterBlog from "./Components/Blogs/IndianHandicraftsExporterBlog";
import DecorativeItemsExporterBlog from "./Components/Blogs/DecorativeItemsExporterBlog";
import MetalWallDecorManufacturerBlog from "./Components/Blogs/MetalWallDecorManufacturerBlog";
import MerchantExporterBlog from "./Components/Blogs/MerchantExporterBlog";
import B2BSourcingIndiaBlog from "./Components/Blogs/B2BSourcingIndiaBlog";
import BestWoodenDecorSupplierBlog from "./Components/Blogs/BestWoodenDecorSupplierBlog";
import PolyresinDecorSupplierBlog from "./Components/Blogs/PolyresinDecorSupplierBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import SpaceProducts from "./pages/SpaceProducts";
import CopperArticles from "./pages/products/CopperArticles";
import Makhana from "./pages/products/Makhana";
import DehydratedPowders from "./pages/products/DehydratedPowders";
import BiomassPallette from "./pages/products/BiomassPallette";
import MultaniMitti from "./pages/products/MultaniMitti";
const App = () => (
  <div className="overflow-hidden bg-white text-[#162b50] antialiased">
    <ScrollToTop />
    <Navbar />
    <WhatsAppButton />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/saffron" element={<Saffron />} />
      <Route path="/shop-by-space/:spaceSlug" element={<SpaceProducts />} />
      <Route path="/product" element={<Industries />} />
      <Route path="/product/metal-table-decor" element={<Metaltable />} />
      <Route path="/product/metal-wall-decor" element={<MetalWall />} />
      <Route path="/product/polyresin-decor" element={<PoyresinDecor />} />
      <Route path="/product/marble-decor" element={<MarbleDecor />} />
      <Route path="/product/lifestyle-utility" element={<LifestyleUtility />} />
      <Route path="/product/wooden-decor" element={<WoodenDecore />} />
      <Route path="/product/industrial-v-belts" element={<IndustryVBelt />} />
      <Route path="/product/copper-articles" element={<CopperArticles />} />
      <Route path="/product/CopperArticles" element={<Navigate to="/product/copper-articles" replace />} />
      <Route path="/product/makhana" element={<Makhana />} />
      <Route path="/product/Makhana" element={<Navigate to="/product/makhana" replace />} />
      <Route path="/product/dehydrated-powders" element={<DehydratedPowders />} />
      <Route path="/product/DehydratedPowders" element={<Navigate to="/product/dehydrated-powders" replace />} />
      <Route path="/product/biomass-pellets" element={<BiomassPallette />} />
      <Route path="/product/Biomass" element={<Navigate to="/product/biomass-pellets" replace />} />
      <Route path="/product/multani-mitti" element={<MultaniMitti />} />
      <Route path="/product/MultaniMitti" element={<Navigate to="/product/multani-mitti" replace />} />
      <Route path="/product/:categorySlug/:productSlug" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/home-decor-manufacturer-india-stand-out-global-markets" element={<HomeDecorManufacturerBlog />} />
      <Route path="/blog/how-to-choose-the-best-indian-handicrafts-exporter" element={<IndianHandicraftsExporterBlog />} />
      <Route path="/blog/how-decorative-items-exporter-ensure-global-quality-standards" element={<DecorativeItemsExporterBlog />} />
      <Route path="/blog/metal-wall-decor-manufacturer" element={<MetalWallDecorManufacturerBlog />} />
      <Route path="/blog/benefits-of-working-with-indian-merchant-exporter" element={<MerchantExporterBlog />} />
      <Route path="/blog/b2b-sourcing-in-india-guide-for-international-buyers" element={<B2BSourcingIndiaBlog />} />
      <Route path="/blog/best-wooden-decor-supplier-global-wholesale-buyers" element={<BestWoodenDecorSupplierBlog />} />
      <Route path="/blog/leading-polyresin-decor-supplier-global-importers-wholesalers" element={<PolyresinDecorSupplierBlog />} />
      <Route path="/home-decor-manufacturer-india-stand-out-global-markets" element={<Navigate to="/blog/home-decor-manufacturer-india-stand-out-global-markets" replace />} />
      <Route path="/how-to-choose-the-best-indian-handicrafts-exporter" element={<Navigate to="/blog/how-to-choose-the-best-indian-handicrafts-exporter" replace />} />
      <Route path="/how-decorative-items-exporter-ensure-global-quality-standards" element={<Navigate to="/blog/how-decorative-items-exporter-ensure-global-quality-standards" replace />} />
      <Route path="/metal-wall-decor-manufacturer" element={<Navigate to="/blog/metal-wall-decor-manufacturer" replace />} />
      <Route path="/benefits-of-working-with-indian-merchant-exporter" element={<Navigate to="/blog/benefits-of-working-with-indian-merchant-exporter" replace />} />
      <Route path="/b2b-sourcing-in-india-guide-for-international-buyers" element={<Navigate to="/blog/b2b-sourcing-in-india-guide-for-international-buyers" replace />} />
      <Route path="/contact-us" element={<Contactus />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Routes>
  </div>
);

export default App;
