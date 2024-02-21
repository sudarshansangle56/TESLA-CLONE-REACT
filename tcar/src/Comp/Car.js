import React from "react";
import {Link} from 'react-router-dom'
function Car({ bgimg, title, dec,butn }) {
  return (
    <div
      className="CarS"
      style={{
        backgroundImage: `Url("${bgimg}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="Carmodel">
        <div>
          <h2>{title}</h2>
        </div>
        <p>{dec}</p>
      </div>
      <div className="Buttongrp">
            <Link to="/Custom">
            <button className="btn12">Custom Order</button>
            </Link>

        <Link to="/Demo">
        {dec && <button className="btn3"> {butn}</button>}   
        </Link>

        
      </div>
    </div>
  );
}

export default Car;
