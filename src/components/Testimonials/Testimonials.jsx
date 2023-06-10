import React, {useState} from 'react'
import './Testimonials.css'
import {testimonialsData} from "../../data/TestimonialsData.jsx";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

export const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tlength = testimonialsData.length

    return (
        <div className='testimonials'>
            <div className='left-t'>
                <span>Testimonials</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>
                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt=''/>

                <div className='arrows'>
                    <img
                        src={leftArrow}
                        alt='leftArrow'
                        onClick={() => selected === 0 ? setSelected(tlength - 1) : setSelected((prev) => prev - 1)}/>
                    <img
                        src={rightArrow}
                        alt='rightArrow'
                        onClick={() => selected === tlength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)}/>
                </div>
            </div>
        </div>
    )
}
