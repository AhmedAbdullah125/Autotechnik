import React from 'react'
import feature1 from '../../assets/features-icon/CreditCard.png'
import feature2 from '../../assets/features-icon/Headphones.png'
import feature3 from '../../assets/features-icon/Package.png'
import feature4 from '../../assets/features-icon/Trophy.png'
export default function Feature() {
    return (
        <section className="feature-section">
            <div className="ss">
                <div className="features">
                    <div className="features-box">
                        <figure>
                            <img src={feature2} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <span className="features-span">معاك ٢٤ ساعة</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature1} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <span className="features-span">تعامل امن</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature3} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <span className="features-span">توصيل سريع</span>
                        </div>
                    </div>
                    <div className="features-box">
                        <figure>
                            <img src={feature4} alt="icon" />
                        </figure>
                        <div className="features-text">
                            <span className="features-span">عروض علطول  </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
