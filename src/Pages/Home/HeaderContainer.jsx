import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import flag from '../../assets/Header/egypy.png'
// import profile from '../../assets/profile-1.png'
import logo from '../../assets/Header/logo.png'
import UpperHeader from '../Home/UpperHeader'
import NavHeader from '../Home/NavHeader'
export default function HeaderContainer() {
    function openNav() {
        document.getElementById('navgition').classList.add('reset-left')
    }
    function closeNav() {

        document.getElementById('navgition').classList.remove('reset-left')
    }

    return (
        <div className="container">
            <div className="top-header">
                <div className="nav-header">
                    <Link to="/" className="logo">
                        <div className="logo-cont">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <div className="search-cont">
                        <Link className="filter-btn" to='/filter'>
                            <i className="iconsax" icon-name="hamburger-menu"></i>
                            جميع الفئات
                        </Link>
                        <div className="search-section">
                            <form className="search-form">
                                <input className="search-input" type="text" name="" placeholder="ابحث..." />
                                <button className="search-button">
                                    <i className="iconsax" icon-name="search-normal-2"></i>
                                </button>
                            </form>
                        </div>

                    </div>

                    <div className="navgition" id='navgition'>
                        <div className="nav-head">
                            <button className="close-menu" id='close-menu' onClick={closeNav}>
                                <i className="iconsax" icon-name="x"></i>
                            </button>
                        </div>
                        <ul className="big-menu list-unstyled">
                            <li className="active">
                                <div className="user-profile dropdown">
                                    <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                                <i class="iconsax" icon-name="user-2"></i>
                                        <div className="user-info">
                                            <div >
                                                الحساب
                                            </div>
                                            <i className="iconsax" icon-name="chevron-down"></i>
                                        </div>
                                    </div>
                                    <ul className="profile-menu dropdown-menu">
                                        <li>
                                            <a href="/account/general">
                                            <i className="iconsax" icon-name="basket-tick-1"></i>
                                                <span>طلباتي</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/orders/01">
                                                <i className="iconsax" icon-name="map-2"></i>
                                                <span>عناويني الخاصة</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#contact">
                                                <i className="iconsax" icon-name="award-3"></i>
                                                <span>خدماتي</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#contact">
                                                <i className="iconsax" icon-name="money-5"></i>
                                                <span>رصيدي</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#contact">
                                                <i className="iconsax" icon-name="user-1-tag"></i>
                                                <span>حسابي الشخصي</span>
                                            </a>
                                        </li>
                                        <li>
                                            <NavLink href="/#contact">
                                                <i className="iconsax" icon-name="question-message"></i>
                                                <span> مساعدة ؟</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink href="/login" className="logout">
                                                <i className="iconsax" icon-name="logout-2"></i>
                                                <span>تسجيل الخروج</span>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="/#stadium">
                                    <i class="iconsax" icon-name="heart"></i>
                                    قائمة الرغبات
                                </a>
                            </li>
                            <li>
                                <Link to="/cart">
                                    <i className="iconsax" icon-name="shopping-cart"></i>
                                    عربة التسوق الخاصة بك
                                </Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <Link to="/about">
                                    من نحن
                                </Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <Link to="/policies">
                                    الشروط والاحكام
                                </Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <Link to="/about">
                                    قائمة الرغبات
                                </Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <div className="user-profile dropdown">
                                    <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                        <div className="user-info">
                                            <img src={flag} alt="flag" className='flag' />
                                            <i className="iconsax" icon-name="chevron-down"></i>
                                        </div>
                                    </div>
                                    <ul className="profile-menu flags-menue dropdown-menu">
                                        <li>
                                            <img src={flag} alt="flag" className='flag ' />
                                        </li>
                                        <li>
                                            <img src={flag} alt="flag" className='flag' />
                                        </li>
                                        <li>
                                            <img src={flag} alt="flag" className='flag' />
                                        </li>
                                        <li>
                                            <img src={flag} alt="flag" className='flag' />
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='hidden-in-lg'>
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
                            </li>
                            <li className='hidden-in-lg'>
                                <div className="user-profile dropdown">
                                    <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                        <div className="user-info">
                                            <span>الانجليزيه</span>
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
                            </li>
                            <li className='hidden-in-lg'>
                                <Link to="/about">تتبع الطلب</Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <Link to="/about">خدماتنا</Link>
                            </li>
                            <li className='hidden-in-lg'>
                                <div className="user-profile dropdown">
                                    <div className="user-cont dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false" >
                                        <div className="user-info">
                                            <span>التصنيفات</span>
                                            <i className="iconsax" icon-name="chevron-down"></i>
                                        </div>
                                    </div>
                                    <ul className="profile-menu dropdown-menu">
                                        <li>
                                            <a href="/">

                                                <span>زيت سيارة</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">

                                                <span>اكسسوارات</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <span>مفاتيح</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>كشاف</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>حامل</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>شواحن</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>تيل فرامل</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>طنابير</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <span>كباس يدوي</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='hidden-in-lg'>
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
                            </li>
                            <li className='hidden-in-lg'>
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
                            </li>
                        </ul>
                    </div>
                    <div className="header-btn">
                        <a href="#11" className="about-link d-none">تسجيل</a>
                        <button className="menu-bars" id="menu-id" onClick={openNav}>
                            <i className="iconsax" icon-name="hamburger-menu"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
