import React from 'react'
import CarS from './Car.js';
import Foter from '../Comp/Foter'





function Home() {
  return (
    <div>

      <CarS bgimg="https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg" title="Model X" dec="From $68,590*
After Federal Tax Credit & Est. Gas Savings" butn="Demo Drive" />
      <CarS bgimg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg" title="Model Y" dec="Lease starting at $379/mo*" butn="Demo Drive"/>
      <CarS bgimg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD" title="Model Z" dec="Lease starting at $379/mo*" butn="Demo Drive"/>
      <CarS bgimg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-01-Desktop.jpg" title="Power Wall" dec="Lease starting at $379/mo*" butn="Learn More"/>
      <CarS bgimg="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global" title="Solar Roof" dec="Produce Clean Energy From Your Roof" butn="Learn More"/>
      <CarS bgimg="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" title="Accessories" />
      <Foter/>
    
    </div>
  )
}

export default Home
