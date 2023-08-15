import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  CartWidget  from '../Cart/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Dogllar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Tienda</Nav.Link>
              <NavDropdown title="Desplegar" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Galeria
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CartWidget />
      </Navbar>
    </header>
  );
}

export default NavBar;