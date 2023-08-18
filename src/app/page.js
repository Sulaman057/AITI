import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import About from "@/components/About"
import Testimonials from "@/components/Testimonials"
import Map from "@/components/Map"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-[100px]  xs:gap-[50px]">
      <Nav />
      <Hero 
        heading="Shaping Tomorrow's Technology Today"  
        para="At AITI, we are not just another IT company. We are a trailblazer in the realm of advanced technology solutions. With a legacy of delivering cutting-edge IT services, we stand as a beacon of innovation and excellence in the digital landscape."
        imgSrc="/graphic1.png"
        btnText="services"
        btnAction="/services"
      />
      <Services />
      <WhyUs />
      <Image 
       width={400}
       height={400}
       src={"/graphic3.png"}
       alt=""
       className="hidden xs:inline"
      />
      <About />
      <Testimonials />
      <Map />
      <Footer />
    </main>
  )
}
