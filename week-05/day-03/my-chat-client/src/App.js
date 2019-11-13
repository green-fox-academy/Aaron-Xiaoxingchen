import React from 'react';
import './App.css';
import MessageList from './components/MessageList'
import MessageSender from './components/MessageSender'
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store = {store}>
    <div className="App">
      <MessageList />
      <MessageSender />
    </div>
  </Provider>
  );
}

export default App;
