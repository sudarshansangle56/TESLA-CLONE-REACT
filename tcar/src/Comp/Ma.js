import React from "react";
import { Link } from "react-router-dom";
function Masa({ title, dec }) {
  const videoPath = `${process.env.PUBLIC_URL}/Tesla Model 3 - Driving Footage.mp4`;

  return (
    <>
      <div className="video-background" style={{ position: "relative" }}>
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
        >
          <source src={videoPath} type="video/mp4" />
        </video>

        {/* Content Section */}
        <div className="CarM">
          <div
            className="Carmodel1"
            style={{ position: "relative", zIndex: 1, marginTop: 100 }}
          >
            <div className="hed12">
              <div>
                <h2>{title}</h2>
              </div>
              <p>{dec}</p>
            </div>
          </div>

          <div
            className="Buttongrp1"
            style={{ position: "relative", zIndex: 1, marginTop: 350 }}
          >
            <Link to="/Custom">
            <button className="btn12">Custom Order</button>
            </Link>
           
            <Link to="/Demo">
              {dec && <button className="btn3">Demo Drive</button>}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masa;
