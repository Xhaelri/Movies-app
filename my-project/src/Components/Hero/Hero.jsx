import React from 'react'
import hero from '../../assets/MCDVETH_SP002.webp'

const Hero = () => {
  return (
    <div>
        <h1  className='mt-5 text-2xl font-bold'>Explore</h1>
        <p className='text-gray-500 mb-5'>What are you gonna watch today ?</p>
        <img src={hero} alt="" className=' w-full object-cover rounded-md' />
    </div>
  )
}

export default Hero