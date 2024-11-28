import React from 'react'
import {NavLink} from 'react-router-dom'
import {assets}  from '../assets/assets'



const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-5 font-medium'>
        <img src={assets.logo1} className="w-36" alt="Logo not found."/> 
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink className='flex flex-col items-center gap-1'>
            <p>
                <h1>Home</h1>
                <hr className=' w-2/4 border-none h-[1.5px] bg-gray-700'/>
            </p>

          </NavLink>

        </ul>
        

          
          

    </div>
  )
}

export default Navbar
