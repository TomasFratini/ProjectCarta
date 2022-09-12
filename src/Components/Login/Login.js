import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';

const Login = () => {

  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/;

    if (email==='' || password ==='') {
      swal (
        "Los campos no pueden estar vacios"
      )
        return
    }

    if (email !== '' && !regexEmail.test(email)) {
      swal (
        "Debes escribir una direccion de email valida"
      )
      return
    }

    if (email !== 'tomas.fratini@gmail.com' || password !== 'prueba') {
      swal (
        "Credenciales invalidas"
      )
      return
    }

    

    axios
    .post('https://jsonplaceholder.typicode.com/users', {email, password})
    .then(res => {
      swal("Ingresaste correctamente, bienvenido!")
      const tokenRecibido= res.data.id
      localStorage.setItem('token', tokenRecibido)
      navigate('/profile')
    })
  }
  
  return (
    <Form className='container col-md-5 mx-auto login' onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
  )
}
export default Login