import React, {useEffect, useState} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import AOS from 'aos'
import "aos/dist/aos.css"
import "./Aloqalar.scss"

const Aloqalar = () => {

    const [ism, setIsm] = useState("")
    const [familiya, setFamiliya] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [error, setError] = useState("")
    const [habarJunatish, setHabarJunatish] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // AOS
    useEffect(() => {
        AOS.init()
    }, [])

    const habarHandler = (e) => {
        e.preventDefault()
        if (!ism || !familiya || !email || !text) {
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Илтимос маълумотларингизни тулалигича киритинг.")
        }
        if (!email.includes("@") || !email.includes(".")) {
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Илтимос Email адрессингизни тугри киритинг!")
        }
        setTimeout(() => {
            setIsm("")
            setFamiliya("")
            setEmail("")
            setText("")
            setHabarJunatish("")
        }, 3000);
        setHabarJunatish("Хабар юборилди")
    }

    return (
        <>
            <Navbar2 />

            <div className = "container bg-white border p-5 mb-5 aloqalar-article">
                <div className = "col col-md-8">
                    <h3>Алоқалар</h3>
                    <p>
                        
                        <span>Манзил:</span> Namangan shahar,Islom Karimov ko'chasi,

                        <br /><br /> <span> Телефон:</span> +998 (69) 234-31-97

                        <br /><br /> <span> Факс:</span> +998 (69) 234-31-97

                        <br /><br /> <span> E-mail:</span> dustlik.ssk@mail.ru

                        <br /><br /> <span> Иш тартиби:</span> 9:00-18:00; тушлик: 13:00-14:00
                    </p>
                </div>
                <form action="" className = "col col-md-4">
                    {error && <p className="p-error">{error}</p>}
                    {habarJunatish && <p className="p-success">{habarJunatish}</p>}
                    <input style = {{textTransform: "capitalize"}} type="text" name="ism" id="ism" value = {ism} onChange = {(e) => setIsm(e.target.value)} placeholder = "Исм" />
                    <input style = {{textTransform: "capitalize"}} type="text" name="familya" id="familiya" value = {familiya} onChange = {(e) => setFamiliya(e.target.value)} placeholder = "Фамилия" />
                    <input type="email" name="email" id="email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "email@gmail.com" />
                    <textarea style = {{textTransform: "capitalize"}} name="text" id="text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder = "Матнни киритинг"></textarea>
                    <button type = "button" onClick = {habarHandler}>Хабар жунатиш</button>
                </form>
            </div>

            <div className = "container bg-white border p-2 mb-5 map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6021.668436652386!2d71.6412472619751!3d41.00700162128328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1637160717534!5m2!1suz!2s" style={{border:"0"}} allowfullscreen="" loading="lazy" title ="map"></iframe>
            </div>
        </>
    )
}

export default Aloqalar
