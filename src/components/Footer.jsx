import {Grid} from '@material-ui/core';
import React from 'react'
import {Link} from 'react-router-dom';

import Logo from '../components/assets/shared/desktop/logo-light.png'
function Footer() {
    return (
        <div className="footer-cont">
            <Grid container direction="row" className="links-row">
                <Grid item xs={12} sm={2} className="logo-col">
                    <img src={Logo} alt="designo"/>
                </Grid>
                <Grid item xs={12} sm={2} className="logo-col"></Grid>
                <Grid item xs={12} sm={2} className="logo-col"></Grid>
                <Grid item xs={12} sm={2} className="links-col">
                    <Link to='/about' className='nav-links'>Our Company</Link>
                </Grid>
                <Grid item xs={12} sm={2} className="links-col">
                    <Link to='/locations' className='nav-links'>Locations</Link>
                </Grid>
                <Grid item xs={12} sm={2} className="links-col">
                    <Link to='/contact' className='nav-links'>Contact</Link>
                </Grid>
            </Grid>
            <hr/>
            <Grid container direction="row" className="directions-row">
                <Grid item xs={12} sm={4} className="direction-col">
                   <p className="title">Designo Central Office</p>
                   <p>3886 Wellington Street</p>
                   <p>Toronto, Ontario M9C 3J5</p>
                </Grid>
                <Grid item xs={12} sm={4} className="contact-col">
                <p>Contact Us (Central Office)</p>
                   <p>P : +1 253-863-8967</p>
                   <p>M : contact@designo.co</p>
                </Grid>
                <Grid item xs={12} sm={4} className="logo-col">
                    <i className="fab fa-2x fa-facebook"></i>
                    <i className="fab fa-2x fa-youtube"></i>
                    <i className="fab fa-2x fa-twitter"></i>
                    <i className="fab fa-2x fa-pinterest"></i>
                    <i className="fab fa-2x fa-instagram"></i>
                </Grid>
            </Grid>
        </div>
    )
}
export default Footer;