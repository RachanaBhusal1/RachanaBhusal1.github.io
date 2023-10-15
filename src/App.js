import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './components/header/header';
import Project from './components/Project';
import Contact from './components/Contact';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

