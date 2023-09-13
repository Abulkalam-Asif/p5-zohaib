import Image from 'next/image'
import React from 'react'

const SignupWithLinkButton = ({ text, logo, href = "#" }) => {
  return (
    <>
      <a href={href} className='flex justify-center items-center gap-2 p-2.5 border border-gray-400 rounded-xl cursor-pointer md:p-2 md:rounded-md'>
        <Image src={logo} alt="Logo" width={24} height={24} className='w-6 sm:w-5' />
        <span className='uppercase font-medium text-linkBtnColor text-lg tracking-wide sm:text-sm xs:text-xs'>{text}</span>
      </a>
    </>
  )
}

export default SignupWithLinkButton