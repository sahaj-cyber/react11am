import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const PaymentSuccess = () => {
  return (
    <>
        <Navbar/>

            <div className='alert alert-success'>Your order has been placed successfully. Go to <Link to = '/user/profile'>Profile</Link></div>
        <Footer/>
    </>
  )
}

export default PaymentSuccess