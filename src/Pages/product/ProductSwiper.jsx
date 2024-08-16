import React, { useRef, useState } from 'react'

import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img1 from '../../assets/product/1.png'
import img2 from '../../assets/Main/2.png'

export default function ProductSwiper() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const NewsSwiperRef = useRef(null);
    let products = [
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img1,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img2,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img1,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img2,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img1,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img2,
        },
        {
            p: "زيت سيارة جيد الصنع لسيارة ستريون",
            img: img1,
        },
    ];
    return (
        <div>

            <div className="product-slider">
                <Swiper
                    modules={[Pagination, Navigation, Thumbs]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    navigation={false}
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                // navigation={true}
                >
                    {products.map((slid) => (
                        <SwiperSlide key={slid}>
                            <div className="productImg" key={slid}>
                                <div className="product-imgContainer">
                                    <a href={slid.img} data-fancybox="post" className="fancyPost">
                                        <LazyLoadImage
                                            className="product-img"
                                            alt="img"
                                            src={slid.img}
                                        />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="thumbs-product-slider">
                <Swiper
                    onBeforeInit={(swiper) => {
                        NewsSwiperRef.current = swiper;
                    }}
                    modules={[Pagination, Navigation, Thumbs]}
                    spaceBetween={"15px"}
                    slidesPerView={6}
                    autoHeight={true}
                    //   loop={true}
                    autoplay={true}
                    navigation={false}
                    slideToClickedSlide={true}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    direction={"horizontal"}
                    breakpoints={{
                        1200: {
                            slidesPerView: 6,
                            pagination: true,
                        },
                        768: {
                            slidesPerView: 4,
                            pagination: true,
                        },
                        540: {
                            slidesPerView: 3,
                            pagination: true,

                        },
                        100: {
                            slidesPerView: 2,
                            pagination: true,

                        },
                    }}
                >
                    {products.map((slid) => (
                        <SwiperSlide key={slid}>
                            <div className="thumpImg" key={slid}>
                                <div className="Thumbs-imgContainer">
                                    <LazyLoadImage
                                        className="product-img"
                                        alt="img"
                                        src={slid.img}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
