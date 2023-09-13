import Image from 'next/image'
import React from 'react'

const SignupWithLinkButton = ({ text, logo, href = "#", logoSize = "" }) => {
  return (
    <>
      <a href={href} className='flex justify-center items-center gap-2 p-2.5 border border-gray-400 rounded-xl cursor-pointer md:p-1 md:rounded-md'>
        <div className='relative'>
          <Image src={logo} alt="Logo" width={24} height={24} className={`absolute -left-8 top-1/2 -translate-y-1/2 ${logoSize} md:-left-6`} />
          <span className='uppercase font-medium text-linkBtnColor text-base2 tracking-wide md:tracking-normal md:text-sm xs:text-xs'>{text}</span>
        </div>
      </a>
    </>
  )
}

export default SignupWithLinkButton