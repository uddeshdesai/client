import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { gapi } from "gapi-script";
// https://developers.google.com/identity/gsi/web/reference/js-reference
const handleGoogle = async (response) => {

  console.log("hi, ", response)
  fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ response }),
  })
    .then((res) => {

      return res.json();
    })
    .then((data) => {
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        // redirect to /profile
        window.location.href = "/profile";
      }

      throw new Error(data?.message || data);
    })
    .catch((error) => {
    });
};
const handleHospGoogle = async (response) => {

  console.log("hi, ", response)
  fetch("http://localhost:5000/hospital-signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ response }),
  })
    .then((res) => {

      return res.json();
    })
    .then((data) => {
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        // redirect to /profile
        window.location.href = "/hospital_details";
      }

      throw new Error(data?.message || data);
    })
    .catch((error) => {
    });
};

function BasicExample({user}) {
    
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
      };
    const [GoogleAuth, setGoogleAuth] = useState(null);
  const clientId =
    "79748364660-f2unio0s9s6i7m6hu3phi83190ol4jov.apps.googleusercontent.com";


  useEffect(() => {
    function start() {
      gapi.auth2
        .init({
          clientId: clientId,
          scope: "",
        })
        .then((obj) => {
          setGoogleAuth(obj);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
    gapi.load("client:auth2", start);
  });

  
  const onSuccessLogin = async (res) => {
    const profile = res.profileObj;
    console.log(profile, "profile");
    const access_token = gapi.auth.getToken().access_token;
    console.log(access_token)
    setGoogleAuth(gapi.auth2.getAuthInstance());
    const tokenId = GoogleAuth.currentUser.le.tokenId;
    console.log(tokenId, "tokenId");
    handleGoogle(tokenId)
  };
  const onFailureLogin = (res) => {
    console.log(res);
  };
  const onHospSuccessLogin = async (res) => {
    const profile = res.profileObj;
    console.log(profile, "hospital_details");
    const access_token = gapi.auth.getToken().access_token;
    console.log(access_token)
    setGoogleAuth(gapi.auth2.getAuthInstance());
    const tokenId = GoogleAuth.currentUser.le.tokenId;
    console.log(tokenId, "tokenId");
    handleHospGoogle(tokenId)
  };
  const onHospFailureLogin = (res) => {
    console.log(res);
  };

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MediBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/hospital_details">Hospitals</Nav.Link>
            
           {
            user.email?
            <>
            <Nav.Link href="/profile">Profile</Nav.Link>
            </>
            :
            <></>
           }

            {
              !user.email? 
              <>
              <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                variant="primary"
                size="small"
                color="neutral"
                className='nav-link'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Hospital Login
              </button>
         
              
            )}
            buttonText="Login"
            onSuccess={onHospSuccessLogin}
            onFailure={onHospFailureLogin}
            cookiePolicy={"single_host_origin"}
          /></>: <> </>
            }
            {
              !user.email? 
              <>
              <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <button
                //variant="link"
                size="small"
                color="neutral"
                className='nav-link'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{ marginLeft: "auto" }}
              >
                User Login
              </button>
         
              
            )}
            
            buttonText="Login"
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={"single_host_origin"}
            
          /></>: <button onClick={logout} className='nav-link text-danger mx-5'>logout</button>
            }
          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default BasicExample;