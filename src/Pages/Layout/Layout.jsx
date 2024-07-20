import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

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
