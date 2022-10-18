import React, { useEffect, useState } from 'react'
import { getFilteredProducts } from '../api/productAPI'
import Card from '../components/Card'
import Checkbox_categories from '../components/Checkbox_categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Radio_prices from '../components/Radio_prices'

const Deals = () => {
    const [sortby, setSortBy] = useState('product_price')
    const [order, setOrder] = useState(-1)
    const [limit, setLimit] = useState(8)
    const [size, setSize] = useState(0)
    const [skip, setSkip] = useState(0)

    const [myFilter, setMyFilter] = useState({
        filters: { category: [], product_price: [] }
    })
    const [filteredProduct, setFilteredProduct] = useState([])

    useEffect(() => {
        getFilteredProducts(myFilter, sortby, order, limit, skip)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setFilteredProduct(data.filteredProduct)
                    setSize(data.size)
                    console.log(data)
                }
            })
    }, [myFilter])

    const handleFilter = (filters, filterBy) => {
        let newFilter = { ...myFilter }
        newFilter.filters[filterBy] = filters
        setMyFilter(newFilter)
        console.log(newFilter)
    }

    const loadMore = (e) => {
        e.preventDefault()
        let toSkip = skip + limit
        getFilteredProducts(myFilter, sortby, order, limit, toSkip)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setFilteredProduct([...filteredProduct, ...data.filteredProduct])
                    setSize(data.size)
                    setSkip(toSkip)
                }
            })
    }

    return (
        <>
            <Navbar />
            <div className='row'>
                <div className='col-md-3 text-start'>
                    <Checkbox_categories handleFilter={handleFilter} />

                    <Radio_prices handleFilter={handleFilter} />

                </div>
                <div className='col-md-9'>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        {
                            filteredProduct.map((product, i) => {
                                return <Card key={i} product={product} />
                            })
                        }
                    </div>
                    <button className='btn btn-warning' onClick={loadMore}>Load More</button>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Deals