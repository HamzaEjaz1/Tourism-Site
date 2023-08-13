import React, { useState } from 'react'
import {FaBars, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {BiSearch } from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
const Navbar = () => {

    const [toggle ,setToggle]=useState(false)
  return (
    <div className='flex justify-between items-center h-20 w-full bg-transparent mx-auto px-5 absolute z-10 text-white' style={{backgroundColor:'transparent'}}>
    <div>
    <h1 className='text-3xl md:text-4xl font-bold'>BEACHES.</h1>
    </div>
    <div className='md:hidden'>
{
    toggle? <AiOutlineClose onClick={()=>setToggle(!toggle)}/>:<FaBars onClick={()=>setToggle(!toggle)}/>
    
}

</div>
    <ul className='hidden cursor-pointer font-bold  md:flex gap-5 '>
    <li>Home</li>
    <li>Destinations</li>
    <li>Travel</li>
    <li>Views</li>
    <li>Book</li>
    </ul>



<div className='hidden md:flex gap-4 font-bold'>
<BiSearch/>
<BsPerson/>
</div>

{/*Responsive App */}
<div className={`md:hidden fixed ${toggle ?'left-[0]':'left-[-100%]'} top-[80px] px-10 bg-gray-100 text-black w-full h-screen` }>
<ul>

<li className='p-3  border-[slate-300] border-b-2   '>Home</li>
<li className='p-3  border-[slate-300] border-b-2   '>Destinations</li>
<li className='p-3  border-[slate-300] border-b-2   '>Travel</li>
<li className='p-3  border-[slate-300] border-b-2   '>Views</li>
<li className='p-3  border-[slate-300] border-b-2   '>Book</li>

</ul>
<div>
<button className='btn py-4 w-full text-center bg-[blue] text-white my-2 '>Search</button>
<button className='btn py-4 w-full text-center bg-[blue] text-white'>Account</button>
</div>

<div className='flex justify-between mx-10 gap-8 mt-10'>
<FaFacebook className='text-[blue] font-bold text-2xl'/>
<FaTwitter className='text-[blue] font-bold text-2xl'/>
<FaInstagram className='text-[blue] font-bold text-2xl'/>
<FaPinterest className='text-[blue] font-bold text-2xl'/>
<FaYoutube className='text-[blue] font-bold text-2xl'/>


</div>

</div>


    </div>
  )
}

export default Navbar