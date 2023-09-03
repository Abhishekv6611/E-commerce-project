import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../redux/Sale'
import { ToastContainer, toast } from 'react-toastify'; // Assuming you're using react-toastify for toasts
import 'react-toastify/dist/ReactToastify.css'


const Product = () => {
    const[details,setDetails]=useState({})
    const[baseQuantity,setBaseQunatity]=useState(1)
    const location=useLocation()
    const dispatch =useDispatch()
    
    useEffect(()=>{
       setDetails(location.state.item)
    },[])
 

  return (
    <div>
       <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
            <img 
            className='w-full h-[550px] object-cover' 
            src={details.image} 
            alt="productImg" 
            />
            <div className='absolute top-4 right-0'>
                {
                    details.isNew && (
                        <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>
                    )
                }
            </div>
        </div>
        <div className='w-3/5 flex flex-col justify-center gap-12'>
            <div>
                <h2 className='text-4xl font-semibold'>{details.title}</h2>
                <div className='flex items-center gap-4 mt-3'>
                <p className='line-through text-gray-500'>${details.oldPrice}</p>
                   <p className='font-semibold'>${details.price}</p>
                </div>
            </div>
              <div className='flex items-center gap-2 text-base'>
               <div className='flex'>
               <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
                <MdOutlineStar/>
               </div>
                <p className='text-xs text-gray-500'>
                    (1 Customer review)
                </p>
              </div>
              <p className='text-base text-gray-500 mt-3 font-semibold'>{details.description}</p>
              <div className='flex gap-4'>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                    <p className='text-sm font-semibold'>Quantity</p>
                    <div className='flex items-center gap-4 text-sm font-semibold'>
                    <button onClick={() => setBaseQunatity(baseQuantity === 1 ? 1 : baseQuantity - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                      <span>{baseQuantity}</span>
                      <button onClick={() => setBaseQunatity(baseQuantity + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                    </div>
                </div>
                <button 
                onClick={()=>dispatch(addToCart({
            
                        _id: details._id,
                        title:details.title,
                        image:details.image,
                        price:details.price,
                        quantity:baseQuantity,
                        description:details.description,
                
                })
                )& toast.success(`${details.title} is added`)
            }
                className='bg-black text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
              </div>
              <p className='text-base text-gray-500 font-semibold'><span className=' capitalize'>  Category : {details.category}</span></p>
        </div>
       </div>
       <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false} // Fixed typo here
        closeOnClick
        rtl={false}
        pauseOnFocusLoss // Fixed typo here
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default Product
