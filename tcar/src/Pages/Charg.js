import React from 'react'
import Cvehi from '../Comp/Cvehi'
import Header2 from '../Comp/Header2'
import Info from '../Comp/Info'
import Foter from '../Comp/Foter'

function Charg() {
  return (
    <div>
      <Header2/>
      <div className="hedline">
        <h1>Charging Menu</h1>
      </div>
      
    
        <div className="loginp">
        <Cvehi link="/Mega-Menu-Charging-Charging.png"title="Charging"/>
        <Cvehi link="/Mega-Menu-Charging-Home-Charging.png"title="Home-Charging"/>
        <Cvehi link="/Mega-Menu-Charging-Supercharging-NA.png"title="Super-Charging"/>
        </div> 
        <Info a="Help Me Charge" b="Charging Calculator" c="Trip Planner" d="Supercharger Voting" e="Host a Supercharger" f="Commercial Charging" g="Host Wall Connectors" />
      <Foter/>
        
         </div>
  )
}

export default Charg
