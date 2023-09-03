import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product' 
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import Cart from './pages/Cart'
import { productData } from './api/Api'
import Login from './pages/Login'

const Layout=()=>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:productData,
      },{
        path:"/cart",
        element:<Cart/>,
      },{
        path:"/Product/:id",
        element:<Product/>
      },{
        path:'/login',
        element:<Login/>,
      }
    ]
  }
])

function App() {
  return (
    <div className='font-bodyFont'>
     <RouterProvider router={router}/>
     
    </div>
  )
}

export default App
