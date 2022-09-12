import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Carts from './Carts';

const Profile = () => {


     const navigate = useNavigate()

    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/')
        }
    }, [])
 

  return (
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link 1</Nav.Link>
                  <Nav.Link href="#action2">Link 2</Nav.Link>
                  <Nav.Link href="#action2">Link 3</Nav.Link>
                  <Nav.Link href="#action2">Link 4</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

        <Carts/>

    </>
  )
}
export default Profile