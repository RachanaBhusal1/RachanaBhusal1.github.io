import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/About/About';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/contact" element={<About/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;


