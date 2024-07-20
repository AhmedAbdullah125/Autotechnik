import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import car from '../../assets/Main/2.png'
import bg from '../../assets/Main/1.png'
import vector from '../../assets/Main/aero.png'


export default function Banner() {
    return (
        <div className='banner'>
            <div className="banner-title">
                <h2>متحملش هم مستلزمات عربيتك كلة عندنا دلوقتي</h2>
                <p>منتجات عربيتك بكل سهولة تقدر تشتريها بسعر ينافس الكل</p>
                <Link to='/Accessories' className='red-btn'>اشتري الان</Link>
            </div>

            <div className="banner-img" >
                <LazyLoadImage src={car} className='banner-car'></LazyLoadImage>
                <div className="bg-img" >
                    <LazyLoadImage src={bg}></LazyLoadImage>
                </div>
                <div className="vector-cont">
                    <LazyLoadImage src={vector}></LazyLoadImage>
                </div>
            </div>
        </div>
    )
}
