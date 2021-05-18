import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="">Lowell CSF</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="officerDash">About</Nav.Link>
          <Nav.Link href="unapprovedMatches">Resources</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
          <Nav.Link href="faq">FAQ</Nav.Link>

        </Nav>

      </Navbar>
    </div>
  );
}

export default Home;
