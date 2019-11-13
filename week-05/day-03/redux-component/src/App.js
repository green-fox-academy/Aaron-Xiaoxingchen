import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import {Increaser, Decreaser, Setter, Resetter,AsyncIncreaser} from './component/Counter'
import {InitialTag, AddTag, RemoveTag, AddTags } from './component/Tags'

function App() {
  return (
    <Provider store= {store}>
      <div className = 'counter'>
        <Increaser/>
        <Decreaser/>
        <Setter/>
        <Resetter/>
        <AsyncIncreaser />
      </div>
      <div className = 'tagCounter'>
        <InitialTag/>
        <AddTag/>
        {/* <RemoveTag/>
        <AddTags/> */}
      </div>
      
    </Provider>
  );
}

export default App;
