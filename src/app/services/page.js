import Hero from "@/components/Hero"
import Map from "@/components/Map"
import Services from "@/components/Services"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const page = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-[100px]">
      <Nav />
      <Hero
        heroStyles={{maxWidth:"1250px"}}
        heading="We provide the best"  
        para="At AITI, we are not just another IT company. We are a trailblazer in the realm of advanced technology solutions. With a legacy of delivering cutting-edge IT services, we stand as a beacon of innovation and excellence in the digital landscape."
        imgSrc="/graphic2.png"
        btnText="Contact"
        btnAction="/contact"
      />
      <Services/>
      <Map />
      <Footer />
    </div>
  )
}

export default page
