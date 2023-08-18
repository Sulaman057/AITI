import React from 'react'

const Map = () => {
  return (
    <div className='py-12 md:py-0 w-[1250px] opacity-50 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px]'>


        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28264.68806485914!2d74.36026242406176!3d31.562045512863367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190529103652dd%3A0xd6b8cc6d9b09cb88!2sRoyal%20Palm%20Golf%20And%20Country%20Club!5e0!3m2!1sen!2s!4v1692270834904!5m2!1sen!2s"
          width="100%" 
          height="300" 
          style={{border:"0", maxWidth:"1250px", borderRadius:"10px" }}
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default Map
