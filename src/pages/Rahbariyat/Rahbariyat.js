import React, {useEffect} from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./Rahbariyat.scss"
import AOS from 'aos'
import "aos/dist/aos.css"


const Rahbariyat = () => {

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
            <div className="container border bg-white p-5 rahbariyat-article">
                <div className="rahbariyat-img">
                    <img src="./images/1-odam.png" alt="" />
                </div>
                <div className = "rahbariyat-section1">
                    <div>
                        <p style = {{fontWeight:"600"}}>Директор</p>
                        <p>Эшондадаев Шухрат Абдуллаевич</p>
                    </div>
                    <div>
                        <p style = {{fontWeight:"600"}}>Тел/факс</p>
                        <p> Тел/факс	(91) 361-49-49</p>
                    </div>
                    <div>
                        <p style = {{fontWeight:"600"}}>Қабул куни</p>
                        <p>Сешанба, пайшанба 16-00дан 18-00гача</p>
                    </div>
                </div>
            </div>
            <div className="container border bg-white p-5 mt-2 rahbariyat-article">
                <div className="rahbariyat-img">
                    <img src="./images/2-odam.png" alt="" />
                </div>

                <div className = "rahbariyat-section1">
                    <div>
                        <p style = {{fontWeight:"600"}}>Директор ўринбосари</p>
                        <p>Акбаров Носиржон Аскаралиевич</p>
                    </div>
                    <div>
                        <p style = {{fontWeight:"600"}}>Тел/факс</p>
                        <p> Тел/факс	(91) 361-00-20</p>
                    </div>
                    <div>
                        <p style = {{fontWeight:"600"}}>Қабул куни</p>
                        <p>Чоршанба, жума 16-00дан 18-00гача</p>
                    </div>
                </div>
            </div>
            <div className="container border bg-white p-5 mt-2 mb-5 rahbariyat-article">
                <div className="rahbariyat-img">
                    <img src="./images/3-odam.png" alt="" />
                </div>

               <div className = "rahbariyat-section1">
                    <div>
                        <p style = {{fontWeight:"600"}}>Бош хисобчи</p>
                        <p>Бабаева Муяссар Умаржановна</p>
                    </div>
                    <div>
                        <p style = {{fontWeight:"600"}}>Тел/факс</p>
                        <p> Тел/факс	(93) 406-71-27</p>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Rahbariyat
