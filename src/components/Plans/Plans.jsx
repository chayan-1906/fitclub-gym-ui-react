import React from 'react'
import {plansData} from "../../data/PlansData.jsx";
import whiteTick from '../../assets/whiteTick.png';
import './Plans.css'

export const Plans = () => {
    return (
        <div className='plans-container'>
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='programs-header' style={{gap: '2rem'}}>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>
            {/* plans card*/}
            <div className='plans'>
                {
                    plansData.map((plan, i) => {
                        return (
                            <div className='plan' key={i}>
                                {plan.icon}
                                <span>{plan.name}</span>
                                <span>$ {plan.price}</span>
                                <div className='features' key={i}>
                                    {plan.features.map((feature, i) => {
                                        return (
                                            <div className='feature' key={i}>
                                                <img src={whiteTick} alt=''/>
                                                <span key={i}>{feature}</span>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div><span>See more benefits -&gt;</span></div>
                                <button className='btn'>Join now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
