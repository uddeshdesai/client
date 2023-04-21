import { Card, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from 'react';
import Appointmentcard from "./appointmentcard";
import Form from 'react-bootstrap/Form';
import axios, { AxiosHeaders } from "axios"
const PatientProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      setUser(JSON.parse(theUser));
    }
    getUserData()
  }, []);
  const [userDetails, setuserDetails] = useState({
    "firstName": "Sarvesh",
    "lastName": "Patkar",
    "email": "spatkar131201@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNwYXRrYXIxMzEyMDFAZ21haWwuY29tIiwiaWF0IjoxNjgyMDI0NzY0LCJleHAiOjE2ODIxMTExNjR9.Cgm9T2us7aV8cRp2HOun0OAKr31CpVs1NzK7OrlGq4E",
    "city": "Bicholim",
    "state": "Goa",
    "phone_number": 35116137171
  })
  const getUserData = async () =>{
    axios.defaults.headers = {
      Authorization: `Bearer ${user.token}`,
  };
    let res = await axios.get("https://localhost:5000/profile")
    console.log(res.data)
  }
  useEffect(() => {


  }, [])
  
  return (
    <>
      <Container>
        <div className="profile">
          <div className="mt-5">
            <h2>Patient Profile</h2>
          </div>
          <Card>
            <Card.Header>{userDetails.firstName} {userDetails.lastName}</Card.Header>
            <Card.Body>
              
            </Card.Body>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Enter Phone Number"  value={userDetails.phone_number} onChange={(e)=>{
                    setuserDetails({...userDetails, phone_number: e.target.value})
                  }}/>
                  <Form.Text className="text-muted">
                    We'll never share your number with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="Enter State" value={userDetails.state} onChange={(e)=>{
                    setuserDetails({...userDetails, state: e.target.value})
                  }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City"  value={userDetails.city} onChange={(e)=>{
                    setuserDetails({...userDetails, city: e.target.value})
                  }}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>



        </div>
      </Container>

      <Container>
        <div className="profile">
          <div className="mt-5">
            <h2>Appointment List</h2>
          </div>
          <Card>
            <Card.Header>Appointment List</Card.Header>
          </Card>

          <Table striped>
            <thead>
              <tr>
                <th>No.</th>
                <th>Hospital Name</th>
                <th>Timing</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Appointmentcard />
            </tbody>
          </Table>


        </div>
      </Container>
    </>);
};




export default PatientProfile;