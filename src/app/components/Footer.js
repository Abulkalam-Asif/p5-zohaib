import Image from 'next/image'
import React from 'react'
import logoWhite from "../assets/logoWhite.png"
import logo from "../assets/logo.png"
import bars from "../assets/bars.svg";

const Footer = ({ toggleSidebarHandler }) => {
  return (
    <>
      <footer className='h-32 flex items-center justify-between shadow-footer gap-x-4 px-12 py-8 bg-black text-white text-center text-sm2 md:bg-white md:px-2 md:py-0 md:h-16'>
        <a href='#' className='h-full p-2'>
          <Image
            width={183}
            height="100%"
            src={logoWhite}
            alt="SmartDepo Logo"
            className='w-auto h-full md:hidden'
            priority={true}
          />
          <Image
            width={183}
            height="100%"
            src={logo}
            alt="SmartDepo Logo"
            className='hidden w-auto h-full md:block'
            priority={true}
          />
        </a>
        <div className='flex flex-col items-center md:hidden'>
          <p>&copy; 2023 LegalDocumentGeneration, Inc</p>
          <p>All Rights Reserved.</p>
        </div>
        <ul className='flex gap-x-6 md:hidden'>
          <li><a className='hover:border-b-4 pb-2' href="#">Privacy Policy</a></li>
          <li><a className='hover:border-b-4 pb-2' href="#">Terms & Conditions</a></li>
        </ul>
        <button onClick={toggleSidebarHandler} className='hidden md:block'>
          <Image alt='bars icon' src={bars} width={30} height={"100%"} />
        </button>
      </footer>
    </>
  )
}

export default Footer