import { Grid } from '@material-ui/core';
import React from 'react'

import WebDesigD from './assets/home/desktop/image-web-design-large.jpg'
import AppDesigD from './assets/home/desktop/image-app-design.jpg'
import GraphicDesigD from './assets/home/desktop/image-graphic-design.jpg'
import Arrow from './assets/shared/desktop/icon-right-arrow.svg'

import './styles/App.scss';

function MiddleHome(){
    return(
        <div>
            <Grid container direction="row" className="middleHome-cont">
                <Grid item xs={12} md={6} className="webDesign-col">
<img src={WebDesigD} alt="Web Design"/>
<div className="web-text">
    <h2>WEB DESIGN</h2>
    <p>VIEW PROJECTS <img src={Arrow} alt="Arrow"/></p>
</div>

                </Grid>
                <Grid item xs={12} md={6} className="appGraphic-col">
<div className="app-graphic-cont">
<img src={AppDesigD} alt="Web Design"/>
<div className="web-text">
    <h2>WEB DESIGN</h2>
    <p>VIEW PROJECTS <img src={Arrow} alt="Arrow"/></p>
</div>
</div>
<div className="app-graphic-cont">
<img src={GraphicDesigD} alt="Web Design"/>
<div className="web-text">
    <h2>WEB DESIGN</h2>
    <p>VIEW PROJECTS <img src={Arrow} alt="Arrow"/></p>
</div>
</div>
</Grid>

            </Grid>
        </div>
    )
}
export default MiddleHome;