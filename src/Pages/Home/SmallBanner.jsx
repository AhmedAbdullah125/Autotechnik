import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

import img1 from '../../assets/Main/smallBanner/1.png'
import img2 from '../../assets/Main/smallBanner/2.png'
import img3 from '../../assets/Main/smallBanner/3.png'
import img4 from '../../assets/Main/smallBanner/4.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';





export default function SmallBanner() {
    const NewsSwiperRef = useRef(null);
    return (
        <div className='small-banner container'>
            <div className="wide-img">
                <LazyLoadImage src={img1}></LazyLoadImage>
                <div className="overlay">
                    <p className='overLay-p'>خصم 50 % علي اول طلب الحق بسررررعة</p>
                </div>
            </div>
            <div className="small-imgs-cont">
                <Swiper
                    onBeforeInit={(swiper) => {
                        NewsSwiperRef.current = swiper;
                    }}
                    modules={[Pagination]}
                    spaceBetween={15}
                    slidesPerView={3}
                    loop={true}
                    autoplay={true}
                    pagination={true}
                    navigation={false}
                    breakpoints={{
                        1200: {
                            slidesPerView: 3,
                        },
                        991: {
                            slidesPerView: 3,
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
                            <LazyLoadImage src={img4}></LazyLoadImage>
                            <div className="overlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="small-img">
                            <LazyLoadImage src={img3}></LazyLoadImage>
                            <div className="overlay"></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="small-img">
                            <LazyLoadImage src={img2}></LazyLoadImage>
                            <div className="overlay"></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
