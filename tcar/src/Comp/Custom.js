import React from "react";
import Foter from "../Comp/Foter";
import Header2 from "../Comp/Header2";

function Custom({ imgsr }) {
  return (
    <div>
      <Header2 />

      <div className="custom">
        <div className="part1">
          <img
            src="Mega-Menu-Vehicles-Model-X.png"
            class="img-fluid"
            alt="..."
          />
          <img src="{imgsr}" alt="" srcset="" />

          <video
            autoPlay
            muted
            loop
            style={{
              width: "80%",
              height: "100%",
            }}
          >
            <source
              src="/DEMO img/Navigate on Autopilot.webm"
              type="video/webm"
            />
          </video>
          <video
            autoPlay
            muted
            loop
            style={{
              width: "80%",
              height: "100%",
            }}
          >
            <source
              src="/DEMO img/Smart Summon.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="part2">
          <div className="card">
            <div class="card" style={{ width: "18rem;" }}>
              <div class="card-body">
                <h5 class="card-title">Federal Tax Credit</h5>
                <p class="card-text">
                  Eligible buyers receive $7,500 off the purchase price of new
                  Model X Dual Motor.
                  <br /> Applied to the purchase price at time of delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="CT">
            <h2>Model X</h2>
            <p>Est. Delivery: Feb-Mar 2024</p>
          </div>
          <div className="btns">
            <button>Purchase Price</button>
            <button>Probable Savings</button>
          </div>
          <div className="about1">
            <div className="A12">
              <h4>272mi</h4>
              <p>Range (EPA est.)</p>
            </div>
            <div className="A12">
              <h4>125mph</h4>
              <p>Top Speed</p>
            </div>
            <div className="A12">
              <h4>5.8sec</h4>
              <p>0-60 mph</p>
            </div>
            <div className="but">
              <h4>Rear-Wheel Drive</h4>
              <div className="to2">
              <button>Model 3</button>
              </div>
              

              <h4>Dual Motor All-Wheel Drive</h4>
              <button>Model 3 long Range</button>

              <p>
                Prices above include potential incentives and gas savings of
                $3,000
              </p>
            </div>
          </div>
          <div className="head4">
            <h2>Full Self-Driving  Capability</h2>
            <div className="headline">
            <h6>
              Your car will be able to drive itself almost anywhere with minimal
              driver intervention and will continuously improve <br /> <br /> All
              functionality of Basic Autopilot and Enhanced Autopilot <br /> <br />Autosteer
              on city streets <br /> <br />Traffic Light and Stop Sign Control
            </h6>
            <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
            </div>
          
           
               <div className="btns2">
                <div className="Q1">
                <button>Add</button>
                </div>
                <div className="Q2">
                <button>Feature Details</button>
                </div>
               </div>
            <div className="op">
              <h3>Order Your Model 3</h3>
              <p>Est. Delivery: Apr – May 2024</p>
              <div className="Q3">
              <button>Continue</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
}

export default Custom;
