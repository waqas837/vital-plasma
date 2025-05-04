import DonationSteps from '@/components/DonationSteps'
import MainHero from '@/components/HeroSection/MainHero'
import PlasmaPromoComponent from '@/components/PlasmaPromoComponent'
import WhyDonateSection from '@/components/WhyDonateSection'

const Home = () => {
  return (
    <>
      <MainHero />
      <PlasmaPromoComponent />
      <DonationSteps />
      <WhyDonateSection />
    </>
  )
}

export default Home;