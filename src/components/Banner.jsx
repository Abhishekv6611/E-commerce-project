import React, { useState } from 'react'
import { bannerone, bannerthree, bannertwo } from '../assets'
import {BsArrowRight } from 'react-icons/bs';
import {BsArrowLeft } from 'react-icons/bs';

function Banner() {
    const[currentSlide,setCurrenSlide]=useState(0)
    const prevSlide=()=>{
    setCurrenSlide(currentSlide===0?2:(prev)=>prev-1)
    }
    const nextSlide=()=>{
        setCurrenSlide(currentSlide===2?0:(prev)=>prev+1)
        }
    
  return (
    <div className='w-full h-auto overflow-hidden'>
      <div className='w-screen h-[650px] relative'>
        <div 
        style={{transform:`translateX(-${currentSlide*100}vw)`}}
         className='w-[400vw] h-50 flex  transition-transform duration-1000'>
            <img 
            className='w-screen h-full object-cover'
            src={bannerone} 
            alt="imgone"
             />
              <img 
               className='w-screen h-full object-cover'
            src={bannertwo} 
            alt="imgone"
             />
              <img 
               className='w-screen h-full object-cover'
            src={bannerthree} 
            alt="imgone"
             />
        </div>
           <div className=' absolute right-0 left-0 gap-8 w-fit mx-auto bottom-1 flex'>
            <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                <BsArrowRight/>
            </div>
            <div onClick={nextSlide}  className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                <BsArrowLeft/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
