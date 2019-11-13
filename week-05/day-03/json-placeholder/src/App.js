import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import UserList from './components/UserList'
import store from './store.js'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1>JSON UserList</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
