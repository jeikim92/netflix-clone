import React from 'react'
import {IoIosArrowDropup} from 'react-icons/io'

const Footer = () => {

    const GoToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    
  return (
    <>
        <div className="z-10 fixed bottom-14 right-10 w-4 h-1">
            <IoIosArrowDropup onClick={GoToTop} className='text-white text-[35px] hover:opacity-80 cursor-pointer' />
        </div>
    </>
  )
}

export default Footer