import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from './CartWidget';

export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" className="container-fluid" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/" as={NavLink}>
            GabiShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/category/turismos" as={NavLink}>
              Turismos
            </Nav.Link>
            <Nav.Link to="/category/formula" as={NavLink}>
              Monoplasas
            </Nav.Link>
            <Nav.Link to="/category/circuito" as={NavLink}>
              Circuitos
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
