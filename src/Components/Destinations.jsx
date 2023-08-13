import React from 'react'
import BoaBora from '../assets/BoraBora.jpg'
import BoaBora2 from '../assets/BoraBora2.jpg'
import Maldives from '../assets/Maldives.jpg'
import Maldives2 from '../assets/Maldives2.jpg'
import KeyWest from '../assets/KeyWest.jpg'
const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1 className='font-bold text-3xl'>All- Inclusive Resorts</h1>
    <p className='font-light text-sm py-4'> On the Caribbean's Best Beaches</p>
<div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
<img src={BoaBora} alt='img' className='w-full h-full object-cover col-span-2  md:col-span-3 row-span-2'></img>
<img src={BoaBora2} alt='img' className='w-full h-full object-cover'></img>
<img src={Maldives} alt='img' className='w-full h-full object-cover'></img>
<img src={Maldives2} alt='img' className='w-full h-full object-cover'></img>
<img src={KeyWest} alt='img' className='w-full h-full object-cover'></img>

</div>    
    
    </div>
  )
}

export default Destinations