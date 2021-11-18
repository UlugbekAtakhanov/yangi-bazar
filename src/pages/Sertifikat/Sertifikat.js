import React, {useEffect} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./Sertifikat.scss"
import AOS from 'aos'
import "aos/dist/aos.css"

const Sertifikat = () => {

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

            <div className="container bg-white border p-5 mb-5 sertificate">
                <h3>Сертификатлар ва лицензиялар</h3>
                    <div>
                        <a href="./images/sertifikat.jpg">
                            <img src="./images/sertifikat.jpg" alt="" />
                        </a>
                    </div>
            </div>
            
        </>
    )
}

export default Sertifikat
