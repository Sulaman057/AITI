'use client'
import Link from "next/link";
import {usePathname} from 'next/navigation';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const pathname = usePathname();
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <nav className='flex justify-between items-center w-full py-10 max-w-[1400px] 2xl:w-[1200px] xl:w-[1000px] lg:w-[800px] md:w-[550px] sm:w-[450px] xs:w-[350px] xxs:w-[320px]'>
      <h4 className='text-accent text-5xl font-bold sm:text-4xl'>Logo</h4>
      <button 
       onClick={handleClick} 
       className=" invisible md:visible"
      >
        <FaBars
          size={35} 
          color='#008FC9' 
          style={{cursor:'pointer'}}

        />
      </button>
      <div ref={navRef} className="flex items-center justify-center md:fixed md:top-0 md:left-0 md:h-screen md:w-screen md:bg-primary md:flex-col md:z-10 mdResponsiveNav" >


          <button 
          onClick={handleClick} 
          className="invisible md:visible absolute top-10 right-10 "
          >
            <FaTimes
              size={40} 
              color='#008FC9' 
              style={{cursor:'pointer'}} 
            />
          </button>

        <ul className='flex items-center justify-between w-[400px] lg:w-[370px] md:flex-col md:w-[200px] md:h-[300px]'>
          <li >
            <Link href="/" className={`text-xl xl:text-lg md:text-2xl font-medium ${pathname === "/" ? "text-accent" : "text-lightprimary"}`}>Home</Link>
          </li>
          <li >
            <Link href="/services" className={`text-xl xl:text-lg md:text-2xl font-medium ${pathname === "/services" ? "text-accent" : "text-lightprimary"}`}>services</Link>
          </li>
          <li>
            <Link href="/about" className={`text-xl xl:text-lg md:text-2xl font-medium ${pathname === "/about" ? "text-accent" : "text-lightprimary"}`}>About</Link>
          </li>
          <li>
            <Link href="/contact" className={`text-xl xl:text-lg md:text-2xl font-medium ${pathname === "/contact" ? "text-accent" : "text-lightprimary"}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
