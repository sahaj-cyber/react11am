import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { API } from '../config'
import { addItemToCart, removeItemFromCart } from '../components/reducer/actions/cartActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart_items = useSelector(state => state.cart.cart_items)
  const dispatch = useDispatch()

  console.log(cart_items)
  const reduceFromCart = (id, quantity) => e => {
    e.preventDefault()
    quantity--
    if (quantity <= 0) {
      dispatch(removeItemFromCart(id))
      toast.error("Item removed from cart")
      return
    }
    dispatch(addItemToCart(id, quantity))
    toast.success("item quantity decreased")
  }

  const increaseInCart = (id, quantity, stock) => e => {
    e.preventDefault()
    quantity++
    if (quantity > stock) {
      toast.error("out of stock")
      return
    }
    dispatch(addItemToCart(id, quantity))
    toast.success("item quantity increased")
  }
  const removeFromCart = (id) => e => {
    e.preventDefault()
    dispatch(removeItemFromCart(id))
    toast.error("item removed from cart.")

  }

  return (
    <>
      <Navbar />
      <ToastContainer theme='colored' position='top-left' />
      <div className='container mx-auto my-5 p-5'>
        {
          cart_items.length > 0 ?
            <table className='table text-center table-hover table-bordered table-striped'>
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart_items.map((item, i) => {
                    return <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <img src={`${API}/${item.image}`} style={{ height: "150px" }} />
                      </td>
                      <td>{item.name}</td>
                      <td>Rs.{item.price}</td>
                      <td>
                        <div className='btn-group'>
                          <button className='btn btn-warning' onClick={reduceFromCart(item.product, item.quantity)}>-</button>
                          <div className='px-3'>{item.quantity}</div>
                          <button className='btn btn-success' onClick={increaseInCart(item.product, item.quantity, item.stock)}>+</button>
                        </div>
                      </td>
                      <td><button className='btn btn-danger' onClick={removeFromCart(item.product)}><i className='bi bi-trash'></i></button></td>
                    </tr>

                  })
                }
                <tr>
                  <td colSpan={6}><Link to='/confirmorder' className='btn btn-warning'>Proceed to Checkout</Link></td>
                </tr>

              </tbody>
            </table>

            :
            <div className='alert alert-danger'>No items in cart.</div>

        }
      </div>
      <Footer />
    </>
  )
}

export default Cart