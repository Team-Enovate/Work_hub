import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Link } from "react-router-dom";
// import SignUpForm from "../forms/SignUpForm";
// import AddUser from "../components1/shared/AddUser";
import work from "../images/wrk.jpeg";
import { NavLink as RRNavLink } from "react-router-dom";
import { useSlashAuth } from '@slashauth/slashauth-react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const User3 = () => {
    const { account, connectedWallet, isAuthenticated } = useSlashAuth();
    const { logout } = useSlashAuth();

  return (
    <div className="pageContainer">
    {/* <h1>Main Page</h1> */}
    
   {/* <!-- Pills navs --> */}
   <div>
   
  
   
   
   </div>
    
   <br/>
   <br/>  <br/>
   <br/>
   <br/>
   <div class="mx-auto" style={{width: `1200px`}}>
   
 
{/* <!------ Include the above in your HEAD tag ----------> */}

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://icon-library.com/images/icon-company/icon-company-26.jpg" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        User Profile
                                    </h5>
                                    <h6>
                                        User Name
                                    </h6>
                                    <Tabs
      id="controlled-tab-example"
    //   activeKey={key}
    //   onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="edit" title="Edit Details">
      <div>
      <div style={{ display: 'block' }}>
        <div>Account: {account?.sub}</div>
        <div>Is Wallet Connected? {connectedWallet ? 'Yes' : 'No'}</div>
        {connectedWallet && <div>Wallet address: {connectedWallet}</div>}
        <div>Is Logged In? {isAuthenticated ? 'yes' : 'No'}</div>
      </div>
    </div>
      </Tab>
      <Tab eventKey="team" title="Edit Team">
        <p class="text-dark">From you have I been absent in the spring, When proud-pied April, dress'd in all his trim, Hath put a spirit of youth in every thing, That heavy Saturn laugh'd and leap'd with him. Yet nor the lays of birds, nor the sweet smell Of different flowers in odour and in hue, Could make me any summer's story tell, Or from their proud lap pluck them where they grew: Nor did I wonder at the lily's white, Nor praise the deep vermilion in the rose;</p>
      </Tab>
      <Tab eventKey="request" title="Request" >
        
      </Tab>
    </Tabs>
                    </div>
                    <div class="col-md-2">
                    <div>{isAuthenticated ? (<button onClick={() => logout()}>Logout</button>): 'login'}</div>
                    </div>
                </div>
                </div>
                    </form>  
                </div>
                    
        </div>
</div>

  
  );
};

export default User3;
