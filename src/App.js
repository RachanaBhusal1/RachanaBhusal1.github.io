
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from '.components/pages/home/Home';
import Menu from '.components/pages/menu/Menu';
import AboutUs from '.components/pages/aboutus/Aboutus';
import Contactus from '.components/pages/contactus/Contactus';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/Menu" element={<Menu/>}/>
      <Route path ="/Aboutus" element={<AboutUs/>}/>
      <Route path ="/Contactus" element={<Contactus/>} />
  
      </Routes>
      </BrowserRouter>
  );
}

export default App;
