import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from "../components/Box.js";
import { useEffect, useState } from 'react';


function Home() {
  const [response,setResponse] = useState("yee")
  useEffect(() => {
    axios.get('/login')
      .then(res => res.data)
      .then(data => setResponse(data))
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
          <Nav.Link href="tuteeLnding">Contact</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>

        </Nav>

      </Navbar>
      <Box header="First Time Here?" buttonComp={
      <div>
        <Button href="tuteeLanding">I'm a Tutee</Button>
        <Button href="tutorLanding">I'm a Tutor</Button>
      </div>
      }/>
      </div>
      );
}

export default Home;
