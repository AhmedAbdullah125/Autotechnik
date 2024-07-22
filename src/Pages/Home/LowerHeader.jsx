import React from 'react'
import { Link } from 'react-router-dom'

export default function LowerHeader() {
    return (
        <div className='lower-header'>
            <div className="container">
                <div className='lower-header-cont'>
                    <div className="r-side">
                        <Link to='/'>الصفحة الرئيسية</Link>
                        <Link to='/'>خدماتنا</Link>
                        <Link to='/'>زيت سيارة</Link>
                        <Link to='/'>اكسسوارات</Link>
                        <Link to='/'>مفاتيح</Link>
                        <Link to='/'>كشاف</Link>
                        <Link to='/'>حامل</Link>
                        <Link to='/'>شواحن</Link>
                        <Link to='/'>تيل فرامل</Link>
                        <Link to='/'>تيل فرامل</Link>
                        <Link to='/'>كباس يدوي</Link>
                    </div>
                    <div className="l-side">
                        <div className="user-profile dropdown">
                            <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                <div className="user-info">
                                    <span>المنتجات الرائجة</span>
                                    <i className="iconsax" icon-name="chevron-down"></i>
                                </div>
                            </div>
                            <ul className="profile-menu dropdown-menu">
                                <li>
                                    <a href="/account/general">
                                        <i className="iconsax" icon-name="user-1"></i>
                                        <span>حسابي</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/orders/01">
                                        <i className="iconsax" icon-name="basket-tick-1"></i>
                                        <span>طلباتي السابقة</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#contact">
                                        <i className="iconsax" icon-name="message-dash-2"></i>
                                        <span>تواصل معنا</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="logout">
                                        <i className="iconsax" icon-name="logout-2"></i>
                                        <span>الخروج</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="user-profile dropdown">
                            <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                <div className="user-info">
                                    <span>على وشك الانتهاء</span>
                                    <i className="iconsax" icon-name="chevron-down"></i>
                                </div>
                            </div>
                            <ul className="profile-menu dropdown-menu">
                                <li>
                                    <a href="/account/general">
                                        <i className="iconsax" icon-name="user-1"></i>
                                        <span>حسابي</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/orders/01">
                                        <i className="iconsax" icon-name="basket-tick-1"></i>
                                        <span>طلباتي السابقة</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#contact">
                                        <i className="iconsax" icon-name="message-dash-2"></i>
                                        <span>تواصل معنا</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="logout">
                                        <i className="iconsax" icon-name="logout-2"></i>
                                        <span>الخروج</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
