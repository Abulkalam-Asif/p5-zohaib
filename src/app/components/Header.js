import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <header className='h-24 sticky top-0 left-0 right-0 flex items-center justify-between px-16 pb-6 pt-8 shadow-lg bg-white md:px-6'>
        <a href='#' className='h-full'>
          <Image
            width={183}
            height="100%"
            src={logo}
            alt="SmartDepo Logo"
            className='w-auto h-full'
            priority={true}
          />
        </a>
        <a href="#" className='bg-gradient-to-r from-gradColor1 to-gradColor2 py-3 px-8 rounded-full text-white text-lg font-semibold'>Sign In</a>
      </header>
    </>
  )
}

export default Header
