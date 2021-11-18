import React, {useEffect} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import AOS from 'aos'
import "aos/dist/aos.css"
import "./Aloqalar.scss"

const Aloqalar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // AOS
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar2 />

            <div className = "container bg-white border p-5 mb-5 aloqalar-article">
                <h3>Алоқалар</h3>
                <p>
                    
                    <span>Манзил:</span> Namangan shahar,Islom Karimov ko'chasi, tel: () 123+456+789

                    <br /><br /> <span> Телефон:</span> () 123+456+789

                    <br /><br /> <span> Факс:</span> () 123+456+789

                    <br /><br /> <span> E-mail:</span> contact@youremail.com

                    <br /><br /> <span> Иш тартиби:</span> 9:00-18:00; тушлик: 13:00-14:00
                </p>
            </div>

            <div className = "container bg-white border p-2 mb-5 map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6021.668436652386!2d71.6412472619751!3d41.00700162128328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1637160717534!5m2!1suz!2s" style={{border:"0"}}allowfullscreen="" loading="lazy"></iframe>
            </div>
        </>
    )
}

export default Aloqalar
