import React from "react";
import Cvehi from "../Comp/Cvehi";
import Header2 from "../Comp/Header2";
import Foter from "../Comp/Foter";
import Info from "../Comp/Info";
function Energy() {
  return (
    <div>
      <Header2 />
      <div className="hedline">
        <h1>Energy Menu</h1>
      </div>

      <div className="loginp">
        <Cvehi link="/Mega-Menu-Energy-Megapack.png" title="Megapack" />
        <Cvehi link="/Mega-Menu-Energy-Powerwall-US.png" title="Powerwall" />
        <Cvehi link="/Mega-Menu-Energy-Solar-Roof.png" title="Solar-Roof" />
        <Cvehi link="/Mega-Menu-Energy-Solar-Panels.png" title="Solar-Panels" />
      </div>
      <Info
        a="Why Solar"
        b="Incentives"
        c="Support"
        d="Partner with Tesla"
        e="Commercial"
        f="Utilities"
        g="Schedule a Consultation"
      />
      <Foter />
    </div>
  );
}

export default Energy;
