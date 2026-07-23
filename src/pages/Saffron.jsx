import Footer from '../Components/Common/Footer'
import { useTranslation } from 'react-i18next'
import saffronHeroImg from '../assets/image.png'
import ShopByCategory from '../Components/ShopByCategory'
import HandpickedProducts from '../Components/HandpickedProducts'
import SaffronLegacy from '../Components/SaffronLegacy'
import ShopBySpace from '../Components/ShopBySpace'
import SaffronLatestBlog from '../Components/SaffronLatestBlog'

const Saffron = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <main className="bg-white text-[#1b3156]">
        <section className="bg-[#eadcc7]">
          <img
            className="h-auto min-h-[250px] w-full object-cover object-center max-md:min-h-0 max-md:object-contain"
            src={saffronHeroImg}
            alt={t('navigation.saffron')}
          />
        </section>
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
