import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import HeaderLogin from './Components/Login/HeaderLogin';
import Footer from './Components/Home/Footer';
import Profile from './Components/Home/Profile';

function App() {
  return (
    <BrowserRouter>
    <HeaderLogin/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/profile'element={<Profile/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
