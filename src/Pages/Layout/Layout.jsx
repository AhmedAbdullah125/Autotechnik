import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';
import Header from '../Home/Header';

export default function Layout() {
    return (
        <>
            <Header></Header>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    )
}
