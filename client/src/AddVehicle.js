import { useState } from 'react';

function AddVehicle() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = () => {
    alert(`Vehicle added: ${year} ${make} ${model}`);
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
      <input
        type="text"
        placeholder="Make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <button onClick={handleSubmit}>Add Vehicle</button>
    </div>
  );
}

export default AddVehicle;