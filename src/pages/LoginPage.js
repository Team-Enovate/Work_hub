import React, { useContext } from "react";
import work from "../images/work.jpeg";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionContext";
import { useSlashAuth } from '@slashauth/slashauth-react';
const LoginPage = () => {
  const { openSignIn } = useSlashAuth();

   

  return (
    <div
      // fix background image
      className="pageContainer full-bg-size bg-view"
      style={{ backgroundImage: `url(${work})` }}
    >
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      
      
      <button onClick={() => openSignIn()}>Login</button>;
            </div>
  );
};

export default LoginPage;
