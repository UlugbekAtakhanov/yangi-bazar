import React, {useEffect} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./Norm.scss"
import AOS from 'aos'
import "aos/dist/aos.css"

const Norm = () => {

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

            <div className="container mb-5 p-5 border bg-white normativ-article">
                <h3>Норматив-ҳуқукий базаси</h3>
                <ul>
                    <li><a href="https://www.lex.uz/docs/6567" target = "_blank" rel="noreferrer" >Ўзбекистон Республикасининг Қонуни "Акциядорлик жамиятлари ва акциядорларнинг ҳуқуқларини ҳимоя қилиш тўғрисида".</a></li>
                    <li><a href="https://www.lex.uz/docs/1374865" target = "_blank" rel="noreferrer" >Ўзбекистон Республикасининг Қонуни “Қимматли қоғозлар бозори тўғрисида”.</a></li>
                    <li><a href="https://www.lex.uz/docs/1061595" target = "_blank" rel="noreferrer" >Ўзбекистон Республикаси Президентининг Қарори “Қимматли қоғозлар бозорини янада ривожлантириш чора-тадбирлари тўғрисида”.</a></li>
                    <li><a href="https://www.lex.uz/docs/1515251" target = "_blank" rel="noreferrer" >Қимматли қоғозлар эмиссияси ва эмиссиявий қимматли қоғозлар чиқарилишларини давлат рўйхатидан ўтказиш қоидалари.</a></li>
                    <li><a href="https://www.lex.uz/docs/210990" target = "_blank" rel="noreferrer" >Ўзбекистон Республикаси Президентининг Фармони “Фонд бозорини янада ривожлантириш ҳамда давлат мулки негизида ташкил этилган акциядорлик жамиятларини қўллаб-қувватлаш чора-тадбирлари тўғрисида”.</a></li>
                    <li><a href="https://lex.uz/docs/402046" target = "_blank" rel="noreferrer" >Ўзбекистон Республикаси Вазирлар Маҳкамасининг Қарори «Ўзбекистон Республикаси Давлат рақобат қўмитаси ҳузуридаги Қимматли қоғозлар бозорини мувофиқлаштириш ва ривожлантириш марказининг фаолиятини ташкил этиш масалалари тўғрисида».</a></li>
                    <li><a href="https://lex.uz/docs/1620565" target = "_blank" rel="noreferrer" > Ўзбекистон Республикаси Президентининг Қарори «Деҳқон бозорлари ва савдо комплекслари фаолиятини ташкил қилишни янада такомиллаштириш чора-тадбирлари тўғрисида»</a></li>
                    <li><a href="https://lex.uz/docs/2045196" target = "_blank" rel="noreferrer" > Ўзбекистон Республикаси Вазирлар Маҳкамасининг Қарори «Бозорлар ва савдо комплекслари фаолиятини тартибга солишга доир қўшимча чора-тадбирлар тўғрисида»</a></li>
                </ul>
            </div>
        </>
    )
}

export default Norm
