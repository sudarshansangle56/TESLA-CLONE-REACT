import React from 'react';


function Cvehi({Headl,title,link}) {
  return (
    <div>
    
      <div className="vehical">
        <div className="car1">
            <div className="cartesla">
            <img src={link} alt="" />
            </div>
          <div>
          <h2>{title}</h2>
          </div>
            <div className="lern">
           <h5>learn</h5>

           <h5>order</h5>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cvehi;
