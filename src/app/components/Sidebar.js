import React from 'react'
import xmark from "../assets/xmark.svg";
import Image from 'next/image';

const Sidebar = ({ toggleSidebarHandler, isSidebarOpen }) => {
  return (
    <>
      <aside className={`hidden fixed z-50 top-0 bottom-0 bg-white w-48 transition-all duration-300 md:block ${isSidebarOpen ? "right-0" : "-right-full"}`}>
        <button className='absolute top-4 right-4' onClick={toggleSidebarHandler}>
          <Image src={xmark} width={30} height={"100%"} alt='xmark icon' />
        </button>
      </aside>
    </>
  )
}

export default Sidebar