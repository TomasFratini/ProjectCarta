import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png'



const HeaderLogin = () => {
  
  console.log(localStorage.length);

const [token, setToken] = useState(false)

  useEffect(() => {
    const token = localStorage.length
    if (token > 0) {
        setToken(true)
    }
}, [])



  const cerrarSesion = () => {
    localStorage.removeItem('token')
  }



  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          { token ? ( <>
            <Navbar.Text>
              <Button onClick={cerrarSesion()} variant="" href="/">Logout</Button>
            </Navbar.Text>
          </>) : (
            <Navbar.Text>
              Signed in as: <Button variant="" href="/login">Login</Button>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default HeaderLogin