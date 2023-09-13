import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic']
});

const H1 = () => {
  return (
    <>
      <h1 className={`${montserrat.className} text-[40px] font-bold text-center leading-[1em] pb-4 sm:text-[26px]`}>Create Account</h1>
    </>
  )
}

export default H1