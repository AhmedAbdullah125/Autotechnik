import React from 'react'
import Review from './Review'
import MostPopular from '../Home/MostPopular'

export default function Product() {
    return (
        <div className='product container'>
            <Review></Review>
            <MostPopular></MostPopular>
        </div>
    )
}
