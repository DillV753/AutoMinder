import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AddVehicle from './AddVehicle';
import VehicleDetail from './VehicleDetail';
import AddMaintenance from './AddMaintenance';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <p>Backend says: {message}</p>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/add-maintenance/:vehicleId" element={<AddMaintenance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;