import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from '../components/Cartitem'
import { ToastContainer, toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
const Cart = () => {
  const productData = useSelector((state)=> state.bazzar.productData)
  const userInfo =useSelector((state)=>state.bazzar.userInfo)
  const[paynow,setPaynow]=useState(false)
  const[totalAmt,setTotalAmt]=useState('')

  useEffect(()=>{
    let price=0;
    productData.map((item)=>{
      price+=item.price*item.quantity;
      return price
    })
    
    setTotalAmt(parseFloat(price).toFixed(2))
  },[productData])

  const handleCheckOut=()=>{
    if(userInfo){
      setPaynow(true)
    }else{
      toast.error('please sign in to checkout')
    }
  }
  return (
    <div>
      <img
       className='w-full h-60 object-cover'
      src="https://img.freepik.com/free-photo/shopping-cart-filled-with-coins-copy-space-background_23-2148305919.jpg?w=2000" 
      alt="bg-cart" 
      />
     <div className='max-w-screen-xl mx-auto py-20 flex'>
      <Cartitem/>
     <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
         <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'>Cart totals</h2>
          <p className='flex items-center gap-4 text-base'>Subtotal{ " "}<span className='font-titleFont font-bold text-lg'>${totalAmt}</span></p>
          <p className='flex items-start gap-4 text-base'>Shipping{ " "}<span>High quLITY PRODUCT WITH A MARKET VALUE OF HIGH ENTERPRISING </span></p>
         </div>
         <p className='font-titleFont font-semibold flex justify-between mt-6'>
            Total <span className='text-xl font-bold'>${totalAmt}</span>
         </p>
         <button onClick={handleCheckOut} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Proceed to checkout</button>
     {
      paynow&&
       <div className='w-full mt-6 flex items-center justify-center'>
           <StripeCheckout
           stripeKey='pk_test_51Nlt0PSGICoRrYkE1GzaQP2SH4cd0hYZoJpFpQyivVDEAqxpPxa5TsXXP5l8LDoRTxJUDDp663dSnfUmb0tlK5HA00RmCouwmY'
           name='Sale online shopping'
           amount={totalAmt*100}
           label='pay to Sale'
           description={`your payment amount is ${totalAmt}`}
           //token={payment}
           email={userInfo.email}
           
           
           />

      </div>
     }
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

export default Cart
