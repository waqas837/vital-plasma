import DonationSteps from '@/components/DonationSteps'
import MainHero from '@/components/HeroSection/MainHero'
import PlasmaPromoComponent from '@/components/PlasmaPromoComponent'
import DonationFeatures from '@/components/Teams'
import DonorTestimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <>
      <MainHero />
      <PlasmaPromoComponent />
      <DonationSteps />
      <DonationFeatures />
      <DonorTestimonials />
    </>
  )
}

export default Home;