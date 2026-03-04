import React from 'react'
import { Menu } from "lucide-react";
import{X}from "lucide-react";
import { useState } from 'react';
const Navbar = () => {
    const[mobileMenuIsOpen,setMobileMenuIsOpen]=useState(false);
  return (
    <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center    h-14 sm:h-16 md:h-20'>
            <div className='flex items-center space-x-1'>
        <div className=''>
            <img src="/logo.png" alt="Codeflow" className='w-6 h-6 sm:w-9 sm:h-9' />
         </div>
         <span className='text-lg sm:xl md:2xl font-medium group cursor-pointer'>
            <span className='text-white' >Code</span>
            <span className='text-blue-400'>Flow</span>
         </span>
         </div>
         {/*Nav links */}
         <div className=' hidden md:flex items-center space-x-6 lg:space-x-8'>
            <a className='text-gray-300 hover:text-white text-sm lg:text-base' href="#features">Features</a>
            <a className='text-gray-300 hover:text-white text-sm lg:text-base' href="#pricing">Pricing</a>
            <a className='text-gray-300 hover:text-white text-sm lg:text-base' href="#testimonials">Testimonials</a>
            
         </div>
         <button className=' md:hidden p-2 text-gray-300 hover:text-white ' onClick={()=>setMobileMenuIsOpen((prev) =>!prev) }> {mobileMenuIsOpen ? (
            <X/>
          ) :(
            < Menu className='w-5 h-5 sm:w-6 sm:h-6' />)}
         </button>

         {/* {mobileMenuIsOpen && <p>LoLo</p>} */}
        </div>
    </div>
    {mobileMenuIsOpen && <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-700 animate-in slide-in-from-top    duration-300 '> 
        <div className='px-4 py-4 pm:py-6 space-y-3 sm:space-y-4'>
            <a className=' block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=>setMobileMenuIsOpen(false) } href="#features">Features</a>
            <a className=' block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=>setMobileMenuIsOpen(false) } href="#pricing">Pricing</a>
            <a className=' block text-gray-300 hover:text-white text-sm lg:text-base' onClick={()=>setMobileMenuIsOpen(false) } href="#testimonials">Testimonials</a>
        </div>
    </div>}
</nav>
  )
}

export default Navbar
