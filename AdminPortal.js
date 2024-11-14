import React from 'react';
import { useFrontegg } from '@frontegg/react';

function Settings() {
  const { user } = useFrontegg();

  return (
    <div>
      <h1>Admin Portal (Settings)</h1>
      <p>User Info:</p>
      <p>Name: {user?.first_name} {user?.last_name}</p>
      <p>Email: {user?.email}</p>

      {/* Admin actions */}
      <button>Invite User</button>
      <button>View Audit Logs</button>
      <button>Create M2M Tokens</button>
    </div>
  );
}

export default Settings;
