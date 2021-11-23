import React from 'react'
import {BsFillArrowUpSquareFill} from "react-icons/bs"
import "./ScrollToTop.scss"

const ScrollToTop = () => {

    return (
        <>
            <BsFillArrowUpSquareFill className = "icon" onClick = {() => {
                window.scrollTo(0, 0)
            }} />
        </>
    )
}

export default ScrollToTop
