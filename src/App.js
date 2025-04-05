import React from 'react';

const App = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    padding: '40px 60px',
    fontSize: '28px',
    fontWeight: '600',
    color: '#fff',
    background: 'linear-gradient(145deg, #FFA500, #FF8C00)',
    borderRadius: '20px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    border: '3px solid rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  };

  const creditStyle = {
    fontSize: '16px',
    color: '#fff',
    background: 'rgba(0,0,0,0.2)',
    padding: '10px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(4px)',
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...boxStyle,
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.03)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        🚀 Test File Pipeline (Jenkins) 🚀
      </div>
      <div style={creditStyle}>👨‍💻 Developed by Pawan Kumar</div>
    </div>
  );
};

export default App;
