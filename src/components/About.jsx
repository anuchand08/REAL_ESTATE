import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto px-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about Properties, Dedicated to your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'> 
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
      <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
        <div>
            <p className='text-4xl font-medium text-gray-800'>10+</p>
            <p>Years of Experiance</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>12+</p>
            <p>Projects completed</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>20+</p>
            <p>Mn. Sq. ft. Deliverd</p>
        </div>
        <div>
            <p className='text-4xl font-medium text-gray-800'>25+</p>
            <p>Ongoing Projects</p>
        </div>       
        </div>
        <p className='my-10 max-w-lg'>Estate is a trusted real estate sales company focused on helping clients find the perfect property. Specializing in residential and commercial sales, we deliver personalized service, market expertise, and a commitment to excellence. Our mission is to simplify the buying process and ensure every client experiences a seamless and rewarding journey toward property ownership.</p>
        <button className='bg-blue-500 text-white px-8 py-2 rounded'>LearnMore</button>
      </div>
      </div>
    </div>
  )
}

export default About
