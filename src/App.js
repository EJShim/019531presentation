import React from 'react';
import './App.css';
import Slide_1 from './slides/Slide_1';
import Slide_2 from './slides/Slide_2';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App() {

  const homeComponent = (
    <div>home</div>
  );

  return (
    <div className="App">      
      <Router>
        <Route path = "/1" component={Slide_1}/>
        <Route path = "/2" component={Slide_2}/>
      </Router>
    </div>
    
    
  );
}

export default App;
