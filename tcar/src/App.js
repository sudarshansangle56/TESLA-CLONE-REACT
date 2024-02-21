import React from "react";
import "./App.css";
import Main from "./Main";
import Charg from './Pages/Charg';
import Shop from './Pages/Shop';
import Energy from './Pages/Energy';
import Vechical from './Pages/Vechical';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./Comp/Demo";
import Custom from "./Comp/Custom";




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Charg" element={<Charg />} />
          <Route path="/Vechical" element={<Vechical />} />
          <Route path="/Energy" element={<Energy />} />
          <Route path="/Demo" element={<Demo/>} />
          <Route path="/Custom" element={<Custom/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
