import React from 'react';
import './components/Style.css';
import Navbar from './components/Navbar';
import About from './components/about';
import Project from './components/Project';
import Contact from './components/Contact';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/about" component={<About/>} />
        <Route path="/project" component={<Project/>} />
        <Route path="/contact" component={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

