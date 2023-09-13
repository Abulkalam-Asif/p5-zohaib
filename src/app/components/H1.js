import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['cyrillic']
});

const H1 = () => {
  return (
    <>
      <h1 className={`${montserrat.className} text-4xl font-bold text-center sm:text-3xl`}>Create Account</h1>
    </>
  )
}

export default H1