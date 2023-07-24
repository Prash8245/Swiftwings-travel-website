import Footer from './Components/Home/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/Home/NavBar';
import LocationPage from './Components/Location/LocationPage';
import Contact from './Components/Contact/contact';
import Register from './Components/Contact/Register';
import About from './Components/About/About';

// import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="" key="navHome" element={<Home/>} />
        <Route exact path="/Home" key="navHome" element={<Home/>} />
        <Route path="/Location" key="Location" element={<LocationPage/>} />
        <Route path="/Contact" key="Contact" element={<Contact/>} />
        <Route path="/About" key="About" element={<About/>} />
        <Route path="/Register" key="Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
