import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Main/categoriesSamples/8.png';
import img2 from '../../assets/Main/categoriesSamples/7.png';
import img3 from '../../assets/Main/categoriesSamples/1.png';
import img4 from '../../assets/Main/categoriesSamples/2.png';

let products = [
    { id: 1, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img4, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false },
    { id: 1, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img2, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: true },
    { id: 1, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img3, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false },
    { id: 1, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img1, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false },
]

export default function MostPopular2() {
    const NewsSwiperRef = useRef(null);

    return (
        <div className='mostPopular container'>
            <div className="mostPopular-heading">
                <span>الاكثر انتشارا</span>
                <Link to='/'>شاهد الكل</Link>
            </div>
            <div className="mostPopular-cont">
                <div className="most-pop-products-cont">
                    <Swiper
                        onBeforeInit={(swiper) => {
                            NewsSwiperRef.current = swiper;
                        }}
                        modules={[Pagination]}
                        spaceBetween={9}
                        slidesPerView={4}
                        loop={true}
                        autoplay={true}
                        pagination={true}
                        navigation={false}
                        breakpoints={{
                            1200: {
                                slidesPerView: 4,
                            },
                            991: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            540: {
                                slidesPerView: 2,
                            },
                            100: {
                                slidesPerView: 2,
                            },
                        }}

                    >

                        {
                            products.map((ele) =>
                                <SwiperSlide>
                                    <div className="product" key={ele.id}>
                                        <div className="img-cont">
                                            <figure className='img-figure'>
                                                <LazyLoadImage src={ele.img} alt='product'></LazyLoadImage>
                                            </figure>
                                            <div className="rates">
                                                <span className='rate-qunt'>({ele.rateQuantity})</span><i class="fa-solid fa-star"></i><span className='rate'>{ele.rate}</span>
                                            </div>
                                            {ele.offer ?
                                                <div className="offer">
                                                    <a className="red-btn" href='/'>خصم 40 %</a>
                                                </div>
                                                : ""}
                                        </div>
                                        <div className="discount">
                                            <span>{ele.discount}% تخفيض علي المنتج</span>
                                        </div>
                                        <div className="product-details">
                                            <div className="product-name">
                                                <span>{ele.name}</span>
                                            </div>
                                            <div className="product-brand">
                                                <span>{ele.brand}</span>
                                            </div>
                                            <div className="product-price">
                                                <div className="new-pric">
                                                    <span className='price'>{ele.newPrice}</span><span>ج.م</span>
                                                </div>
                                                <div className="old-pric">
                                                    <span className='price'>{ele.oldPrice}</span><span>ج.م</span>
                                                </div>
                                            </div>
                                            <div className="product-spics">
                                                <div className="spic"><i class="iconsax" icon-name="speedometer"></i><span>{ele.miles} كم</span></div>
                                                <div className="spic"><i class="iconsax" icon-name="calendar-1"></i><span>{ele.date}</span></div>
                                                <div className="spic"><i class="fa-solid fa-gears"></i><span>{ele.gear}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    )
}
