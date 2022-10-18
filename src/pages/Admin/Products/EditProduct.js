import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import AdminSidebar from '../AdminSidebar'
import { Link, useParams } from 'react-router-dom'
import { updateProduct, viewProduct } from '../../../api/productAPI'
import { API } from '../../../config'
import { isAuthenticated } from '../../../api/userAPI'

const EditProduct = () => {
    const [product, setProduct] = useState({
        product_name:'',
        product_price:'',
        product_description:'',
        count_in_stock:'',
        product_image:''
    })

    const {product_name, product_price, product_description, count_in_stock, product_image} = product
    const {id} = useParams()
    const {token} = isAuthenticated()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(()=>{
        viewProduct(id)
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }
            else{
                setProduct(data)
            }
        })
        .catch(error=>console.log(error))
    },[])

    const handleChange = name => e => {
        e.preventDefault()
        setProduct({...product, [name]:e.target.value})
    }

    const handleUpdate = e => {
        e.preventDefault()
        updateProduct(id, product, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess("Product updated Successfully")
            }
        })
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }
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
            <div className='container d-flex shadow-lg '>  
            <div className='p-5 my-5 border-end border-3 text-center'>
                <h2 className='text-center text-decoration-underline'>Product Details</h2>
                <hr className='my-3'></hr>
                <img src={`${API}/${product_image}`} alt= {product_name} style={{height:"300px"}}/>
                <h3>Product Name: <u>{product_name}</u></h3>
                <h3>Price: <u>Rs. {product_price}</u></h3>
                <h3>Description: <u>{product_description}</u></h3>
                <h3>Count in Stock: <u>{count_in_stock}</u></h3>
                
                </div>          
            <form className='w-50 mx-auto p-5 my-5'>
                {showError()}
                <h2 className='text-decoration-underline mb-3'>Update Information</h2>
                <hr className='my-3'></hr>
                <label htmlFor='name'>Product Name</label>
                <input type={'text'} id= 'name' className='form-control mb-3' onChange={handleChange('product_name')} value={product_name}/>
                <label htmlFor='price'>Product Price</label>
                <input type={'text'} id='price' value = {product_price} className = 'form-control mb-3' onChange={handleChange('product_price')}/>
                <label htmlFor='desc'>Description</label>
                <textarea id='desc' className='form-control mb-3' value={product_description} onChange={handleChange('product_description')}/>
                <label htmlFor='stock'>Count in Stock</label>
                <input type={'number'} id='stock' className='form-control mb-3' onChange = {handleChange('count_in_stock')} value={count_in_stock}/>
                {
                    !success ? 
                    <button className='btn btn-warning mt-3 form-control' onClick={handleUpdate}>Update Product</button>
                    : showSuccess()
                }


            </form>
            </div>


        </div>
    </div>

    <Footer />
</>
  )
}

export default EditProduct