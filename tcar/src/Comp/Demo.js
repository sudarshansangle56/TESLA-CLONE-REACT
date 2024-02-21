import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faGears, faBolt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import Foter from '../Comp/Foter';
import Header2 from "../Comp/Header2";

function Demo() {
  const [selectedModel, setSelectedModel] = useState('Model X'); // Set initial state to 'Model X'

  const handleButtonClick = (model) => {
    setSelectedModel(model);
  };

  const modelImages = {
    'Model S': '/DEMO img/Screenshot 2024-02-18 224749.png',
    'Model 3': '/DEMO img/Screenshot 2024-02-18 224806.png',
    'Model X': '/DEMO img/Screenshot 2024-02-18 224824.png',
    'Model Y': '/DEMO img/Screenshot 2024-02-18 224707.png',
  };

  // Use useEffect to handle initial setup
  useEffect(() => {
    // This effect runs once when the component mounts
    // Set the initial selectedModel to 'Model X'
    setSelectedModel('Model X');
  }, []);

  return (
    <div>
      <Header2/>
      <div className="head">
        <h1>Schedule a Demo Drive</h1>
      </div>
      <div className="about">
        <div className="A1">
          <FontAwesomeIcon icon={faCar} />
          <h5>30 Minute Demo <br /> Drive</h5>
        </div>
        <div className="A1">
          <FontAwesomeIcon icon={faGears} />
          <h5>Experience Tesla <br /> Technology</h5>
        </div>
        <div className="A1">
          <FontAwesomeIcon icon={faBolt} />
          <h5>Learn About <br /> Charging  & Savings</h5>
        </div>
        <div className="A1">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <h5>All Your Questions <br /> Answered</h5>
        </div>
      </div>
      <div className="model">
        <h3>Select Model</h3>
        <div className="select">
          {Object.keys(modelImages).map((model) => (
            <button key={model} onClick={() => handleButtonClick(model)}>
              {model}
            </button>
          ))}
        </div>
        {selectedModel && (
          <>
            <p>Selected Model: {selectedModel}</p>
            <img src={modelImages[selectedModel]} alt={`Tesla ${selectedModel} Model`} />
          </>
        )}
      </div>
      <div className="time">
        <h3> Find Time and Location</h3>
        <p>Input your zip code to search for Tesla showrooms and schedule a Demo Drive</p>
        <input type="search" placeholder='Zip Code' name="" id="" />

      </div>
      <Foter/>
    </div>
  );
}

export default Demo;
