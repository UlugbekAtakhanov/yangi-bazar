import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./Jam.scss"

const Jam = () => {

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

            <div className="container bg-white border p-5 mb-5 jamiyat-article">
                <h3>
                    Жамиятнинг хужжатлари
                </h3>

                <ul>
                    <Link to = "/nizomlar">
                        <li>Жамиятнинг Низоми</li>
                    </Link>
                    <Link to = "/biznesreja">
                        <li>Жамиятнинг 2021 йилга бизнес режаси</li>
                    </Link>
                </ul>
                
            </div>
        </>
    )
}

export default Jam
