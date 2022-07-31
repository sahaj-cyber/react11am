import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
  return (
    <>
      <Navbar/>
      <div className='container mx-auto my-5 p-5'>
      <table className='table text-center table-hover table-bordered table-striped'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product Image</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src='./images/img1.jpg' style={{height: "100px"}}/>
            </td>
            <td>
              <h4>Laptop</h4>
              <h5>Rs. 100000</h5>
              <p>adasdflkjdflsfkldfkljfsdfklkdfjsdk fslkdfjldksfj fjjkl</p>
            </td>
            <td>
              <button className='btn btn-warning'>Update</button>
              <button className='btn btn-danger'>Remove</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src='./images/img2.jpg' style={{height: "100px"}}/>
            </td>
            <td>
              <h4>Laptop</h4>
              <h5>Rs. 100000</h5>
              <p>adasdflkjdflsfkldfkljfsdfklkdfjsdk fslkdfjldksfj fjjkl</p>
            </td>
            <td>
              <button className='btn btn-warning'>Update</button>
              <button className='btn btn-danger'>Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <Footer/>
    </>
  )
}

export default Cart