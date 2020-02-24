import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Home exact path='/' component={Home} />
    <About path='/about' component={About} />
    <Contact path='/contact' component={Contact} />
  </div>
);

export default App;
// Could have also done this via the Route component, but chose this method for neatness