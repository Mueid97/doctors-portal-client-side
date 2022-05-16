import { Route, Routes } from 'react-router-dom';
import Appoinment from './pages/Appoinment/Appoinment';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Navbar from './share/Navbar/Navbar';
import Reviews from './pages/Reviews/Reviews';
import ContactUs from './pages/ContactUs/ContactUs';
import NotFound from './pages/NotFound/NotFound';
import LogIn from './Login/LogIn';
import Register from './Login/Register';
import RequireAuth from './Login/RequireAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path='/appoinment' element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>}>
        </Route>

        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
