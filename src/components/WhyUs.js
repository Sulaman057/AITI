import Image from "next/image"

const WhyUs = () => {
  return (
    <div className=" py-12 md:py-6 flex items-center justify-between gap-16 max-w-[1250px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] lg:flex-col md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px]">
      <Image
        src="/graphic2.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className='xl:h-[450px] xl:w-auto lg:hidden'
      />
      <div>
        <h1 className='mb-4'>Why Choose AITI</h1>
        <p>At AITI, we are not just another IT company. We are a trailblazer in the realm of advanced technology solutions.</p>
        <div className="grid grid-rows-2 grid-cols-2 gap-5 mt-5 lg:gap-8 lg:mt-8 sm:gap-5 sm:mt-5 xs:flex xs:flex-col xs:gap-4">
          <div>
            <h3 className="mb-1">Unparalleled Expertise</h3>
            <p>Our team of seasoned IT professionals brings a wealth of experience and expertise, guaranteeing top-notch solutions tailored to your unique needs.</p>
          </div>
          <div>
            <h3 className="mb-1">End-to-End Solutions</h3>
            <p>From conceptualization to implementation and beyond, we offer comprehensive solutions that seamlessly integrate into your existing systems</p>
          </div>
          <div>
            <h3 className="mb-1">Client-Centric Approach</h3>
            <p>Your success is our priority. We work closely with you, understanding your goals and challenges to deliver solutions that exceed your expectations.</p>
          </div>
          <div>
            <h3 className="mb-1">Innovation at Heart</h3>
            <p>We thrive on innovation, constantly exploring new technologies and approaches to keep your business at the forefront of digital transformation.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyUs
