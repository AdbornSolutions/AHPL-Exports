import Aboutus from "../Components/Aboutus";
import Certifications from "../Components/Certifications";
import ContactForm from "../Components/ContactForm";
import LatestBlog from "../Components/LatestBlog";
import MainHero from "../Components/MainHero";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonials";
import WhyChoose from "../Components/WhyChoose";
import Footer from "../Components/Common/Footer";

const Home = () => (
  <main>
    <MainHero />
    <Aboutus />
    <Products />
    <Certifications />
    <WhyChoose />
    <Testimonials />
    <LatestBlog />
    <ContactForm />
    <Footer />
  </main>
);

export default Home;
