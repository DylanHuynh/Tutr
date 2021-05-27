import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"

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
function TuteesData() {


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

            <TableComp modalButtonType={"editInfo"}/>
        </div>

    );
}

export default TuteesData;
