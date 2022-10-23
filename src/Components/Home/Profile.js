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
    }, [navigate])
 

  return (
    <>
      <Carts/>
    </>
  )
}
export default Profile