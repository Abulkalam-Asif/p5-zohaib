import Image from 'next/image'
import React from 'react'

const SignupWithLinkButton = ({ text, logo, href = "#" }) => {
  return (
    <>
      <a href={href} className='flex justify-center items-center gap-2 p-3 border border-gray-400 rounded-lg cursor-pointer sm:p-2'>
        <Image src={logo} alt="Logo" width={24} height={24} className='w-6 sm:w-5' />
        <span className='uppercase font-semibold text-gray-500 text-lg tracking-wider sm:text-sm xs:text-xs'>{text}</span>
      </a>
    </>
  )
}

export default SignupWithLinkButton