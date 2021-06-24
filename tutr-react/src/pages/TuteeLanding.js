
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TuteeLanding.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Box from "../components/Box.js";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import axios from 'axios';
const handleSubmit = (event) => {
    let formInput = {}
    let tempVal = "";
    console.log(event);
    let checkboxSelection = [];
    let previousCheckbox = null;
    for (let i = 0; i < event.target.length-1; i++) {
        const cell = event.target[i];
        tempVal = cell.value || cell.placeholder;


        if (cell.type == "checkbox" ) {
            if (cell.checked) {
                checkboxSelection.push(cell.nextSibling.textContent);
                if (cell.name != event.target[i+1].name) { //if last checkbox in a group
                    tempVal = checkboxSelection;
                    formInput[cell.name] = tempVal;
                    checkboxSelection = [];
                }
            }
            else {
                if (cell.name != event.target[i+1].name) { //if last checkbox in a group
                    tempVal = checkboxSelection;
                    formInput[cell.name] = tempVal;
                    checkboxSelection = [];
                }
                continue;

            }

        } else {
            formInput[cell.id] = tempVal;
        }
    }
    console.log(formInput);
    axios.post('/new_request', formInput)
            .then(response => console.log(response));
    debugger;

}
const form =
    <div className="form">
        <Form  onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name:</Form.Label>
                <Form.Control id="first_name" placeholder="Joe" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control id="last_name" placeholder="Smith" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Registry:</Form.Label>
                <Form.Control id="registry" placeholder="ex. 2206" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email:</Form.Label>
                <Form.Control id="email" type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Phone #:</Form.Label>
                <Form.Control id="phone" placeholder="415-273-4737"  />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Length of Match</Form.Label>
                <Form.Control id="match_length" as="select" size="sm" custom>
                    <option>One Time</option>
                    <option>Long Term</option>

                </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Department</Form.Label>
                <Form.Control id="department" as="select" size="sm" custom>
                    <option>English</option>
                    <option>Math</option>
                    <option>Science</option>
                    <option>VPA</option>
                    <option>Social Science</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Class</Form.Label>
                <Form.Control id="class" as="select" size="sm" custom>
                    <option>AP Chemistry</option>
                    <option>AP Literature</option>
                    <option>AP Calculus BC</option>
                    <option>Economics</option>
                    <option>AP Economics</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                <Form.Label>Teacher</Form.Label>
                <Form.Control id="teacher" as="select" size="sm" custom>
                    <option>Galang</option>
                    <option>Fong</option>
                    <option>Hoffman</option>
                    <option>Shimmon</option>
                    <option>Li</option>
                </Form.Control>
            </Form.Group>
            <div key={`inline-checkbox`} className="mb-3">
                Blocks Off{":  "}
                <Form.Check inline label="1" name="free_blocks" type={'checkbox'} id={`inline-checkbox-1`} />
                <Form.Check inline label="2" name="free_blocks" type={'checkbox'} id={`inline-checkbox-2`} />
                <Form.Check inline label="3" name="free_blocks" type={'checkbox'} id={`inline-checkbox-3`} />
                <Form.Check inline label="4" name="free_blocks" type={'checkbox'} id={`inline-checkbox-4`} />
                <Form.Check inline label="5" name="free_blocks" type={'checkbox'} id={`inline-checkbox-5`} />
                <Form.Check inline label="6" name="free_blocks" type={'checkbox'} id={`inline-checkbox-6`} />
                <Form.Check inline label="7" name="free_blocks" type={'checkbox'} id={`inline-checkbox-7`} />
                <Form.Check inline label="8" name="free_blocks" type={'checkbox'} id={`inline-checkbox-8`} />
                <Form.Check inline label="AS" name="free_blocks" type={'checkbox'} id={`inline-checkbox-9`} />

            </div>
            <div key={`inline-checkbox`} className="mb-3">
                Days Available{":  "}
                <Form.Check inline label="Mo" name="availability" type={'checkbox'} id={`inline-checkbox-11`} />
                <Form.Check inline label="Tu" name="availability" type={'checkbox'} id={`inline-checkbox-12`} />
                <Form.Check inline label="We" name="availability" type={'checkbox'} id={`inline-checkbox-13`} />
                <Form.Check inline label="Th" name="availability" type={'checkbox'} id={`inline-checkbox-14`} />
                <Form.Check inline label="Fr" name="availability" type={'checkbox'} id={`inline-checkbox-15`} />
                <Form.Check inline label="Sa" name="availability" type={'checkbox'} id={`inline-checkbox-16`} />
                <Form.Check inline label="Su" name="availability" type={'checkbox'} id={`inline-checkbox-17`} />
            </div>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Requests:</Form.Label>
                <Form.Control id="requests"  placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Questions/Concerns:</Form.Label>
                <Form.Control id="questions_concerns"  placeholder="" />
            </Form.Group>
            <div key={`inline-checkbox`} className="mb-3">
                Quality Agreement{":  "}
                <Form.Check inline label="I agree" name="agreement" type={'checkbox'} id={`inline-checkbox-1`} />

            </div>
            <Button type="submit">Submit Request</Button>
        </Form>
    </div>
    ;
function TuteeLanding() {


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
            <div style={{marginLeft: "30px"}}>
                <div className="landing-header">
                    For Tutees
                </div>
                <div style={{display: "flex"}}>
                    <div style={{width: "40%"}}>
                        <div className="landing-subheader"> Drop-In Tutoring</div>
                        <div className="landing-content">Drop-in tutoring will begin on January 11th 2021 and will take place Monday through Friday!
                        Tutors will be available in most academic subjects.
                        Click HERE to find the drop-in schedule, the subjects offered, and the links to the drop-in meetings.
                        </div>
                    </div>
                    <div style={{display:"block", justifyContent:"center"}}>
                        <Box height="1200px" width = "500px" header="Request a 1-on-1 Tutor" content={form}/>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default TuteeLanding;
