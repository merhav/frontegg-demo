import React, { useEffect, useState } from 'react';
import { useFrontegg } from '@frontegg/react';

const HomePage = () => {
  const { user, isAuthenticated, logout } = useFrontegg();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>You are not logged in. Please login to continue.</div>;
  }

  return (
    <div>
      <h2>Welcome to the Homepage</h2>
      <div>
        <img src={user?.profilePicture} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <p>Name: {user?.name}</p>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
