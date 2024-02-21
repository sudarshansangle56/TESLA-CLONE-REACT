import React from "react";
import Cvehi from '../Comp/Cvehi'
import Header2 from '../Comp/Header2'
import Info from '../Comp/Info'
import Foter from '../Comp/Foter'
function Shop() {
  return (
    <div>
        <Header2/>
      <div className="hedline">
        <h1>Shop Menu</h1>
      </div>
      <div className="loginp">
        <Cvehi link="/Mega-Menu-Shop-Vehicle-Accessories.png"title="Vehicle-Accessories" />
        <Cvehi link="/Mega-Menu-Shop-Lifestyle.png" title="Lifestyle"/>
        <Cvehi link="/Mega-Menu-Shop-Charging.png" title="Charging"/>
        <Cvehi link="/Mega-Menu-Shop-Apparel.png"title="Apparel" />
      </div>
      <Info a="" b="" c="" d="" e="" f="" g="" h="" />
      <Foter/>

    </div>
  );
}

export default Shop;
