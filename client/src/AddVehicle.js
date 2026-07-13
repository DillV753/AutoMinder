import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddVehicle() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const userId = localStorage.getItem('userId');

    fetch('http://localhost:5000/api/vehicles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, make, model, year, mileage })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate('/dashboard');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <h2>Add a Vehicle</h2>
      <input type="text" placeholder="Make" value={make} onChange={(e) => setMake(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="number" placeholder="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} style={{ marginBottom: '10px' }} />
      <button onClick={handleSubmit}>Add Vehicle</button>
    </div>
  );
}

export default AddVehicle;