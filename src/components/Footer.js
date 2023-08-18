import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=' pt-24 pb-3 w-full xs:pt-16 '>
      <div className='max-w-[1250px] m-auto 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[550px] sm:w-[400px] xs:w-[350px] xxs:w-[320px]'>
        <div className='flex items-start justify-between'>
          
          <form className='p-8 bg-primary flex flex-col items-start gap-3 rounded lg:p-6 md:hidden '>
            <h3>Feel free to contact us</h3> 
            <input 
              className=' px-5 py-2 w-full rounded bg-lightprimary text-primary placeholder:text-primary hover:bg-secondary focus:outline-none'
              type="text" 
              placeholder="Your name" 
              name="name" 
              autoComplete="off" 
              required 
            />
            <input
              className=' px-5 py-2 w-full rounded bg-lightprimary text-primary placeholder:text-primary hover:bg-secondary focus:outline-none' 
              type="email" 
              placeholder="Email" 
              name="email" 
              autoComplete="off" 
              required 
            />
            <textarea
              className='h-25 px-5 py-2 rounded bg-lightprimary text-primary placeholder:text-primary hover:bg-secondary focus:outline-none'
              cols={27} 
              rows={4}  
              placeholder="Your message" 
              name="message" 
              required 
            />
            <button className='bg-lightprimary px-4 py-2 rounded'>Send</button>
          </form>

          <div>
            <h3 className='pb-2' style={{fontSize:"22px"}}>Links</h3>
            <ul className='flex flex-col gap-1'>
              <li className='hidden lg:inline md:hidden sm:inline xxs:hidden' ><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Terms & Conditions</a></li>
              <li className='hidden lg:inline md:hidden sm:inline' ><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Privacy Policy</a></li>
              <li className='hidden lg:inline md:hidden sm:inline' ><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Contact</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Home</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Services</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>About</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Testimonials</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Contact us</a></li>
            </ul>
          </div>

          <div className='lg:hidden md:inline sm:hidden'>
          <h3 className=' opacity-0 pb-2' style={{fontSize:"22px"}}>Links</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Terms & Conditions</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Privacy Policy</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className='pb-2' style={{fontSize:"22px"}}>Get in touch</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>Address will go here</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>sample@email.com</a></li>
              <li><a href="#" style={{fontSize:"16px", color:"#0077A7" }}>+923111111111</a></li>
            </ul>
          </div>

        </div>

        <div className='h-[1px] w-full bg-primary my-8' />

        <div className='flex items-center justify-between sm:flex-col-reverse sm:gap-4 sm:items-start'>
          <p style={{fontSize:"16px", fontFamily:'"Roboto", sans-serif' }}>Copyright © 2023 All right reserved AITI </p>
          <div className='flex items-center gap-3 sm:gap-2 '>
            <AiFillFacebook
            size={30} 
            color='#004f6f' 
            style={{cursor:'pointer'}}
            />
            <AiFillInstagram
            size={30} 
            color='#004f6f' 
            style={{cursor:'pointer'}}
            />
            <AiFillLinkedin
            size={30} 
            color='#004f6f' 
            style={{cursor:'pointer'}}
            />
            <AiFillTwitterSquare
            size={30} 
            color='#004f6f' 
            style={{cursor:'pointer'}}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
