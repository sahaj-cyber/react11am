import React, { useState } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import AdminSidebar from '../AdminSidebar'
import { Link } from 'react-router-dom'

const DeleteProduct = () => {
    const [products, setProducts] = useState('')
  return (
    <>
    <Navbar />
    <div className='row'>
        <div className='col-md-3'>
            <AdminSidebar products />
        </div>
        <div className='col-md-9 p-5 text-start'>
            <div className='d-flex justify-content-between w-75'>
                <h3>
                    Products
                </h3>
                <Link to='/admin/product/add' className='btn btn-primary'>Add Product</Link>

            </div>
            <div className='container'>            
            <table className='table table-hover table-striped text-center p-3 my-5 shadow-lg'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Name</th>
                        <th>In Stock</th>
                        <th>Unit Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
            </div>


        </div>
    </div>

    <Footer />
</>
  )
}

export default DeleteProduct