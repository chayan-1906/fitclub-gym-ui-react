import React, {useState} from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

export const Header = () => {
    const mobile = window.innerWidth <= 768;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='header' id='header'>
            <img src={logo} alt='' className='logo'/>
            {!menuOpened && mobile ?
                <div
                    style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
                    onClick={() => setMenuOpened(true)}>
                    <img
                        src={bars}
                        alt='bars'
                        style={{width: '1.5rem', height: '1.5rem'}}/>
                </div> :
                <ul className='header-menu'>
                    <li>
                        <Link
                            to='header'
                            activeClass='active'
                            span={true}
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                        >Home</Link></li>
                    <li>
                        <Link
                            to='programs'
                            span={true}
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                        >Programs</Link>
                    </li>
                    <li>
                        <Link
                            to='reasons'
                            span={true}
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                        >Why us</Link>
                    </li>
                    <li>
                        <Link
                            to='plans'
                            span={true}
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                        >Plans</Link>
                    </li>
                    <li>
                        <Link
                            to='testimonials'
                            span={true}
                            spy={true}
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                        >Testimonials</Link>
                    </li>
                </ul>
            }
        </div>
    )
}
