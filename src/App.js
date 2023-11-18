import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/About/About';
import Contact from './pages/contact/Contact';
import Project from './pages/project/Project';
import{BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/project" element={<Project/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


