import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"

import TableComp from "../components/TableComp.js";

let modalData = {
    modalHeader: "Edit Info",
    modalContent: []
}
function TutorsData() {


    return (
        <div className="App">
            <div>
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Lowell CSF</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="officerDash">Dashboard</Nav.Link>
            <Nav.Link href="tutorsData">Tutors</Nav.Link>
            <Nav.Link href="tuteesData">Tutees</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
            </Nav>
        </Navbar>
        </div>

            <TableComp modalData={modalData} modalButtonType={"editInfo"}/>
        </div>

    );
}

export default TutorsData;
