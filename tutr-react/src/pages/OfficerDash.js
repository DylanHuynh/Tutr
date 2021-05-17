import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Box from "../components/Box.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./OfficerDash.css";

const coolButton = <div><button className="button">Yeetus</button></div>

function OfficerDash() {
  return (
    <div className="App">
        <div>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="home">Lowell CSF</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="officerDash">About</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>

            </Nav>
        </Navbar>
        </div>
        <div>
            Officer Dashboard
            <div className="container">
                <Box buttonComp={coolButton}/>
                <Box buttonComp={coolButton}/>
                <Box buttonComp={coolButton}/>

            </div>
        </div>
    </div>
  );
}

export default OfficerDash;
