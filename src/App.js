import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Route>
        <Route path="/about" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Router>
  );
}
export default App;


