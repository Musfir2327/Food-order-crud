import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManageFood from './Component/ManageFood';
import UpdateFood from './Component/updateFood';
import AddFood from './Component/AddFood';

function App() {
  return (
    <Router>
      <Routes>
        {/* Update this route to load AddFood by default */}
        <Route path="/" element={<AddFood />} />
        <Route path="/add" element={<AddFood />} />
        <Route path="/update" element={<UpdateFood />} />
        <Route path="/manage-food" element={<ManageFood />} />
        
      </Routes>
    </Router>
  );
}

export default App;
