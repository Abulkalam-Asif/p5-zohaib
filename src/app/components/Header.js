import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <header className='h-26 sticky z-40 top-0 left-0 right-0 flex items-center justify-between px-16 py-7 flex-wrap shadow-header bg-white md:px-3 md:h-32 md:py-3'>
        <a href='#' className='h-full flex justify-center items-center p-0.5 md:w-full md:justify-start md:h-1/2'>
          <Image
            width={183}
            height="100%"
            src={logo}
            alt="SmartDepo Logo"
            className='w-auto h-full'
            priority={true}
          />
        </a>
        <div className='h-full flex justify-center items-center md:w-full md:h-1/2 md:justify-end'>
          <a href="#" className='bg-gradient-to-r from-gradColor1 to-gradColor2 py-4 px-9 leading-4 rounded-full text-white text-base2 font-semibold md:px-10 md:py-1 md:text-xl'>Sign In</a>
        </div>
      </header>
    </>
  )
}

export default Header
