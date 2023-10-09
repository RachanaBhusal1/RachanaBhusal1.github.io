
import './App.css';
import Navbar from './components/navbar/Navbar';
{ /*import Home from './pages/Home/home';
import Menu from './pages/menu/menu';
import AboutUs from './pages/aboutus/aboutus';
import Contact from './pages/contactus/contact';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound'; */}
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
