import React from 'react'
import {IconContext} from 'react-icons'
import {BsInfoSquareFill, BsFillAwardFill} from "react-icons/bs"
import {MdOutlineHistoryEdu} from "react-icons/md"
import {RiVipDiamondFill} from 'react-icons/ri'
import {FiLayers} from "react-icons/fi"
import {ImDatabase} from "react-icons/im"
import {AiFillRead} from "react-icons/ai"
import "./Navbar.scss"
import {Link} from 'react-router-dom'
// import Navbar2 from '../Navbar2/Navbar2'

const Navbar = () => {

    // const [scroll, setScroll] = useState(0)

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    // useEffect(() => {

    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY)
    //     })
        
    // }, [scroll])

    // if (scroll > 300) {
    //     return <Navbar2 />
    // }
    return (
        <IconContext.Provider value = {{size: "20px", color: "hsl(205, 77%, 27%)"}}>
            <div className="pre-nav-container" >
                <div className = "pre-nav">
                    <div className="div1">
                        <a href="/sth1">Telegram</a>
                        <a href="/sth1">Instagram</a>
                        <a href="/sth1">Facebook</a>
                    </div>
                    <div className="div2">
                        <a href="/sth1">contact@youremail.com</a>
                        <p>+998 91 361-49-49</p>
                    </div>
                </div>
            </div>

            <div className= "nav-container">
                <div className="nav">
                    <div className="logo">
                        <h1 data-aos = "fade-right" data-aos-delay = "500"><span>SSK</span>Do'stlik </h1>
                    </div>
                    <ul className = "nav-list">
                        <li><Link to = "/">асосий</Link></li>
                        <li>биз Ҳакиммизда
                            <div className="dropdown">
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><BsInfoSquareFill /></div>
                                    <Link  className = "dropdown-item-2" to = "/umumiy">Умумий Маълумотлар</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><MdOutlineHistoryEdu /></div>
                                    <Link className = "dropdown-item-2" to = "/tarix" >ТАРИХ</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><RiVipDiamondFill /></div>
                                    <Link className = "dropdown-item-2" to = "/rahbariyat" >Раҳбарият</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><FiLayers /></div>
                                    <Link className = "dropdown-item-2" to = "/tashkiliytuzulma" >Ташкилий тузилма</Link>
                                </div>
                            </div>
                        </li>
                        <li>расмий
                            <div className="dropdown">
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><BsFillAwardFill /></div>
                                    <Link to = "/nizomlar" className = "dropdown-item-2">низом</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><AiFillRead /></div>
                                    <Link to = "/sertifikat" className = "dropdown-item-2">Сертификатлар ва лицензиялар</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><ImDatabase /></div>
                                    <Link to = "/normxuquqiybaza" className = "dropdown-item-2">Норматив-ҳуқукий базаси</Link>
                                </div>
                                <div className = "dropdown-item">
                                    <div className = "dropdown-icon"><AiFillRead /></div>
                                    <Link to = "/jamiyathujjatlari" className = "dropdown-item-2">Жамиятнинг хужжатлари</Link>
                                </div>
                            </div>
                        </li>
                        <li><Link to = "/aloqalar" className = "contact">Алоқалар</Link></li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Navbar
