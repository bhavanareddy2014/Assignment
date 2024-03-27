import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { config } from './Components/common/config';
import Slider from './Components/Dashboard';
import Login from './Components/Login';


function App() {
  return (
    <Router>
      <Routes>
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
