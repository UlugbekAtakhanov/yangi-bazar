import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { SRLWrapper } from "simple-react-lightbox";


const Carousel = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src="./images/bozor1.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor2.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor6.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor7.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor8.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor9.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor10.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor11.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor12.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor13.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor14.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor15.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor16.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor17.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor19.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor20.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor21.jpg" onDragStart={handleDragStart} alt = "img1" />,
        <img src="./images/bozor22.jpg" onDragStart={handleDragStart} alt = "img1" />,
    ];
    const responsive = {
        300: { items: 1 },
        650: { items: 2 },
        1024: { items: 3 },
    };
    return (
        <div className = "carousel">
            <SRLWrapper>
                <AliceCarousel mouseTracking 
                    items={items} 
                    autoPlay = {true} 
                    autoPlayInterval = {3000} 
                    infinite = {true}
                    responsive = {responsive}
                    disableDotsControls = {true}
                    autoHeight = {true}
                    />   
            </SRLWrapper>
        </div>
    )
}

export default Carousel
