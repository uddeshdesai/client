import { Card, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, {useState} from 'react';

const HospitalProfile = ()=>{ 
  const [userDetails, setuserDetails] = useState({
    "_id": "6441bb601f2174059abafc4d",
    "email": "uddesh.desai@ritgoa.ac.in",
    "city": "Bicholim",
    "state": "Goa",
    "hospital_desc": null,
    "hospital_latitude": null,
    "hospital_longitude": null,
    "hospital_name": "Ponda Govt. Hospital",
    "hospital_phone": "985487155212"
  })
  return (
  <>
    <Container>
      <div className="profile">
      <div className="mt-5">
        <h2>Hospital Details</h2>
      </div>
      <Card>
        <Card.Header>{userDetails.hospital_name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
          <p style={{"fontSize": "15px"}}>
              {' '}
              Email:
              {userDetails.email}
              {' '}
            </p>
            <button></button>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      </div>
  </Container>

  <Container>
  <div className="profile">
      <div className="mt-5">
        <h2>Services</h2>
      </div>
    </div>
  </Container>
</>);};




export default HospitalProfile;