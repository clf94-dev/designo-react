import { Grid } from '@material-ui/core';
import React from 'react'
import {FeaturesHomeInfo} from './FeaturesHomeInfo.js'
import PassionateD from './assets/home/desktop/illustration-passionate.svg'
import ResourcefulD from './assets/home/desktop/illustration-resourceful.svg'
import FriendlyD from './assets/home/desktop/illustration-friendly.svg'

function FeaturesHome(){
    const ImgD = [PassionateD, ResourcefulD, FriendlyD];
    return(
        <div>
            <Grid container direction="row" className="features-cont">
                {FeaturesHomeInfo.map(item => {
                    return(
                        <Grid item xs={12} sm={4} className="feat-col">
                            <img src={ImgD[item.index]} alt={item.title}/>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>

                        </Grid>
                        
                    );
                })}
            </Grid>
        </div>
    )
}
export default FeaturesHome;