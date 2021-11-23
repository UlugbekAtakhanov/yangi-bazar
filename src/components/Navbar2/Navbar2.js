import React, { useState } from 'react'
import {IconContext} from 'react-icons'
import {BsInfoSquareFill, BsFillAwardFill} from "react-icons/bs"
import {MdOutlineHistoryEdu} from "react-icons/md"
import {RiVipDiamondFill} from 'react-icons/ri'
import {FiLayers} from "react-icons/fi"
import {ImDatabase} from "react-icons/im"
import {AiFillRead} from "react-icons/ai"
import {Link} from 'react-router-dom'
import "./Navbar2.scss"


const Navbar2 = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [sidebarActive, setSidebarActive] = useState(false)


    const sidebarOpenHandler = () => {
        setIsSideBarOpen(!isSideBarOpen)
        setSidebarActive(!sidebarActive)
    }

    


    return (
        <IconContext.Provider value = {{size: "20px", color: "hsl(205, 77%, 27%)"}}>
            <div className= {sidebarActive ? "fixed-nav-container fixed-nav-container-active" : "fixed-nav-container"}>
                <div className="fixed-nav">
                    <div className = "fixed-sidebar-container">
                        <div className="logo">
                            <h2 data-aos = "fade-right" data-aos-delay = "500"><span>SSK</span>Do'stlik </h2>
                        </div>
                        <div className = {sidebarActive ? "fixed-sidebar active" : "fixed-sidebar"} onClick = {sidebarOpenHandler}></div> 
                    </div>

                    <ul className = "fixed-list">
                        <li><Link to = "/" className = "asosiy">асосий</Link></li>
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

export default Navbar2
