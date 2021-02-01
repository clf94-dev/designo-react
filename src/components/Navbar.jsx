import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Logo from './assets/shared/desktop/logo-dark.png';

import './styles/App.scss';

function Navbar({active}){
    const [click, setClick] = useState(false);

    const handleClick=() =>setClick(!click);
const closeMobileMenu=(  )=> setClick(false);
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={Logo} alt="navbar logo"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i
                        className={click
                        ? 'fas fa-times'
                        : 'fas fa-bars'}></i>

                </div>
                <ul
                    className={click
                    ? 'nav-menu active'
                    : 'nav-menu'}>
                    <li className="nav-item" >
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu} style={{color: active === "home"? '#E7816B' :'#203A4C'}}>Our Company</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/locations' className='nav-links' onClick={closeMobileMenu} style={{color: active === "portfolio"? '#E7816B' :'#203A4C'}}>Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu} style={{color: active === "contact-me"? '#E7816B' :'#203A4C'}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;