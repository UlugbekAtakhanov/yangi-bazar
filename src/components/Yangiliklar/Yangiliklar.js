import React from 'react'
import {BiCalendar} from "react-icons/bi"
import "./Yangiliklar.scss"

const Yangiliklar = ({img, date, title, url}) => {
    return (
        <div className = "yangiliklar-container container-fluid border  mb-2">
            <div className="row">
                <img src={img} alt="" className = "col-4 border p-2 m-2" />
                <div className = "col-7" >
                    <p className = "p1"><BiCalendar /> {date}</p>
                    <p className = "p2">
                        <a href={url}>
                            {title}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Yangiliklar
