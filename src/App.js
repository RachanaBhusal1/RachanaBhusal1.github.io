
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import AboutUs from './pages/aboutus/Aboutus';
import Contact from './pages/contactus/Contactus';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/menu" element={<Menu/>}/>
      <Route path ="/aboutus" element={<AboutUs/>}/>
      <Route path ="/contact" element={<Contact/>} />
      <Route path ="/*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
