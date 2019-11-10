import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import './styles/theme-superman.css';
import './styles/theme-batman.css';

import ThemeSwitcher from './components/ThemeSwitcher';
import Todo from './components/Todo';



function App() {
  return (
    <Router>
      <main>
        <Route exact path="/" component={Todo}/>
        <Route path ="/themes" component={ThemeSwitcher}/>
        <Route path="/themed/:name" component={Todo}/>
      </main>
    </Router>
  );
}


export default App;