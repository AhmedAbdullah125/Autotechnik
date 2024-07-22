import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="collumn">
                        <div className="title">
                            <Link to='/about'>اعرف المزيد عنا</Link>
                        </div>
                        <div className="text">
                            <Link to='/about'>معلومات عن اوتو</Link>
                            <Link to='/policies'>© 2024 جميع الحقوق محفوظة. اوتو تيك</Link>
                        </div>
                    </div>
                    <div className="collumn">
                        <div className="title">
                            <Link to='/about'>تسوق معنا</Link>
                        </div>
                        <div className="text">
                            <Link to='/account'>حسابك</Link>
                            <Link to='/hostory'>مشترياتك</Link>
                            <Link to='/address'>عناوينك</Link>
                            <Link to='/lists'>قوائمك</Link>
                        </div>
                    </div>
                    <div className="collumn">
                        <div className="title">
                            <Link to='/products'>منتجاتنا</Link>
                        </div>
                        <div className="text">
                            <Link to='/oil'>زيوت</Link>
                            <Link to='/accessories'>اكسسوارات</Link>
                            <Link to='/lights'>فوانيس</Link>
                            <Link to='/externals'>استيراد</Link>
                        </div>
                    </div>
                    <div className="collumn">
                        <div className="title">
                            <Link to='/support'>دعنا نساعدك</Link>
                        </div>
                        <div className="text">
                            <Link to='/support'>المساعدة</Link>
                            <Link to='/policies'>سياسات وأسعار الشحن</Link>
                            <Link to='/address'>طلبات الإرجاع والاستبدال</Link>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
