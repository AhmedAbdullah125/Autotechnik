import React from 'react'
import ProductSwiper from './ProductSwiper'
import ProductDetails from './ProductDetails'

export default function Review() {
    return (
        <div className='review row'>
            <div className="images col-xl-6 col-md-12 col-sm-12">
                <ProductSwiper></ProductSwiper>
            </div>
            <div className="details col-xl-6 col-md-12 col-sm-12">
                <ProductDetails/>
            </div>
        </div>
    )
}
