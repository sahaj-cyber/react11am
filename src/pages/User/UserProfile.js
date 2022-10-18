import React, { useEffect } from 'react'
import { isAuthenticated } from '../../api/userAPI'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../../components/reducer/actions/orderActions'
import {Link} from 'react-router-dom'

const UserProfile = () => {
    const { user } = isAuthenticated()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(myOrders(user._id))
    }, [])

    const myorders = useSelector(state=>state.myOrders.orders)
// console.log(myorders)


    return (
        <>
            <Navbar />
            {/* <h2 className='text-end'>Welcome, {user.username}</h2> */}

            <h4 className='text-decoration-underline'>My Orders</h4>
            <hr className='w-75 mx-auto my-3'/>
            <table className='table my-3 shadow-lg text-center w-75 mx-auto'>
                <thead>
                <tr>
                    <th>S.No.</th>
                    <th>No. of items</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        myorders && 
                        myorders.map((item, i)=>{
                            let order_items_number_arr = item.orderItems.map(items=>items.quantity)
                            let order_items_number = order_items_number_arr.reduce((acc, cur)=>acc+cur)

                            return <tr key={i}>
                                <td>{i+1}</td>
                                <td>{order_items_number}</td>
                                <td>Rs. {item.totalAmount}</td>
                                <td>{item.status}</td>
                                <td>
                                    <Link to={`/user/order/${item._id}`}>View Details</Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

            <Footer />
        </>
    )
}

export default UserProfile