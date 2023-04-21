import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';



function HospitalCard({hospital}) {
  return (
    <><Nav.Link href="/afggt68afau" className='w-auto mx-2'>
    <Card style={{ width: '18rem', border: '1px solid black', display: 'flex'}}>
    <Card.Img variant="top" src="https://i.pinimg.com/originals/1c/76/ba/1c76ba6d2905c110bc2bcf2f91a0dfb6.jpg" />
      <Card.Body>
        <Card.Title>{hospital.hospital_name}</Card.Title>
        <Card.Text>
          {hospital.hospital_desc}
        </Card.Text>
        <footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </footer>
      </Card.Body>
    </Card>
    </Nav.Link></>
  )
}

export default HospitalCard