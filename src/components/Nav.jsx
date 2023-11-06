import React from 'react'
import './Nav.css'
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center p-4 z-[100] w-full absolute">
      <Link to = '/'>
        <h1 className='text-red-600 font-black text-4xl cursor-pointer' path="/">NETFLIX</h1>
      </Link>
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
    </>
  )
}

export default Nav