import { Grid } from '@material-ui/core';
import React from 'react'
import Circles from '../components/assets/shared/desktop/bg-pattern-call-to-action.svg'
function Cta(){
    return(
        <div>
            <Grid container direction="row" className="cta-cont">
                <img src={Circles} alt="circles backg" className="circles"/>
                <Grid item  xs={12} sm={6} className="text-col">
                    <h2>Let’s talk about your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </Grid>
                <Grid item  xs={12} sm={6} className="btn-col">
                    <button className="cta-btn">Get In Touch</button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cta;