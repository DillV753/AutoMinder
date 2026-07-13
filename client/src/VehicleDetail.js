import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function VehicleDetail() {
  const { id: vehicleId } = useParams();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/maintenance/${vehicleId}`)
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error(err));
  }, [vehicleId]);

  return (
    <div style={{ padding: '40px' }}>
      <h2>Vehicle Detail</h2>
      <Link to={`/add-maintenance/${vehicleId}`}><button>+ Add Maintenance Record</button></Link>
      <h3>Maintenance History</h3>
      {records.length === 0 ? (
        <p>No maintenance records yet.</p>
      ) : (
        records.map((record) => (
          <div key={record.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', maxWidth: '300px' }}>
            <p><strong>{record.type}</strong></p>
            <p>Date: {new Date(record.date).toLocaleDateString()}</p>
            <p>Mileage: {record.mileage}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default VehicleDetail;