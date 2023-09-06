import { useCallback, useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import MyButton from '../Atoms/MyButton';
import MyNavLink from '../Atoms/MyNavLink';

export default function MyNavbar() {
  const [clock, setClock] = useState(new Date());

  const tick = useCallback(() => {
    setClock(new Date());
  }, []);

  useEffect(() => {
    setInterval(() => tick(), 1000);
  }, [tick]);

  const menu = [
    {
      title: 'Create Meetup',
      link: '#create-meetup',
    },
    {
      title: 'Explore',
      link: '#explore',
    },
  ];

  return (
    <Navbar bg="success" expand="lg" data-bs-theme="dark">
      <Container className="py-2">
        <Navbar.Brand to="/">QTemu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((item, i) => (
              <MyNavLink key={i} href={item.link}>
                {item.title}
              </MyNavLink>
            ))}
          </Nav>

          <Nav>
            <Nav.Item className="text-light d-flex align-items-center px-3">
              <span>{clock.toLocaleTimeString()}</span>
            </Nav.Item>

            <MyButton variant="outline-light"> Login </MyButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
