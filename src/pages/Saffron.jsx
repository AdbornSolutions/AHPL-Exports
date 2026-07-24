import Footer from '../Components/Common/Footer'
import SaffronHeroSlider from '../Components/SaffronHeroSlider'
import ShopByCategory from '../Components/ShopByCategory'
import HandpickedProducts from '../Components/HandpickedProducts'
import SaffronLegacy from '../Components/SaffronLegacy'
import ShopBySpace from '../Components/ShopBySpace'
import SaffronLatestBlog from '../Components/SaffronLatestBlog'

const Saffron = () => {
  return (
    <>
      <main className="bg-white text-[#1b3156]">
        <SaffronHeroSlider />
        <ShopByCategory />
        <HandpickedProducts />
        <SaffronLegacy />
        <ShopBySpace />
        <SaffronLatestBlog />
      </main>
      <Footer />
    </>
  )
}

export default Saffron
