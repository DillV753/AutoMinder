import { useState } from 'react';

function AddMaintenance() {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [mileage, setMileage] = useState('');

  const handleSubmit = () => {
    alert(`Record added: ${type} on ${date} at ${mileage} miles`);
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
      <input type="text" placeholder="Service Type" value={type} onChange={(e) => setType(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="number" placeholder="Mileage" value={mileage} onChange={(e) => setMileage(e.target.value)} style={{ marginBottom: '10px' }} />
      <button onClick={handleSubmit}>Add Record</button>
    </div>
  );
}
 
export default AddMaintenance;