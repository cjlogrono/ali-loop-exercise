import React from 'react';

// loading gif
import Loading from '../../assets/loading.gif';

function LoadingScreen() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: `url("${Loading}")`,
        backgroundSize: 'auto auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      data-testid="Loading screen"
    />
  );
}

export default LoadingScreen;
