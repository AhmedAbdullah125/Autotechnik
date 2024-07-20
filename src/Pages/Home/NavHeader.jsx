import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHeader() {
    return (
        <div className='NavHeader'>
            <div className='container NavHeader-cont'>

                <div className="right-side">
                    <Link to="/about">من نحن</Link>
                    <Link to="/policies">الشروط والاحكام</Link>
                    <Link to="/favourites">قائمة الرغبات</Link>
                </div>
                <div className="left-side">
                    <div className="user-profile dropdown">
                        <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                            <div className="user-info">
                                <span>الإنجليزية</span>
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
                                <span>الدولار الأمريكي</span>
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
                                <span>تتبع الطلب</span>
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
    )
}
