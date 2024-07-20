import React from 'react'
import error404 from "../../assets/404.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function NotFound() {
    return (
        <div>
            {/* <h1 className='pg-worning text-center'>Page Not Found</h1> */}
            <LazyLoadImage src={error404} className='w-100'></LazyLoadImage>
        </div>
    )
}
