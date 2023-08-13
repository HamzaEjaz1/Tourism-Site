import React from 'react'
import BeachVid from '../assets/beachVid.mp4'
import { FaSearch } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='w-full min-h-screen  relative'>
    <video className='h-screen w-full object-cover' 
    src={BeachVid}
    autoPlay
    loop 
    muted 
    ></video>
   
   <div className='absolute flex flex-col justify-center items-center w-full h-full top-0 left-0'>
   <h1 className='text-6xl font-bold my-4 text-white'>First Class Travel</h1>
   <h2 className='text-2xl font-bold  text-white'>Top 1% Location WorldWide</h2>
  <form className='flex mt-2 justify-between items-center max-w-[500px] mx-auto w-full border p-1  sm:mx-5 rounded text-black bg-gray-100'>
  <div className=''>
  <input type='text' className='sm:w-[300px] md:w-[400px] border-none focus:border-none focus:outline-none p-2 bg-transparent' placeholder='Search Destinations'></input>
  </div>
  <div>
  <button><FaSearch size={20} className=''/></button>
  </div>
  
  
  </form>
   </div>
    </div>
  )
}

export default Hero