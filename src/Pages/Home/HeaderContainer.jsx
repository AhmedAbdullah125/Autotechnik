import React from 'react'
import { Link } from 'react-router-dom'
// import profile from '../../assets/profile-1.png'
import logo from '../../assets/Header/logo.png'
import UpperHeader from './UpperHeader'
import NavHeader from './NavHeader'
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
                                <Link to="/account">
                                    <i class="iconsax" icon-name="user-2"></i>
                                    الحساب
                                </Link>
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
