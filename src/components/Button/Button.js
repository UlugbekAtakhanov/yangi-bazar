import React, {useEffect} from 'react'
import "./Button.scss"
import AOS from 'aos'
import "aos/dist/aos.css"

const Button = () => {


    // AOS
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            <button className = "btn"  data-aos = "fade-up" data-aos-delay = "300" >Ko'proq ma'lumot</button>
        </>
    )
}

export default Button
