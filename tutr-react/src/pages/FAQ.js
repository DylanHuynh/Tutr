import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FAQ.css';
import TableComp from "../components/TableComp.js";

const faqContent = [
    {
        label: "TUTEES",
        content: [{
            header: "How do I sign up for a 1-on-1 tutor?",
            body: "Click on the 'Tutees' tab. Then, click on the subject you need tutoring in and submit the Google Form."
        }]
    },
    {
        label: "TUTORS",
        content: [{
            header: "How do I sign up for a 1-on-1 tutor?",
            body: "Click on the 'Tutees' tab. Then, click on the subject you need tutoring in and submit the Google Form."
        },
        {
            header: "How do I sign up for a 1-on-1 tutor?",
            body: "Click on the 'Tutees' tab. Then, click on the subject you need tutoring in and submit the Google Form."
        }]
    }
]


function FAQ() {
    let faqHTML = [];
    for (const section of faqContent) {
        faqHTML.push(<div className="section-header">{section.label}</div>);
        for (const subsection of section.content) {
            faqHTML.push(
            <div>
                <div className="subsection-header">{subsection.header}</div>
                <div className="subsection-body">{subsection.body}</div>
            </div>);
        }
    }

    return (
        <div className="App">
            <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="">Lowell CSF</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="officerDash">About</Nav.Link>
                <Nav.Link href="unapprovedMatches">Resources</Nav.Link>
                <Nav.Link href="tuteeLanding">Contact</Nav.Link>
                <Nav.Link href="faq">FAQ</Nav.Link>

                </Nav>

            </Navbar>
        </div>
        <div class="faq-header">
            Frequently Asked Questions
        </div>
        <div>
            <div style={{marginLeft: "30px"}}>
                {faqHTML}
            </div>
        </div>
        </div>

    );
}

export default FAQ;
