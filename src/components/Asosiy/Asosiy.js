import React, {useEffect, useState} from 'react'
import {FaTelegramPlane, FaInstagram, FaFacebook} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import Owl from 'react-owl-carousel2'
import "react-owl-carousel2/lib/styles.css"
import "react-owl-carousel2/src/owl.theme.default.css"

import AOS from 'aos'
import "aos/dist/aos.css"


import "./Asosiy.scss"
import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'
import News from '../../data/yaniliklar'
import Yangiliklar from '../Yangiliklar/Yangiliklar'


const Asosiy = () => {

    const [ism, setIsm] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [obuna, setObuna] = useState("")
    // OWL
    const options = {
        animateOut: "fadeOut",
        items: 1,
        rewind: true,
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        margin: 10
    };

    // AOS
    useEffect(() => {
        AOS.init()
    }, [])

    useEffect(() => {

    }, [])


    const obunaHandler = (e) => {
        e.preventDefault()
        if (!ism || !email) {
            setTimeout(() => {
                // setIsm("")
                // setEmail("")
                setError("")
            }, 3000);
            return setError("Илтимос Исмингиз ва Email адрессингизни киритинг")
        }
        if (!email.includes("@") || !email.includes(".")) {
            setTimeout(() => {
                // setIsm("")
                // setEmail("")
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
    
    console.log(error);

    return (
        <>

            <div className="container1" id = "asosiy">

                <Owl options={options} className = "owl-carousel" >
                    <div><img src="./images/1.png" alt="The Last of us"/></div>
                    <div><img src="./images/2.png" alt="GTA V"/></div>
                    <div><img src="./images/3.jpg" alt="Mirror Edge"/></div>
                </Owl>

                <div className="overlay">

                    <Navbar />
                
                    <div className="main-container">
                        <div className="main">
                            <div data-aos = "fade-up" data-aos-delay = "1000">
                                <h2>Biz sizga hamkorlikni <br /> taklif qilamiz <span>.</span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolor harum non ducimus rerum eveniet aliquid accusantium ipsa quia ab.</p>
                                <Button />
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
                            <img src="./images/4.jpg" alt="" />
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
                                    <div className="circle"><img src="./images/gerb.jpg" alt="" /></div>
                                    <p className = "title">
                                        <a href = "https://namangan24.uz/zhamiyat">
                                            Президент арзонгарчиликка йўл очувчи қонунни имзолади
                                        </a>
                                    </p>
                                    <p>Ўзбекистон Республикаси Президенти Шавкат Мирзиёев “Ўзбекистон Республикаси Солиқ кодексига аҳолини асосий турдаги озиқ-овқат маҳсулотлари билан кафолатли таъминлашга қаратилган қўшимча киритиш тўғрисида”ги Қонунни имзолади.</p>
                                </div>
                                <div className="item"  data-aos = "fade-up" data-aos-delay = "300" >
                                    <div className="circle"><img src="./images/gerb.jpg" alt="" /></div>
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
                        <h1>foydali <br /> manbalar</h1>
                    </div>
                    <div className="right">
                        <div className="div1">
                            <img src="./images/8.png" alt="" />
                            <a href="https://www.namangan.uz/uz/">Namangan Viloyat Hokimligi</a>
                        </div>
                        <div className="div1">
                            <img src="./images/govuz.png" alt="" />
                            <a href="https://www.gov.uz/uz">O'zbekiston Respublikasi Hukumat portali</a>
                        </div>
                        <div className="div1">
                            <img src="./images/korporativ.png" alt="" />
                            <a href="http://www.openinfo.uz/uz/">Korporativ axborot yagona portali</a>
                        </div>
                        <div className="div1">
                            <img src="./images/lex.png" alt="" />
                            <a href="https://lex.uz/">Fond bozorining axborot-resurs markazi</a>
                        </div>
                        <div className="div1">
                            <img src="./images/fond.png" alt="" />
                            <a href="https://fondbozori.uz/usx/index.html?lang=LC">Fond bozorining axborot-resurs markazi</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container5" id = "contact">
                <div className="main">
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "300">
                        <img src="./images/1-odam.png" alt="" />
                        <p>Эшондадаев Шухрат Абдуллаевич</p>
                        <p>Директор</p>
                        <p>Тел/факс (91) 361-49-49</p>
                        <div className = "icons-container">
                            <Link to = "#">
                                <FaTelegramPlane />
                            </Link>
                            <Link to = "#">
                                <FaFacebook />
                            </Link>
                            <Link to = "#">
                                <FaInstagram />
                            </Link>
                        </div>

                    </div>
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "400">
                        <img src="./images/2-odam.png" alt="" />
                        <p>Акбаров Носиржон Аскаралиевич</p>
                        <p>Директор ўринбосари</p>
                        <p>Тел/факс (91) 361-00-20</p>
                        <div className = "icons-container">
                            <Link to = "#">
                                <FaTelegramPlane />
                            </Link>
                            <Link to = "#">
                                <FaFacebook />
                            </Link>
                            <Link to = "#">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "500">
                        <img src="./images/3-odam.png" alt="" />
                        <p>Бабаева Муяссар Умаржановна</p>
                        <p>Бош хисобчи</p>
                        <p>Тел/факс (93) 406-71-27</p>
                        <div className = "icons-container">
                            <Link to = "#">
                                <FaTelegramPlane />
                            </Link>
                            <Link to = "#">
                                <FaFacebook />
                            </Link>
                            <Link to = "#">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
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
                    <div className="contact">
                        <p>Biz bilan bog'laning</p>
                        <address>
                            Namangan shahar,<br />
                            Islom Karimov ko'chasi,<br />
                            tel: () 123+456+789
                        </address><br />
                        <div className = "icons-container">
                            <Link to = "#">
                                <FaTelegramPlane />
                            </Link>
                            <Link to = "#">
                                <FaFacebook />
                            </Link>
                            <Link to = "#">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className = "temp">templated by: <a href="">namsoft</a></p>
            </div>

        </>
    )
}

export default Asosiy
