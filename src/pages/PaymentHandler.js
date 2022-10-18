import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { API } from '../config'
import Payment from './Payment'

const PaymentHandler = () => {
    const [stripeKey, setStripeKey] = useState('')

    const getStripeKey = () => {
        return fetch(`${API}/getStripeKey`,{method:"GET"})
        .then(res=>res.json())
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getStripeKey()
        .then(data=>{
            setStripeKey(data.stripeApiKey)
        })
    },[])



  return (
    stripeKey && 
    <Elements stripe={loadStripe(stripeKey)}>
        <Payment/>
    </Elements>
  )
}

export default PaymentHandler