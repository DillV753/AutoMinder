function Login() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <img src="/AutoMinderLogo.png" alt="AutoMinder Logo" style={{ width: '250px', marginBottom: '5px' }} />
      <h2>Login to AutoMinder</h2>
      <input type="email" placeholder="Email" style={{ marginBottom: '10px' }} />
      <input type="password" placeholder="Password" style={{ marginBottom: '10px' }} />
      <button>Log In</button>
    </div>
  );
}

export default Login;