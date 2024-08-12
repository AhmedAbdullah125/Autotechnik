import React, { useRef } from 'react'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Main/categoriesSamples/8.png';
import img2 from '../../assets/Main/categoriesSamples/7.png';
import img3 from '../../assets/Main/categoriesSamples/6.png';
import img4 from '../../assets/Main/categoriesSamples/4.png';

let products = [
    { id: 0, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img1, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false, love: false },
    { id: 1, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img2, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false, love: false },
    { id: 2, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img3, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: false, love: true },
    { id: 3, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img4, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: true, love: false },
    { id: 4, name: "زيت سيارات جودة عالية", rate: "4.7", rateQuantity: "125", img: img1, discount: "20", brand: "ماركة موبل", newPrice: "1,050,000", oldPrice: "1,020,000", miles: "38,500", date: 2022, gear: "اوتوماتيك", offer: true, love: false },
]


function setFavourite(id) {
    if (products[id].love == false) {
        products[id].love = true;
        document.getElementById(id).style.color = "#FD0003";
        document.getElementById(id).classList.add("fa-solid");
        document.getElementById(id).classList.remove("fa-regular");
    }
    else{
        products[id].love = false;
        document.getElementById(id).style.color = "#252525";
        document.getElementById(id).classList.remove("fa-solid");
        document.getElementById(id).classList.add("fa-regular");
    }

}
export default function MostPopular() {
    const NewsSwiperRef = useRef(null);

    return (
        <div className='mostPopular container home-swiper'>
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
                        spaceBetween={0}
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
                                            <div className="order-cart">
                                                <i class="iconsax" icon-name="shopping-cart"></i>
                                            </div>
                                            <div className="order-heart order-cart">
                                                <i class={ele.love?"fa-heart fa-solid":"fa-heart fa-regular"} id={ele.id} onClick={() => setFavourite(ele.id)} style={{ color: ele.love ? "#FD0003" : "" }} ></i>
                                            </div>
                                            {ele.offer ?
                                                <div className="offer">
                                                    <a className="red-btn" href='/'>الاكثر طلبا</a>
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
                    <div onClick={() => NewsSwiperRef.current.slidePrev()} className="swiper-button-prev" >
                        <i className="iconsax" icon-name="arrow-left"></i>
                    </div>
                    <div onClick={() => NewsSwiperRef.current.slideNext()} className="swiper-button-next" >
                        <i className="iconsax" icon-name="arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
