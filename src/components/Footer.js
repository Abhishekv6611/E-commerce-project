import React from 'react'
import { sale } from '../assets'
import {AiFillGithub} from 'react-icons/ai';
import { FaHome, FaYoutube} from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import{MdLocationOn} from 'react-icons/md';
import{BsPersonFill,BsPaypal} from 'react-icons/bs';
import{logoLight,paymentLogo} from '../assets';
function Footer() {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
            <img className='w-32' src={sale} alt="logo" />
            <p className='text-white text-sm tracking-wide'>@MyProject.com</p>
            <div className='flex gap-5 text-lg text-gray-500'>
                <AiFillGithub className='hover:text-white duration-300 cursor-pointer'/>
                <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
                <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
            </div>
        </div>
       <div>
       <h2 className='text-2xl font-semibold text-white mb-4 cursor-pointer'>Locate Us</h2>
        <div className='text-base flex flex-col gap-2 cursor-pointer '>
          <p className='hover:text-white duration-300'>MBD,Ruwi, Muscat-oman</p>
          <p className='hover:text-white duration-300'>Mobile: 00960 9786457</p>
          <p className='hover:text-white duration-300'>Phone: 8086611724</p>
          <p className='hover:text-white duration-300'>e-mail: abhishekv6611@gmail.com</p>
        </div>
       </div>
       <div>
       <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
       <div className='flex flex-col gap-2 text-base'>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span><BsPersonFill/></span>{" "}
        my account</p>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span><BsPaypal/></span>{" "}
        chechout</p>
       <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span><FaHome/></span>{" "}
        order tracking</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span><MdLocationOn/></span>{" "}
        Help and Support</p>
        </div>
       </div>
       <div className='flex flex-col justify-center'>
        <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
        <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
       </div>

      </div>
    </div>
  )
}

export default Footer
