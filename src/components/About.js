import Image from "next/image"

const About = (props) => {
  return (
    <div className="py-12 md:py-6 md:mb:4 flex items-center gap-16 md:gap-14 max-w-[1250px] 2xl:w-[1200px] xl:w-[1000px] lg:flex-col-reverse lg:w-[800px] lg:gap-40 lg:text-center md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px] " style={props.aboutStyles}>
      <div className="">
        <h2>About Us</h2>
        <h3 className="mb-2">Elevating Your Business with Next-Generation IT Services</h3>
        <p>At AITI, we are not just another IT company. We are a trailblazer in the realm of advanced technology solutions. With a legacy of delivering cutting-edge IT services, we stand as a beacon of innovation and excellence in the digital landscape. Our team of experts is dedicated to pushing the boundaries of whats possible, ensuring that businesses stay ahead in an ever-evolving technological world.</p>
      </div>
      <Image 
        className="lg:w-[700px] lg:h-auto xs:hidden"
        width={600}
        height={600} 
        src="/graphic3.png"
        alt="graphic"
      />
      
    </div>
  )
}

export default About
