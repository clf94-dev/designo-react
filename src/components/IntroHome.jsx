import React from 'react';
import {Grid} from '@material-ui/core'

import './styles/App.scss'

import Hero from './assets/home/desktop/image-hero-phone.png';
import Backg from './assets/home/desktop/bg-pattern-hero-home.svg';

function IntroHome(){
    return(
        <div>
            <Grid container direction="row" className="introHome-cont">
                <img src={Backg} alt="circle background" className="bg-intro"/>
                <Grid item xs={12} md={6} className="text-col">
<h3>Award-winning custom designs and digital branding solutions</h3>
<p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <button className="introHome-btn">Learn More</button>
                </Grid>
                <Grid item xs={12} md={6} className="img-col">
                    <img src={Hero} alt="Smartphone"/>
                </Grid>
            </Grid>
        </div>
    )
}
export default IntroHome;