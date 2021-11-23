import React from 'react'
import {Link} from 'react-router-dom'
import {FaTelegramPlane, FaInstagram, FaFacebook} from 'react-icons/fa'
import "./Footer.scss"

const Footer = () => {
    return (
        <div className = "footer-component">
            <div className = "px-3 div1">
                <p>«DostlikSSK.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма розилиги билан амалга оширилиши мумкин.</p>
                <p>Ⓣ - мақола ва материалларда қўйилган мазкур белги уларнинг тижорат ва реклама ҳуқуқлари асосида эълон қилинганлигини билдиради.</p>
            </div>
            <div className="contact">
                <p>Biz bilan bog'laning</p>
                <address>
                    Namangan shahar,<br />
                    Islom Karimov ko'chasi,<br />
                    tel: () 123+456+789
                </address><br />
                <div className = "icons-container">
                    <Link to = "/sth1">
                        <FaTelegramPlane />
                    </Link>
                    <Link to = "/sth2">
                        <FaFacebook />
                    </Link>
                    <Link to = "/sth3">
                        <FaInstagram />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
