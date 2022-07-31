import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'

const Cart = () => {
    const items_in_cart = useSelector(store => store.cartStore.cart_items)
    const dispatch = useDispatch()

    return (
        <>
            <Navbar />
            <h3>Cart</h3>
            <div className='container mx-auto'>
                {
                    items_in_cart.length > 0 ?
                        <table className='table text-center align-middle table-hover table-bordered'>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Product</th>
                                    <th>Product Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items_in_cart.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>
                                            <img src={item.product_image} style={{ height: '150px' }} />
                                        </td>
                                        <td>
                                            <h5>{item.product_name}</h5>
                                            <h5>{item.product_price}</h5>
                                            <h5>{item.product_description}</h5>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}><i className='bi bi-trash'></i></button>
                                        </td>
                                    </tr>
                                })}
                                <tr><td colSpan={4}><button className='btn btn-danger' onClick={() => dispatch({ type: "CLEAR_CART" })}>EMPTY CART</button></td></tr>
                            </tbody>
                        </table>
                        :
                        <div className='alert alert-danger'>No items in Cart</div>

                }
            </div>
        </>
    )
}

export default Cart