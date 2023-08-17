import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="Home" className='logoname'>INDIA DRIVE </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Modify">Modify/Cancel Booking</Nav.Link>
            <Nav.Link href="#pricing">Membership Registration</Nav.Link>
            <Nav.Link href="#pricing">About IndiaDrive</Nav.Link>
            <Nav.Link href="#pricing">Customer Care</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"  className='logoname'>Login</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
