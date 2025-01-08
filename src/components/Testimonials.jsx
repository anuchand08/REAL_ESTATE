import React from 'react'
import {assets, testimonialsData } from '../assets/assets'
const Testimonials = () => {
  return (
    <div className='container py-4 pt-20 mx-auto px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonial'>
    <div className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customres <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonial</span></div>
    <p className='text-center max-w-80 text-gray-800 mb-8 mx-auto'>Real Stories from Those who found Home with Us</p>
    
    <div className='flex flex-wrap justify-center gap-8'>
{testimonialsData.map((testimonial,index)=>(
    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt}/>

        <h2 className='text-2xl text-gray-700 font-medium'>{testimonial.name}</h2>
        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
        <div className='flex justify-center gap-1 text-red-500 mb-4'>
            {Array.from({length : testimonial.rating}, (item,index)=>(
                <img src={assets.star_icon} alt=''/>
            ))}
        </div>
        <p className='text-gray-600'>{testimonial.text}</p>
    </div>
))}
    </div>
    
    </div>
    
  )      
}

export default Testimonials
