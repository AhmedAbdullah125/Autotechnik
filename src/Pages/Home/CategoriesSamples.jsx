import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

import categ1 from '../../assets/Main/categoriesSamples/8.png';
import categ2 from '../../assets/Main/categoriesSamples/7.png';
import categ3 from '../../assets/Main/categoriesSamples/6.png';
import categ4 from '../../assets/Main/categoriesSamples/4.png';
import categ5 from '../../assets/Main/categoriesSamples/5.png';
import categ6 from '../../assets/Main/categoriesSamples/3.png';
import categ7 from '../../assets/Main/categoriesSamples/2.png';
import categ8 from '../../assets/Main/categoriesSamples/1.png';

export default function CategoriesSamples() {
    const NewsSwiperRef = useRef(null);
    let categotries = [
        { id: 1, img: categ1, name: " كباس يدوي" },
        { id: 2, img: categ6, name: "تيل فرامل" },
        { id: 3, img: categ3, name: "شاحن امامي" },
        { id: 4, img: categ4, name: "حامل الهاتف" },
        { id: 4, img: categ5, name: "كشاف خلفي" },
        { id: 5, img: categ2, name: "مفاتيح سيارة" },
        { id: 6, img: categ7, name: "اكسسوارات" },
        { id: 7, img: categ8, name: "زيت سيارة" },
    ]
    return (
        <section className="categories-samples home-swiper">
            <div className="container">
                <h2>تسوق حسب الفئة</h2>
                <div className="category-slider">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            NewsSwiperRef.current = swiper;
                        }}
                        modules={[Pagination]}
                        spaceBetween={15}
                        slidesPerView={8}
                        loop={true}
                        autoplay={true}
                        pagination={true}
                        navigation={false}
                        breakpoints={{
                            2000: {
                                slidesPerView: 8,
                            },
                            1440: {
                                slidesPerView: 7,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                            991: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            540: {
                                slidesPerView: 2,
                            },
                            100: {
                                slidesPerView: 1,
                            },
                        }}

                    >
                        {categotries.map(category =>
                            <SwiperSlide key={category.id}>
                                <div className="brand">
                                    <Link to='/product' className="category-ancor">
                                        <figure className="category-figure">
                                            <img className="category-img img-fluid" alt="image1" src={category.img} />
                                        </figure>
                                        <span>{category.name}</span>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )}

                    </Swiper>
                    <div onClick={() => NewsSwiperRef.current.slidePrev()} className="swiper-button-prev" >
                        <i className="iconsax" icon-name="arrow-left"></i>
                    </div>
                    <div onClick={() => NewsSwiperRef.current.slideNext()} className="swiper-button-next" >
                        <i className="iconsax" icon-name="arrow-right"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
