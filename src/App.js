import React from 'react';

const App = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #FFD700, #FF8C00)',
  };

  const boxStyle = {
    padding: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#FFA500',
    borderRadius: '15px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
    border: '4px solid white',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>🚀 Test File Pipeline(Jenkins) 🚀</div>
    </div>
  );
};

export default App;
