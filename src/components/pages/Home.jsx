import React from 'react'
import Cta from '../Cta'
import FeaturesHome from '../FeaturesHome'
import IntroHome from '../IntroHome'
import MiddleHome from '../MiddleHome'

function Home(){
    return(
        <div>
            <IntroHome></IntroHome>
            <MiddleHome></MiddleHome>
            <FeaturesHome></FeaturesHome>
            <Cta/>
        </div>
    )
}
export default Home;