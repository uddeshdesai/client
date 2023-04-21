import { Card, Container } from "react-bootstrap";
import React, {useState} from 'react';
import BasicExample from "../components/BasicExample";

    const PatientProfile = ()=>{ 
const [userDetails, setuserDetails] = useState({
    "firstName": "Sarvesh",
    "lastName": "Patkar",
    "email": "spatkar131201@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNwYXRrYXIxMzEyMDFAZ21haWwuY29tIiwiaWF0IjoxNjgyMDI0NzY0LCJleHAiOjE2ODIxMTExNjR9.Cgm9T2us7aV8cRp2HOun0OAKr31CpVs1NzK7OrlGq4E",
    "city": "Bicholim",
    "state": "Goa"
})
        return (
<>
<Container>
    <div className="profile">
    <div className="mt-5">
      <h2>Patient Profile</h2>
      {/* <p><strong>Name: </strong>{name}</p>
      <p><strong>Age: </strong>{age}</p>
      <p><strong>Gender: </strong>{gender}</p> */}
    </div>
    <Card>
      <Card.Header>{userDetails.firstName} {userDetails.lastName}</Card.Header>
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
</Container></>
  );
};




export default PatientProfile;