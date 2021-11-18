import React, {useEffect} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import AOS from 'aos'
import "aos/dist/aos.css"
import "./Tashkiliy.scss"

const Tashkiliy = () => {

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
            <div className="container bg-white p-5 tashkiliy-tuzulma">
                <h3>Ташкилий тузилма</h3>
                <img src="./images/tashkiliy-tuzulma.jpg" alt="" />
            </div>
        </>
    )
}

export default Tashkiliy
