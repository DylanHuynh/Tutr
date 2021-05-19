
import 'bootstrap/dist/css/bootstrap.min.css';
import "./UnapprovedMatches.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Box from "../components/Box.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const form =
    <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Registry:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Phone #:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Length of Match</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Department</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.SelectCustomSizeLg">
            <Form.Label>Subject</Form.Label>
            <Form.Control as="select" size="sm" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </Form.Control>
        </Form.Group>
        <div key={`inline-checkbox`} className="mb-3">
            Blocks Off
            <Form.Check inline label="1" name="group1" type={'checkbox'} id={`inline-checkbox-1`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
        </div>
        <div key={`inline-checkbox`} className="mb-3">
            Days Available
            <Form.Check inline label="1" name="group1" type={'checkbox'} id={`inline-checkbox-1`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
            <Form.Check inline label="2" name="group1" type={'checkbox'} id={`inline-checkbox-2`} />
        </div>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Requests:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Questions/Concerns:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <div key={`inline-checkbox`} className="mb-3">
            Quality Agreement
            <Form.Check inline label="1" name="group1" type={'checkbox'} id={`inline-checkbox-1`} />

        </div>
    </Form>;
function TuteesLanding() {


    return (
        <div className="App">
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="">Lowell CSF</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="officerDash">About</Nav.Link>
                    <Nav.Link href="unapprovedMatches">Resources</Nav.Link>
                    <Nav.Link href="tuteesLanding">Contact</Nav.Link>
                    <Nav.Link href="faq">FAQ</Nav.Link>

                </Nav>

            </Navbar>
            <div>
                For Tutees
            </div>
            <div>
                <div> Drop-In Tutoring</div>
                <div>Drop-in tutoring will begin on January 11th 2021 and will take place Monday through Friday!
                Tutors will be available in most academic subjects.
                Click HERE to find the drop-in schedule, the subjects offered, and the links to the drop-in meetings.
                </div>
            </div>
            <div>
                <Box height="1200px" header="Request a 1-on-1 Tutor" content={form} buttonComp={<Button>Submit Request</Button>} />
            </div>

        </div>

    );
}

export default TuteesLanding;
