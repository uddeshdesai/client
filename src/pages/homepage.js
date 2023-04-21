
import React, {useState, useEffect} from "react"; 
import { Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Appointments from './appointment';
  const Homepage = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
      const theUser = localStorage.getItem("user");
  
      if (theUser && !theUser.includes("undefined")) {
        setUser(JSON.parse(theUser));
      }
    }, []);
  return (
  <>
  
  <Container className="h-75"><Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://plus.unsplash.com/premium_photo-1664303139524-2f8523f4c327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://media.istockphoto.com/id/1351391194/photo/doctors-assisting-patients-at-the-hospital.jpg?b=1&s=170667a&w=0&k=20&c=2R2bwei9w5FkUXXL3CuQ9zB9j-7Rc93vd-SJBl4Icmg="
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=612x612&w=is&k=20&c=aYfliHXnpwFAk6Tt-zdBBUw9JlE5yMHd2WthZeA1Sv8="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Container>

    <Container>

      <Container fluid className="App py-2 overflow-hidden mt-5">
      <Row className="justify-content-center">Some text here</Row>
      <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              <Button variant="primary" onClick={Appointments}>Go somewhere</Button>
            </Card.Text>
            <footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </footer>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </footer>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </footer>
          </Card.Body>
        </Card><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </footer>
          </Card.Body>
        </Card><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </footer>
          </Card.Body>
        </Card>
      </Row>
      <Row>There's some text in here too</Row>
    </Container>
    </Container>
    

  </>
  );
     }   
     export default Homepage;