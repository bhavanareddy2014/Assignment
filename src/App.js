import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { config } from './Components/common/config';
import Slider from './Components/Dashboard';
import Login from './Components/Login';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path={"/login"} element= {<Login />} />
        <Route
          path="/dashboard"
          element={<Slider config={config} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
