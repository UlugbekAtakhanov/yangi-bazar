import React, {useEffect, useState} from 'react'

import Owl from 'react-owl-carousel2'
import "react-owl-carousel2/lib/styles.css"
import "react-owl-carousel2/src/owl.theme.default.css"

import AOS from 'aos'
import "aos/dist/aos.css"

import SmoothScroll from '../../animations/smoothScroll/SmoothScroll'

import "./Asosiy.scss"


const Asosiy = () => {

    const [scroll, setScroll] = useState("")
    const [stickyNavbar, setStickyNavbar] = useState(false)

    // OWL
    const options = {
        animateOut: "fadeOut",
        items: 1,
        nav: true,
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

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })
        
    }, [scroll])
    
    console.log(scroll, typeof(scroll));

    return (
        <div>

            <div className="container1" id = "asosiy">

                <Owl options={options} className = "owl-carousel" >
                    <div><img src="./images/1.png" alt="The Last of us"/></div>
                    <div><img src="./images/2.png" alt="GTA V"/></div>
                    <div><img src="./images/3.jpg" alt="Mirror Edge"/></div>
                </Owl>

                <div className="overlay">
                    
                    <div className="pre-nav-container" >
                        <div className = "pre-nav">
                            <div className="div1">
                                <a href="#">Telegram</a>
                                <a href="#">Instagram</a>
                                <a href="#">Facebook</a>
                            </div>
                            <div className="div2">
                                <a href="#">contact@youremail.com</a>
                                <p>+123-456-789</p>
                            </div>
                        </div>
                    </div>

                    <div className= {scroll > 300 ? "nav-container navbar-sticky" : "nav-container"}>
                        <div className="nav">
                            <div className="logo">
                                <h2 data-aos = "fade-right" data-aos-delay = "500"><span>BBK</span>Do'stlik </h2>
                            </div>
                            <ul>
                                <li><a href="#">Asosiy</a></li>
                                <li><a href="#biz-haqimizda">Biz Haqimizda</a></li>
                                <li><a href="#hizmatlar">Hizmatlar</a></li>
                                <li><a href="#">Yangiliklar</a></li>
                                <li><a href="#contact" className = "contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="main-container">
                        <div className="main">
                            <div data-aos = "fade-up" data-aos-delay = "1000">
                                <h2>Biz sizga hamkorlikni <br /> taklif qilamiz <span>.</span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolor harum non ducimus rerum eveniet aliquid accusantium ipsa quia ab.</p>
                                <a href="#">Ko'proq ma'lumot</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="container2" id = "biz-haqimizda">

                <div className="main">

                    <div className="section1">
                        <p className = "p1" data-aos = "fade" data-aos-delay = "400">biz <br /> haqimizda</p>
                        <p className = "p2"  data-aos = "fade-left" data-aos-delay = "800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta consequuntur praesentium sapiente placeat facere pariatur veritatis quae architecto in.</p>
                    </div>

                    <div className="section2">
                        <div className="article">
                            <p className = "p1"  data-aos = "fade-up" data-aos-delay = "400">Biz..</p>
                            <p  data-aos = "fade-up" data-aos-delay = "600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nisi!</p>
                            <p  data-aos = "fade-up" data-aos-delay = "750">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at quaerat asperiores minima consequuntur nostrum molestias culpa fuga? Quisquam expedita culpa eius consectetur, beatae quia distinctio nam sint est veniam.</p>
                            <p  data-aos = "fade-up" data-aos-delay = "850">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti accusantium porro, dolorum eius ipsum tempora fuga, id debitis mollitia vero et voluptate cumque iste recusandae quasi nostrum vel doloremque. Quis?</p>
                        </div>
                        <div className = "img-container">
                            <img src="./images/4.jpg" alt="" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="container3" id = "hizmatlar">
                <div className="main">
                    <div className="left">
                        <p className = "p1">bizning hizmatlar</p>
                        <h3 className = "h3">bizning faoliyat</h3>
                        <div className="section1">
                            <div className="item">
                                <div className="circle"></div>
                                <p className = "title">Marketing</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit, facere consequatur repudiandae deleniti ipsa, cumque eaque quam dicta necessitatibus iusto molestiae reiciendis cum perspiciatis possimus magni eveniet illo laudantium.</p>
                            </div>
                            <div className="item">
                                <div className="circle"></div>
                                <p className = "title">Trading</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit, facere consequatur repudiandae deleniti ipsa, cumque eaque quam dicta necessitatibus iusto molestiae reiciendis cum perspiciatis possimus magni eveniet illo laudantium.</p>
                            </div>
                            <div className="item">
                                <div className="circle"></div>
                                <p className = "title">Consulting</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit, facere consequatur repudiandae deleniti ipsa, cumque eaque quam dicta necessitatibus iusto molestiae reiciendis cum perspiciatis possimus magni eveniet illo laudantium.</p>
                            </div>
                            <div className="item">
                                <div className="circle"></div>
                                <p className = "title">Exporting</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sit, facere consequatur repudiandae deleniti ipsa, cumque eaque quam dicta necessitatibus iusto molestiae reiciendis cum perspiciatis possimus magni eveniet illo laudantium.</p>
                            </div>
                        </div>
                    </div>

                    <div className="right"></div>

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
                        <img src="./images/6.jpg" alt="" />
                        <p>Ism Familiya</p>
                        <p>Lavozimi</p>
                        <p>+123-456-789</p>
                        <p>telegram</p>
                        <p>facebook</p>
                    </div>
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "400">
                        <img src="./images/6.jpg" alt="" />
                        <p>Ism Familiya</p>
                        <p>Lavozimi</p>
                        <p>+123-456-789</p>
                        <p>telegram</p>
                        <p>facebook</p>
                    </div>
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "500">
                        <img src="./images/6.jpg" alt="" />
                        <p>Ism Familiya</p>
                        <p>Lavozimi</p>
                        <p>+123-456-789</p>
                        <p>telegram</p>
                        <p>facebook</p>
                    </div>
                    <div className="card-container"  data-aos = "zoom-in" data-aos-delay = "600">
                        <img src="./images/6.jpg" alt="" />
                        <p>Ism Familiya</p>
                        <p>Lavozimi</p>
                        <p>+123-456-789</p>
                        <p>telegram</p>
                        <p>facebook</p>
                    </div>
                </div>
            </div>


            <div className="footer">
                <div className="main">
                    <div className="logo">
                        <h2 data-aos = "fade-right" data-aos-delay = "500"><span>BBK</span>Do'stlik </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam, ipsam est facere nulla iusto sapiente molestias veniam unde eligendi ducimus tempore beatae, quasi iure commodi. Officia qui repudiandae at!</p>
                    </div>
                    <div className="services">
                        <p>bizning hizmatlar</p>
                        <ul>
                            <li><a href="#">hizmatlar</a></li>
                            <li><a href="#">hizmatlar</a></li>
                            <li><a href="#">hizmatlar</a></li>
                            <li><a href="#">hizmatlar</a></li>
                            <li><a href="#">hizmatlar</a></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <p>Biz bilan bog'laning</p>
                        <address>
                            Namangan shahar,<br />
                            Islom Karimov ko'chasi,<br />
                            tel: () 123+456+789
                        </address><br />
                        <div>
                            <a href=""><i class="gg-facebook"></i></a>
                            <a href=""><i class="gg-instagram"></i></a>
                            <a href=""><i class="fab fa-telegram-plane"></i></a>
                        </div>
                    </div>
                </div>
                <p className = "temp">templated by: <a href="">namsoft</a></p>
            </div>

            


            {/* <a href="#asosiy" className = "main-btn">^</a> */}
        </div>
    )
}

export default Asosiy
