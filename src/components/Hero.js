import Image from 'next/image'
import Link from 'next/link'

const Hero = ({heading, para, imgSrc, btnText, btnAction, heroStyles}) => {
  return (
    <div 
      className='pb-12 flex items-center justify-between w-full max-w-[1400px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[700px] lg:flex-col lg:text-center md:w-[550px] md:pb-0 sm:w-[450px] xs:w-[350px] xs:text-left xxs:w-[320px]' 
      style={heroStyles}
    >
      <div className='w-1/2 2xl:w-[60%] lg:w-full'>
        <h1 className='mb-4'>{heading}</h1>
        <p className='mb-4'>{para}</p>
        <Link href={btnAction}>
          <button className="btn px-4 py-2 text-bg text-lg font-medium lg:hidden" >{btnText}</button>
        </Link>
      </div>
      <Image
        src={imgSrc}
        width={442}
        height={615}
        alt="Picture of the author"
        className=' xl:h-[550px] xl:w-auto lg:h-[600px] md:h-[500px] xs:h-[400px]'
      />
    </div>
  )
}

export default Hero
