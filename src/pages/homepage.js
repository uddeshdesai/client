
import React, {useState, useEffect} from "react"; 
import { Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Container from "react-bootstrap/esm/Container";
import HospitalCard from "../components/hospitalcard";
  const Homepage = () => {
    const [HospitalDetails, setHospitalDetails] = useState({
      "message": "Hospital profile fetched successfully",
      "near_you": [
        {
          "_id": "6441bb601f2174059abafc4d",
          "email": "uddesh.desai@ritgoa.ac.in",
          "city": "Bicholim",
          "state": "Goa",
          "hospital_desc": "Best hospital of all",
          "hospital_latitude": null,
          "hospital_longitude": null,
          "hospital_name": "Ponda Govt. Hospital",
          "hospital_phone": "985487155212"
        },
        {
          "_id": "6441bb601f2174059abafc4d",
          "email": "uddesh.desai@ritgoa.ac.in",
          "city": "Bicholim",
          "state": "Goa",
          "hospital_desc": "Multispeciality hospital in the state",
          "hospital_latitude": null,
          "hospital_longitude": null,
          "hospital_name": "Ponda Govt. Hospital",
          "hospital_phone": "985487155212"
        },
        {
          "_id": "6441bb601f2174059abafc4d",
          "email": "uddesh.desai@ritgoa.ac.in",
          "city": "Bicholim",
          "state": "Goa",
          "hospital_desc": null,
          "hospital_latitude": null,
          "hospital_longitude": null,
          "hospital_name": "Ponda Govt. Hospital",
          "hospital_phone": "985487155212"
        }
      ],
      "all_hospitals": [
        {
          "_id": "6441bb601f2174059abafc4d",
          "email": "uddesh.desai@ritgoa.ac.in",
          "city": "Bicholim",
          "state": "Goa",
          "hospital_desc": null,
          "hospital_latitude": null,
          "hospital_longitude": null,
          "hospital_name": "Ponda Govt. Hospital",
          "hospital_phone": "985487155212"
        }
      ]
    })
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
          src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
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
      <Row className="justify-content-center">Choose and Book</Row>
      <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
        {HospitalDetails.near_you.map((hospital)=>(
          <>
          <HospitalCard hospital={hospital}/>
          </>
        ))}
      
      
      </Row>
    </Container>
    </Container>
    

  </>
  );
     }   
     export default Homepage;