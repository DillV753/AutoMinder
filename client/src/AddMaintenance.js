import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AddMaintenance() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [mileage, setMileage] = useState('');
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const handleSubmit = () => {
    fetch('http://localhost:5000/api/maintenance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicleId, type, date, mileage })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/vehicle/${vehicleId}`);
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
      <h2>Add Maintenance Record</h2>
      <input type="text" placeholder="Service Type (e.g. Oil Change)" value={type} onChange={(e) => setType(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="number" placeholder="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} style={{ marginBottom: '10px' }} />
      <button onClick={handleSubmit}>Add Record</button>
    </div>
  );
} 
 
export default AddMaintenance; 