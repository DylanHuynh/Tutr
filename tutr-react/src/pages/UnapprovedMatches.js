import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import Modal from "../components/Modal.js";
import TableComp from "../components/TableComp.js";

const exampleData = {
    columnHeaders: ['Tutee Name', 'Availibility', 'Class', 'Teacher', 'Email', 'Phone #'],
    rowData: [{
        tuteeName: "Bob Smith",
        availability: ["1", "3", "AS"],
        class: "AP Bio",
        teacher: "Killpack",
        email: "bosmith@s.sfusd.edu",
        phone: "415-123-4567"
    },
    {
        tuteeName: "Bob Smith",
        availability: ["1", "3", "AS"],
        class: "AP Bio",
        teacher: "Killpack",
        email: "bosmith@s.sfusd.edu",
        phone: "415-123-4567"


    }]

};
function UnapprovedMatches() {


    return (
        <div className="App">
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/">Lowell CSF</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="officerDash">About</Nav.Link>
                        <Nav.Link href="resources">Resources</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <Nav.Link href="faq">FAQ</Nav.Link>

                    </Nav>
                </Navbar>
            </div>
            <div className="header">
                Unapproved Matches
            </div>
            <div className="table-container">

                <TableComp modalButtonType={"viewPotentialMatches"}/>
            </div>
        </div>

    );
}

export default UnapprovedMatches;
