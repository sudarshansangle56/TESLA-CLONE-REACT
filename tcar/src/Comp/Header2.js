import React from 'react'
import {Link} from 'react-router-dom'
function Header2() {
  return (
    <div>
       <div>
      <nav className="navbar navbar-expand-lg navbar-light "  style={{ backgroundColor:"transparent", fontSize:"22px" }}>
      <img src="/tesla-logo-png-2244.png" alt="TESLA" style={{  height:"18px",}}/>
        <div className="container-fluid" >
          <Link className="navbar-brand" style={{ fontSize:"27px", fontWeight:"bold"}} to="/"></Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
          <ul className="navbar-nav"  >
            <li className="nav-item active">
             <Link className="nav-link" to="/Vechical">
                Vehicles
              </Link>

            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/Energy">
                Energy
              </Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/Charg">
                Charging
              </Link>
            </li>
            <li className="nav-item" >
             <Link className="nav-link" to="/Shop">
                Shop
              </Link>
            </li>
            <li className="nav-item" >
             <Link className="nav-link" to="/">
                X
              </Link>
            </li>
           
          </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Header2
