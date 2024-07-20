import React, { useEffect, useState } from 'react'

export default function UpperHeader() {
    const opening = new Date("8/1/2024");//
    const today = new Date();//
    // const month = today.getMonth() + 1;
    // const year = today.getFullYear();
    // const date = today.getDate();
    // const hourrs = today.getHours();
    // const minits = today.getMinutes();
    // const seconds = today.getSeconds();
    let differance = (opening-today)
    let diffIndays = Math.round(differance / 1000 / 60 / 60 / 24);
    let diffHours = Math.round((differance -  (diffIndays*1000*60*60*24))/1000/60/60)
    let diffMins = Math.round((differance -  (diffIndays*1000*60*60*24)-(diffHours*1000*60*60))/1000/60)
    let diffSecond = Math.round((differance -  (diffIndays*1000*60*60*24)-(diffHours*1000*60*60)-(diffMins*1000*60))/1000)
    console.log(diffIndays+ "/" +diffHours+ "/" +diffMins+ "/" +diffSecond );



    let [second, setSeconds] = useState(diffSecond);
    let [mins, setMins] = useState(diffMins);
    let [hours, setHours] = useState(diffHours);
    let [days, setDays] = useState(diffIndays);
    



    useEffect(() => {
        if (second > 0) {
            second > 0 && setTimeout(() => setSeconds(second - 1), 1000);
        }
        else {
            setSeconds(60)
            if (mins > 0) {
                setMins(mins - 1)
            }
            else {
                setMins(59)
                if (hours > 0) {
                    setHours(hours - 1)
                }
                else {
                    setHours(23)
                    if (days > 0) {
                        setDays(days - 1)
                    }
                }
            }

        }
    }, [second]);
    return (
        <div className="uper-header">
            <div className="uper-header-text">
                <span>توصيل مجاني وخصم 40% للطلبات الثلاثة التالية! ,ضع طلبك الأول في.</span>
            </div>
            <div className="uper-header-counter-cont">
                <div className="counter-title">حتى نهاية البيع:</div>
                <div className="uper-header-counter">
                    <div className="days"><span>{days}</span> <p>أيام </p></div>
                    <div className="days"><span>{hours}</span> <p>ساعات</p></div>
                    <div className="days"><span>{mins}</span> <p>دقائق</p></div>
                    <div className="days"><span>{second}</span> <p>ثانيه</p></div>
                </div>
            </div>
        </div>
    )
}
