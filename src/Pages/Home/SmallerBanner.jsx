import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

import img1 from '../../assets/Main/smallBanner/5.png'
import img2 from '../../assets/Main/smallBanner/6.png'
import img3 from '../../assets/Main/smallBanner/7.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';





export default function SmallerBanner() {
    const NewsSwiperRef = useRef(null);
    return (
        <div className="smaller">
            <div className='small-banner container'>
                <div className="wide-img">
                    <LazyLoadImage src={img1}></LazyLoadImage>
                    <div className="overlay">
                        <p className='overLay-p'>خصم 50 %عربيتك الحق هنخليها تطير</p>
                    </div>
                </div>
                <div className="small-imgs-cont">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            NewsSwiperRef.current = swiper;
                        }}
                        modules={[Pagination]}
                        spaceBetween={15}
                        slidesPerView={2}
                        loop={true}
                        autoplay={true}
                        pagination={true}
                        navigation={false}
                        breakpoints={{
                            1200: {
                                slidesPerView: 2,
                            },
                            991: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
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
                            <div className="small-img">
                                <LazyLoadImage src={img3}></LazyLoadImage>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="small-img">
                                <LazyLoadImage src={img2}></LazyLoadImage>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}