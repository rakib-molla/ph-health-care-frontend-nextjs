import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection"
import Specialist from "@/components/UI/HomePage/Specialist/Specialist"
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors"
import { Button } from "@mui/material"


function HomePage() {
  return (
    <>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
    </>
  )
}

export default HomePage