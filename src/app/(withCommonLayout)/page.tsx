import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection"
import Solution from "@/components/UI/HomePage/Solution/Solution"
import Specialist from "@/components/UI/HomePage/Specialist/Specialist"
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors"
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs"



function HomePage() {
  return (
    <>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
      <Solution/>
    </>
  )
}

export default HomePage