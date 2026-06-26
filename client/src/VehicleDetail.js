import { Link } from 'react-router-dom';

function VehicleDetail() {
  const maintenanceHistory = [
    { id: 1, type: "Oil Change", date: "2026-03-15", mileage: 32000 },
    { id: 2, type: "Tire Rotation", date: "2026-01-10", mileage: 30000 },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>2021 Toyota Camry</h2>
      <Link to="/add-maintenance"><button>+ Add Maintenance Record</button></Link>
      <h3>Maintenance History</h3>
      {maintenanceHistory.map((record) => (
        <div key={record.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', maxWidth: '300px' }}>
          <p><strong>{record.type}</strong></p>
          <p>Date: {record.date}</p>
          <p>Mileage: {record.mileage}</p>
        </div>
      ))}
    </div>
  );
}

export default VehicleDetail;