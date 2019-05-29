import React from 'react';
import './App.css';
import Slide_1 from './slides/Slide_1';
import Slide_2 from './slides/Slide_2';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  

  return (
    <div className="App">      
      <Router basename={process.env.PUBLIC_URL}>  
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/1">Slide1</Link></li>
          <li><Link to="/2">Slide2</Link></li>
        </ul>
      </nav>        
        <Route path = "/1" component={Slide_1}/>
        <Route path = "/2" component={Slide_2}/>
      </Router>
    </div>
    
    
  );
}

export default App;
