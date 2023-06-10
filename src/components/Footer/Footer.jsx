import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <hr/>
            <div className='footer'>
                <div className='social-links'>
                    <img src={Github} alt='github'/>
                    <img src={Instagram} alt='instagram'/>
                    <img src={LinkedIn} alt='linkedin'/>
                </div>
                <div className='logo-f'>
                    <img src={Logo} alt=''/>
                </div>
            </div>
            <div className='blur blur-f-1'></div>
            <div className='blur blur-f-2'></div>
        </div>
    )
}
