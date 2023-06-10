import React from 'react'
import './Hero.css'
import {Header} from "../Header/Header.jsx";
import Heart from '/src/assets/heart.png'
import hero_image from '/src/assets/hero_image.png'
import hero_image_back from '/src/assets/hero_image_back.png'
import calories from '/src/assets/calories.png'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header/>
                {/* the best ad */}
                <div className='the-best-ad'>
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className='hero-text'>
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div className='hero-text'>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className='figures'>
                    <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className='hero-buttons'>
                    <buttons className='btn'>Get Started</buttons>
                    <buttons className='btn'>Learn More</buttons>
                </div>

            </div>

            <div className='right-h'>
                <button className='btn'>Join Now</button>
                <div className='heart-rate'>
                    <img src={Heart} alt=''/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                {/* hero images */}
                <img src={hero_image} alt='' className='hero-image'/>
                <img src={hero_image_back} alt='' className='hero-image-back'/>

                {/* calories */}
                <div className='calories'>
                    <img src={calories} alt=''/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
