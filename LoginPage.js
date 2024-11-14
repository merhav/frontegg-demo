import React from 'react';
import { useFrontegg } from '@frontegg/react';

const LoginPage = () => {
  const { loginWithRedirect } = useFrontegg();

  const handleLogin = () => {
    // This will trigger Frontegg's authentication flow
    loginWithRedirect();
  };

  return (
    <div>
      <h2>Login to your account</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
