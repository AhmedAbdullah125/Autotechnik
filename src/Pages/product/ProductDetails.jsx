import React, { useState } from 'react'
import Product from './Product';
import { Link } from 'react-router-dom';
import Feature from './Feature';

export default function ProductDetails() {
    let product = { rating: 4.7, numOfRates: '21,671', brand: "ماركة توتال", miles: "38,500", date: 2022, gear: "اوتوماتيك", price:"1,300,000"};
    let [quantity, setQuantity] = useState(1);
    function plus() {
        setQuantity(quantity + 1)
    }
    function minus() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className='product-details'>
            <div className="productr-rating">
                <div className="stars">
                    <i class="fa-solid fa-star" style={{ color: Math.round(product.rating) >= 1 ? "#FA8232" : "#828282" }}></i>
                    <i class="fa-solid fa-star" style={{ color: Math.round(product.rating) >= 2 ? "#FA8232" : "#828282" }}></i>
                    <i class="fa-solid fa-star" style={{ color: Math.round(product.rating) >= 3 ? "#FA8232" : "#828282" }}></i>
                    <i class="fa-solid fa-star" style={{ color: Math.round(product.rating) >= 4 ? "#FA8232" : "#828282" }}></i>
                    <i class="fa-solid fa-star" style={{ color: Math.round(product.rating) >= 5 ? "#FA8232" : "#828282" }}></i>
                </div>
                <div className="rating-numbers">
                    <span>4.7 تقييم </span>
                </div>
                <div className="num-rates">
                    <span>({product.numOfRates} تقييمات مستخدمين)</span>
                </div>
            </div>
            <p className='product-title'>
                زيت سيارة جيد الصنع لسيارة ستريون
            </p>
            <p className='brand-name'>
                {product.brand}
            </p>
            <div className="product-spics">
                <div className="spic"><i class="iconsax" icon-name="speedometer"></i><span>{product.miles} كم</span></div>
                <div className="spic"><i class="iconsax" icon-name="calendar-1"></i><span>{product.date}</span></div>
                <div className="spic"><i class="fa-solid fa-gears"></i><span>{product.gear}</span></div>
            </div>
            <p className='hagm'>الحجم</p>
            <form className="select-options" action=''>
                <label htmlFor="hagm1">
                    <input type="radio" name='hagm' id='hagm1' />
                    5 لتر (+ر.س5)
                    <span className='checkmark'></span>
                </label>
                <label htmlFor="hagm2">
                    <input type="radio" name='hagm' id='hagm2' />
                    4 لتر (+ر.س5)
                    <span className='checkmark'></span>
                </label>
                <label htmlFor="hagm3">
                    <input type="radio" name='hagm' id='hagm3' />
                    3 لتر (+ر.س5)
                    <span className='checkmark'></span>
                </label>
            </form>
            <div className="price-cont">
                <div className="r-side">
                    <p className='price-title'>السعر</p>
                    <p className='price'><span>ر.س</span>{product.price}</p>
                </div>
                <div className="l-side">
                    <button className='price' onClick={plus}>+</button>
                    <span>{quantity}</span>
                    <button className='price' onClick={minus}>-</button>
                </div>
            </div>
            <div className="prod-discount">
                <span>20% تخفيض علي المنتج</span>
            </div>
            <div className="tax-details">
                <span className='shamel'> شامل مصاريف الشحن</span><Link to={'/'} className='know'><span> اعرف اكتر </span> <i class="fa-regular fa-circle-question"></i></Link>
            </div>
            <Feature></Feature>
            <div className="btnns">
                <Link to="orders" className='red-btnn'>اضافة للسلة</Link>
                <Link to="orders" className='white-btnn'>شراء الان </Link>
            </div>
            <div className="eshara">
                <span className="exclamation">i</span>
                <span>في حالة تم الغاء الحجز، هتوصلك رسالة من AutoTechnich نبلغك فيها أن المنتج متاحة للحجز من جديد.</span>
            </div>
        </div>
    )
}
