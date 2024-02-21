import React from 'react';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark"  style={{  position: "fixed",  backgroundColor:"transparent", fontSize:"22px" }}>
        <img src="/tesla-logo-png-2244 white.png" alt="TESLA" style={{ height:"20px",}}/>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ fontSize:"27px"}} to="/"></Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
          <ul className="navbar-nav"style={{  color:"white"}} >
            <li className="nav-item active">
             <Link className="nav-link active" to="/Vechical">
                Vehicles
              </Link>

            </li>
            <li className="nav-item active">
             <Link className="nav-link active" to="/Energy">
                Energy
              </Link>
            </li>
            <li className="nav-item active">
             <Link className="nav-link active" to="/Charg">
                Charging
              </Link>
            </li>
            <li className="nav-item active" >
             <Link className="nav-link active" to="/Shop">
                Shop
              </Link>
            </li>           
          </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
