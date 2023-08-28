import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="success" expand="lg" data-bs-theme="dark">
      <Container className="py-2">
        <Navbar.Brand to="/">QTemu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Create Meetup</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
          </Nav>

          <Nav>
            <Button href="#link" variant="outline-light" className="px-5">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
