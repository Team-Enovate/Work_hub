import React from 'react';
import { useSlashAuth } from "@slashauth/slashauth-react";

 const LogoutButton = () => {
  const { logout } = useSlashAuth();

  return <button onClick={() => logout()}>Logout</button>;
};
export default LogoutButton;