import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <img src="/AutoMinderLogo.png" alt="AutoMinder Logo" style={{ width: '120px', marginBottom: '10px', marginTop: '15px' }} />
      <h2>Create your AutoMinder account</h2>
      <input type="text" placeholder="Full Name" style={{ marginBottom: '10px' }} />
      <input type="email" placeholder="Email" style={{ marginBottom: '10px' }} />
      <input type="password" placeholder="Password" style={{ marginBottom: '10px' }} />
      <button>Create Account</button>
      <p style={{ marginTop: '10px' }}>
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
  );
}

export default SignUp;