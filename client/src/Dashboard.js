function Dashboard() {
  const vehicles = [
    { id: 1, make: "Toyota", model: "Camry", year: 2021 },
    { id: 2, make: "Honda", model: "Civic", year: 2018 },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2>My Vehicles</h2>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', marginBottom: '10px', maxWidth: '300px' }}>
          <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;