import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "../components/Box.js";
import { useEffect, useState } from 'react';
import "./Home.css";

function Home() {
  const [response, setResponse] = useState("yee")
  useEffect(() => {
    axios.get('/login_header')
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="">Lowell CSF</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="officerDash">About</Nav.Link>
          <Nav.Link href="unapprovedMatches">Resources</Nav.Link>
          <Nav.Link href="tuteeLanding">Contact</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>

        </Nav>

      </Navbar>
      {Object.keys(response)}
      <Box height="300px" header="First Time Here?" buttonComp={
        <div>
          <Button variant="info" href="tuteeLanding">I'm a Tutee</Button>
          <Button href="tutorLanding">I'm a Tutor</Button>
        </div>
      } />
      <Box height="400px" header="Have an Account? Log In Here!" content=" " buttonComp={
        <div className="form">
           <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button type="submit">Submit</Button>

          </Form>
        </div>
      } />
    </div>
  );
}

export default Home;
