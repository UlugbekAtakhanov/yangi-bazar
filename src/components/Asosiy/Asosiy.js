import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


import AOS from 'aos'
import "aos/dist/aos.css"


import "./Asosiy.scss"
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import News from '../../data/yaniliklar'
import Yangiliklar from '../Yangiliklar/Yangiliklar'
import Footer from '../Footer/Footer'
import Carousel from '../Carousel/Carousel'

const currencyAPI = "https://nbu.uz/en/exchange-rates/json/"


const Asosiy = () => {

    const [ism, setIsm] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [obuna, setObuna] = useState("")

    const [dollar, setDollar] = useState("")
    const [euro, setEuro] = useState("")
    const [pound, setPound] = useState("")
    const [ruble, setRuble] = useState("")
    const [yuan, setYuan] = useState("")
    const [lira, setLira] = useState("")

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    console.log(day, month, year);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const {data} = await axios.get(currencyAPI)
                console.log(data);
                data.map(item => {
                    if (item.code === "USD") return setDollar(item)
                    if (item.code === "EUR") return setEuro(item)
                    if (item.code === "GBP") return setPound(item)
                    if (item.code === "RUB") return setRuble(item)
                    if (item.code === "CNY") return setYuan(item)
                    if (item.code === "TRY") return setLira(item)
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrency()
    }, [])

    // AOS
    useEffect(() => {
        AOS.init()
    }, [])



    const obunaHandler = (e) => {
        e.preventDefault()
        if (!ism || !email) {
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Илтимос Исмингиз ва Email адрессингизни киритинг")
        }
        if (!email.includes("@") || !email.includes(".")) {
            setTimeout(() => {
                setError("")
            }, 3000);
            return setError("Илтимос Email адрессингизни тугри киритинг!")
        }
        setObuna("Маълумотлар юборилди")
        setTimeout(() => {
            setIsm("")
            setEmail("")
            setError("")
            setObuna("")
        }, 3000);
    }
    
    return (
        <>

            <div className="container1" id = "asosiy">

                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/bozor1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/bozor2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/bozor3.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/bozor4.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>


                <div className="overlay">

                    <Navbar />
                
                    <div className="main-container">
                        <div className="main">
                            <div data-aos = "fade-up" data-aos-delay = "1000">
                                <h2>биз сизга хамкорликни <br /> таклиф қиламиз <span>.</span></h2>
                                <p>Ташриф буюринг ва ўзингизга керакли сифатли маҳсулотларни қулай нархларда  харид қилинг</p>
                                <a href="#biz-haqimizda">
                                    <Button />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="container2" id = "biz-haqimizda">

                <div className="main">

                    <div className="section1">
                        <p className = "p1" data-aos = "fade" data-aos-delay = "400">биз <br />  ҲАҚИММИЗДА</p>
                        <p className = "p2"  data-aos = "fade-left" data-aos-delay = "800">
                            Узбекистон Республикаси Вазирлар Махкамасининг 2003 йил 28 июлдаги 330-сонли карорига асосан... <Link to = "/tarix"><b>Давоми</b></Link>
                        </p>
                    </div>

                    <div className="section2">
                        <div className="article">
                            <p className = "p1"  data-aos = "fade-up" data-aos-delay = "200">биз..</p>
                            <p  data-aos = "fade-up" data-aos-delay = "300">Жамиятни таъсис этишдан максад :</p>
                            <p  data-aos = "fade-up" data-aos-delay = "450">
                                Кенг турдаги саноат ва бошка халк истеъмол
                                молларининг тургун савдо шохобчаларидан фойдаланган холда чакана савдони ташкил этиш,
                                кенг куламда махсулог ишлаб чикаришни янада такомиллаштириш
                            </p>
                            <p  data-aos = "fade-up" data-aos-delay = "550">
                                Шунингдек, Узбекистон
                                Республикасининг Конунчилиги билан гаькикланмаган хар кандай фаолият турини амалга
                                ошириш ва фойда (даромад) олишдир.
                            </p>
                            <Link to = "/umumiy" >
                                <Button />
                            </Link>
                        </div>
                        <div className = "img-container">
                            <img src="./images/bozor5.jpg" alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="container3 " id = "hizmatlar">
                <div className="main container py-5">
                    <div className="row">
                        <div className="left col-xl-8">
                            <p className = "p1">бизнинг фаолиятимиздаги</p>
                            <h3 className = "h3">янгиликлар</h3>
                            <div className="section1">

                                <div className="item"  data-aos = "fade-up" data-aos-delay = "300" >
                                    <div className="circle"><img src="./images/yangilik4.jpg" alt="" /></div>
                                    <div>
                                        <p className = "title">
                                            <a href = "https://namangan24.uz/zhamiyat">
                                                Президент арзонгарчиликка йўл очувчи қонунни имзолади
                                            </a>
                                        </p>
                                        <p>Ўзбекистон Республикаси Президенти Шавкат Мирзиёев “Ўзбекистон Республикаси Солиқ кодексига аҳолини асосий турдаги озиқ-овқат маҳсулотлари билан кафолатли таъминлашга қаратилган қўшимча киритиш тўғрисида”ги Қонунни имзолади.</p>
                                    </div>
                                </div>
                                <div className="item"  data-aos = "fade-up" data-aos-delay = "300" >
                                    <div className="circle"><img src="./images/yangilik5.jpg" alt="" /></div>
                                    <div>
                                        <p className = "title">
                                            <a href="https://kun.uz/news/2021/02/07/namangan-va-panjob-viloyatlari-birodarlashgan-hududlar-deya-elon-qilindi">
                                                Наманган ва Панжоб вилоятлари «Биродарлашган ҳудудлар» дея эълон қилинди
                                            </a>
                                        </p>
                                        <p>
                                            6 февраль куни Наманганга Панжоб вилояти губернатори Муҳаммад Сарвар бошчилигидаги Покистон делегацияси ташриф буюрди.
                                            Наманган вилояти ҳокими Шавкат Абдураззоқов делегацияни гуллар шаҳрида кўриб турганидан мамнунлигини айтиб, бу ташриф Наманган делегациясининг 2019 йилда Покистонга қилган сафарига амалий жавоб бўлганини қайд этди.
                                        </p>
                                    </div>
                                </div>

                                <a href = "https://namangan24.uz/" className = "yangiliklar-btn">
                                    <Button />
                                </a>

                            </div>
                        </div>

                        <div className="right col-xl-4 border py-3 align-self-center">
                            {News.map((item,index) => {
                                return <Yangiliklar {...item} key = {index} />
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className="container4">
                <div className="main">
                    <div className="left">
                        <h1>фoйдали <br /> манбалар</h1>
                    </div>
                    <div className="right">
                        <div className="div1">
                            <img src="./images/8.png" alt="" />
                            <a href="https://www.namangan.uz/uz/">Наманган вилояти хокимлиги</a>
                        </div>
                        <div className="div1">
                            <img src="./images/govuz.png" alt="" />
                            <a href="https://www.gov.uz/uz">Ўзбекистон Республикаси Ҳукумат портали</a>
                        </div>
                        <div className="div1">
                            <img src="./images/korporativ.png" alt="" />
                            <a href="http://www.openinfo.uz/uz/">Корпоратив ахборот ягона портали</a>
                        </div>
                        <div className="div1">
                            <img src="./images/lex.png" alt="" />
                            <a href="https://lex.uz/">Фонд бозорининг ахборот-ресурс маркази</a>
                        </div>
                        <div className="div1">
                            <img src="./images/fond.png" alt="" />
                            <a href="https://fondbozori.uz/usx/index.html?lang=LC">Фонд бозорининг ахборот-ресурс маркази</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container5" id = "contact">
                <h2>Бозор хаётидан лавҳалар</h2>
                <div className="main">

                            {/* CAROUSEL */}
                            <Carousel />

                </div>
            </div>


            <div className="footer">
                <div className="main">
                    <div className="logo">
                        <h2 data-aos = "fade-right" data-aos-delay = "500"><span>SSK</span>Do'stlik </h2>
                        
                        <form action="">
                            <h4>Обуна бўлиш</h4>
                            {error && <p className = "p-error">{error}</p>}
                            {obuna && <p className = "p-correct">{obuna}</p>}
                            <input style = {{textTransform: "capitalize"}} type="text" name="" id="" value = {ism} onChange = {(e) => setIsm(e.target.value)} placeholder = "Исмингиз" required/>
                            <input type="email" name="" id="" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "email@gmail.com" required/>
                            <button type = "button" onClick = {obunaHandler}>Обуна бўлиш</button>
                        </form>
                    
                    </div>
                    <div className="services">
                        <p>2021-йил давомида келиб тушган мурожаатлар сони:</p>
                        <ul>
                            <li>Оғзаки мурожаатлар: <span>2</span></li>
                            <li>Телефон / факс орқали: <span>1</span></li>
                            <li>Корпоратив веб-сайт / e-mail орқали: <span>1</span></li>
                            <li>Ягона интерактив давлат хизматлари портали орқали: <span>1</span></li>
                            <li>Бошқа усуллари орқали: <span>2</span></li>
                            <li className = "li1"><span>Умумий сони: 7</span></li>
                            <li>Кўриб чиқилмокда: <span>1</span></li>
                            <li>Жавоб юборилди: <span>6</span></li>
                        </ul>
                    </div>
                    <div className="currency-container">
                            <p className = "p1">{day}.{month}.{year} дан МБ валюта курслари</p>
                            <div>
                                <p> 1 <img src="./images/dollar.png" alt="" />{dollar.code} = {dollar.cb_price}</p>
                                <p>1 <img src="./images/euro.png" alt="" />{euro.code} = {euro.cb_price}</p>
                                <p>1 <img src="./images/ruble.png" alt="" />{ruble.code} = {ruble.cb_price}</p>
                                <p>1 <img src="./images/pound.png" alt="" />{pound.code} = {pound.cb_price}</p>
                                <p>1 <img src="./images/yuan.png" alt="" />{yuan.code} = {yuan.cb_price}</p>
                                <p>1 <img src="./images/lira.png" alt="" />{lira.code} = {lira.cb_price}</p>
                                <p className = "cbu">
                                    <img src="./images/cbu.png" alt="" />
                                    <a href="https://cbu.uz/oz/">Central Bank of Uzbekistan</a>
                                </p>
                            </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default Asosiy
