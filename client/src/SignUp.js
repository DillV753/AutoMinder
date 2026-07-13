import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
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
      <img src="/AutoMinderLogo.png" alt="AutoMinder Logo" style={{ width: '120px', marginBottom: '10px' }} />
      <h2>Create your AutoMinder account</h2>
      <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginBottom: '10px' }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px' }} />
      <button onClick={handleSubmit}>Create Account</button>
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;