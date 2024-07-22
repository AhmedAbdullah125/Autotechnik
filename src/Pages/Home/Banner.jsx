import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import car from '../../assets/Main/2.png'
import bg from '../../assets/Main/1.png'
import vector from '../../assets/Main/aero.png'


export default function Banner() {
    const NewsSwiperRef = useRef(null);

    return (

        <Swiper
            onBeforeInit={(swiper) => {
                NewsSwiperRef.current = swiper;
            }}
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={8}
            loop={true}
            autoplay={true}
            pagination={true}
            navigation={false}
            breakpoints={{
                1200: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                540: {
                    slidesPerView: 1,
                },
                100: {
                    slidesPerView: 1,
                },
            }}

        >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>

        </Swiper>


    )
}
