import React from 'react'
import Cta from '../Cta'
import FeaturesAboutCard from '../FeaturesAboutCard'
import LocationRow from '../LocationRow'
import TopAboutContact from '../TopAboutContact'

function About(){
    return(
        <div>
          <TopAboutContact></TopAboutContact>  
          <FeaturesAboutCard></FeaturesAboutCard>
          <LocationRow></LocationRow>
          <FeaturesAboutCard></FeaturesAboutCard>
          <Cta></Cta>
        </div>
    )
}
export default About;