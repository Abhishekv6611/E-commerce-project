import React from 'react'
import { cart, sale } from '../assets/index.js'
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart.jsx'
import { useSelector } from 'react-redux'

const Header = () => {
  const productData = useSelector((state)=> state.bazzar.productData)
  const userInfo =useSelector((state)=>state.bazzar.userInfo)
console.log(userInfo)

  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to={'/'}>
        <div>
            <img className='w-40 bg-transparent'src={sale} alt="imglogo" />
        </div>
        </Link>
      <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
            <Link to='/'><li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[-1px] cursor-pointer duration-300'>Home</li></Link>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[-1px] cursor-pointer duration-300'>Pages</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[-1px] cursor-pointer duration-300'>Shop</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[-1px] cursor-pointer duration-300'>Element</li>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[-1px] cursor-pointer duration-300'>Blog</li>
        </ul>
        <Link to='/Cart'>
        <div className='relative'>
          <img className='w-7 cursor-pointer' src={cart} alt="cart" />
        </div>
        </Link>
        <Link to='/login'>
        <img 
        className='w-8 h-8 rounded-full '
        src={userInfo? userInfo.image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXCR1X5te8LIQXneHmHfrCW0HVmICHJxdG55ELlS8&s"}
         alt="userlogo" />
        </Link>
      </div>
      </div>
     
    </div>
  )
}

export default Header
