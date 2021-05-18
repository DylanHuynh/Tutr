import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import Box from "../components/Box.js";
import Modal  from "../components/Modal.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./OfficerDash.css";

const matchesToDoContent = <div><p>Number of Unapproved Matches: </p><br/><p>Oldest Unapproved Match: </p></div>
const allMatchesContent = <div><p>Total Current Matches</p></div>;
const modSheetContent = <div><p>Total Sheet Submitted This Cycle</p><br/><p>Unapproved Mod Sheets</p></div>
const requestContent = <div><p>Unreviewed Tutor Requests</p><br/><p>Unreviewed Tutee Requests</p></div>

function OfficerDash() {
  return (
    <div className="App">
        <div>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Lowell CSF</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="officerDash">Dashboard</Nav.Link>
            <Nav.Link href="tutorsData">Tutors</Nav.Link>
            <Nav.Link href="tuteesData">Tutees</Nav.Link>
            <Nav.Link href="faq">Applications</Nav.Link>
            </Nav>
        </Navbar>
        </div>
        <div>
            Officer Dashboard
            <div className="container">
                <Box header="Matches To-Do" content={matchesToDoContent} buttonComp={<Button href="unapprovedMatches">View Unapproved Matches</Button>}/>
                <Box header="All Matches" content={allMatchesContent} buttonComp={<Modal buttonType="viewAllMatches"/>}/>

                <Box header="Tutor/Tutee Requests" content={requestContent} buttonComp={<Modal buttonType="viewRequests"/>}/>
                <Box header="Mod Sheet Record" content={modSheetContent} buttonComp={<Modal buttonType="viewModSheets"/>}/>

            </div>
        </div>
    </div>
  );
}

export default OfficerDash;
