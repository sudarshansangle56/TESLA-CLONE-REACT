import React from 'react'
import Cvehi from '../Comp/Cvehi'
import Info from '../Comp/Info'
import Header2 from '../Comp/Header2'
import Foter from '../Comp/Foter'

function Vechical() {
  return (
    <div>
        <Header2/>
       <div className="hedline">
        <h1>Vehicles Menu</h1>
      </div>
   
      <div className="loginp">
    <Cvehi link="/Mega-Menu-Vehicles-Cybertruck-1x.png" title="Cybertruck"/>
    <Cvehi link="/Mega-Menu-Vehicles-Model-3-LHD.png" title="Model-3"/>
    <Cvehi link="/Mega-Menu-Vehicles-Model-S.png"title="Model-S"/>
    <Cvehi link="/Mega-Menu-Vehicles-Model-X.png"title="Model-X"/>

      </div>
      <Info a=" Inventory" b="Used Cars" c="Demo Drive" d="Trade-in" e="Compare" f="Help Me Charge" g="Fleet" h="Semi" />
      <Foter/>

    </div>
  )
}

export default Vechical
