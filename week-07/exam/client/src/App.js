import React from 'react';
import './App.css';
import store from './store'
import OptionList from './components/OptionList'
import {Provider} from 'react-redux';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Vote from './components/Vote';

function App() {
  return (
    <Provider store = {store}>
      <div className = "App">
       <Header/>
       <Router>
          <main>
            <Route exact path="/" component={Vote}/>
            <Route path = "/optionlist" component={OptionList}/>
          </main>
        </Router>
      </div>
    </Provider>
  )
}

export default App;
