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
                <p>Биз билан боғланинг</p>
                <address>
                    Наманган шаҳар,<br />
                    Ислом Каримов кўчаси,<br />
                    Email: dustlik.ssk@mail.ru, <br />
                    Тел: +998 (69) 234-31-97
                </address><br />
                <div className = "icons-container">
                    <Link to = "/">
                        <FaTelegramPlane />
                    </Link>
                    <Link to = "/">
                        <FaFacebook />
                    </Link>
                    <Link to = "/">
                        <FaInstagram />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer
