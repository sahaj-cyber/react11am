import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { isAuthenticated } from '../../api/userAPI'
import Card2 from '../../components/CardOrder'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { orderDetails } from '../../components/reducer/actions/orderActions'

const OrderDetails = () => {
    const {id} = useParams()
    const {token} = isAuthenticated()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(orderDetails(id, token))
    }, [])

    const order = useSelector(state=>state.orderDetails.order) 
    console.log(order)

    let order_items_number_arr = order ? order.orderItems.map(items=>items.quantity): []
    let order_items_number = order_items_number_arr.reduce((acc, cur)=>acc+cur)
  return (
    
    <>
    <Navbar/>
    {
        order && 
        <div className='my-5 container mx-auto p-5 shadow-lg'>
            <h2 className='text-decoration-underline mb-3'>Order Details:</h2>
            <h4>No. of Items : {order_items_number}</h4>
            <h4>Total Price: Rs.{order.totalAmount}</h4>
            <h4>Status: {order.status}</h4>
            <h4 className='mb-3'>Items: </h4>
                <div className='row row-cols-md-3 g-4'>
                {
                order.orderItems.map(item=>{
                    return <Card2 product={item.product} quantity={item.quantity}/>
                })

                }
                </div>
                <Link to = "/user/profile"> Go Back</Link>

        </div>
    }

    <Footer/>
    </>
  )
}

export default OrderDetails