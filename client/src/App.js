import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AddVehicle from './AddVehicle';
import VehicleDetail from './VehicleDetail';
import AddMaintenance from './AddMaintenance';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/vehicle/:id" element={<VehicleDetail />} />
          <Route path="/add-maintenance" element={<AddMaintenance />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;