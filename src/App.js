import React from 'react';
import './App.css';
import Home from './Home';
import Slide_1 from './slides/Slide_1';
import Slide_2 from './slides/Slide_2';
import Slide_3 from './slides/Slide_3';
import {HashRouter as Router, Route} from 'react-router-dom';

function App() {

  

  return (
    <div className="App">      
      <Router>
        <Route exact path = "/" component={Home}/>
        <Route path = "/1" component={Slide_1}/>
        <Route path = "/2" component={Slide_2}/>
        <Route path = "/3" component={Slide_3}/>
      </Router>
    </div>
    
    
  );
}

export default App;
