import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

const HeaderLogin = () => {
  

 let token =localStorage.getItem('token');
 let user =localStorage.getItem('name');
 const navigate = useNavigate();


 function cerrarSesion() {
    localStorage.clear();
  navigate('/login')
  }

  return (

    <Navbar>
      <Container>
        {
          token ?
          <>      
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/profile">Perfil</Nav.Link>
                      <Nav.Link href="#action2">Mis cartas</Nav.Link>
                      <Nav.Link href="#action2">Productos</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
          </>
          :
          <>
          <Navbar.Brand href="/">
          <Button variant="" href="/login">Login</Button>
          </Navbar.Brand>
          </>
        }
          {
            token ?
            <Nav  className="justify-content-end">
            <NavDropdown title= {user}>
            <NavDropdown.Item onClick={cerrarSesion}>Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            : null   
          }
      </Container>
    </Navbar>
  )
}
export default HeaderLogin