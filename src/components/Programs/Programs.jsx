import React from 'react'
import './Programs.css'
import {programsData} from "../../data/ProgramsData.jsx";
import RightArrow from '../../assets/rightArrow.png'

export const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            {/* header */}
            <div className='programs-header'>
                <span className='stroke-text'>Explore our </span>
                <span>Programs </span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className='programs-categories'>
                {programsData.map((programData, i) => (
                    <div className='category' key={i}>
                        {programData.image}
                        <span>{programData.heading}</span>
                        <span>{programData.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <img src={RightArrow} alt='right-arrow'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
