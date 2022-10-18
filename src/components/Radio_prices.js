import React, { useState } from 'react'
import { prices } from './Prices'

const Radio_prices = ({handleFilter}) => {
    const [checked, setChecked] = useState([])
    const handleChange = (e) => {
        setChecked(e.target.value)
        let priceValue = handlePrice(e.target.value)
        handleFilter(priceValue, 'product_price')
    }

    const handlePrice = index => {
        let priceSearch = prices.find(price=>price.id == index)
        return priceSearch.value
    }
    return (
        <>
            <h4 className='mt-3'>Prices</h4>{
                prices.map((price, i) => {
                    return <div className="form-check">
                        <input className="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id={`flexRadioDefault1${i}`} onChange={handleChange} value={price.id} />
                        <label className="form-check-label" for={`flexRadioDefault1${i}`}>
                            {price.name}
                        </label>
                    </div>
                })
            }


        </>
    )
}

export default Radio_prices