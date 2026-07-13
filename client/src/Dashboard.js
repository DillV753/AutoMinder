import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    fetch(`http://localhost:5000/api/vehicles/${userId}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '40px' }}>
      <h2>My Vehicles</h2>
      <Link to="/add-vehicle"><button>+ Add Vehicle</button></Link>
      {vehicles.length === 0 ? (
        <p>No vehicles added yet.</p>
      ) : (
        vehicles.map((vehicle) => (
          <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', maxWidth: '300px' }}>
              <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              <p>Mileage: {vehicle.mileage}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Dashboard;