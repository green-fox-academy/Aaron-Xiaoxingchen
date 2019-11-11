import React from 'react';
import './App.css';
import {createStore} from 'redux';


function App() {

  const SET = 'SET';
  const INCREASE = 'INCREASE';
  const RESET= 'RESET';
  const DECREASE = 'DECREASE';
  const ADD_TAG = 'ADD_TAG';
  const REMOVE_TAG = 'REMOVE_TAG';
  const REMOVE_TAGS = 'REMOVE_TAGS'

  const initState = {
    counter: 0,
    tags: [],
  }
  
  const counter = (state = initState, action) =>{
    let amount = 1;
    switch(action.type){
      case SET:
        return {...state, counter: action.amount};
      case INCREASE:
        if(action.amount){
          amount = action.amount; 
        }
        return {...state, counter: state.counter + amount}
      case RESET:
        return {...state, counter:0};
      case DECREASE:
        if(action.amount){
          amount = action.amount;
        }
        return {...state, counter: state.counter - amount}
      case ADD_TAG:
        if(!state.tags.find(item => item === action.tag)){
          return {...state, tags: [...state.tags, action.tag]}
        }
        break;
      case REMOVE_TAG:
        if(state.tags.find(item => item === action.tag)){
          return {...state, tags: state.tags.filter(item => item !== action.tag)}
        }
        break;
      case REMOVE_TAGS:
        return{...state, tags:[]}
      default:
        return state
        
    }
  }


  const store = createStore(counter);
  store.subscribe(() => console.log(store.getState()))

  store.dispatch({type: 'SET', amount: 6});
  store.dispatch({type: 'INCREASE'});
  store.dispatch({type: 'INCREASE', amount: 2});
  store.dispatch({type: 'RESET'});
  store.dispatch({type: 'INCREASE'});
  store.dispatch({type: 'DECREASE', amount: 4});
  store.dispatch({type: 'ADD_TAG', tag: 'blue'});
  store.dispatch({type: 'ADD_TAG', tag: 'bold'});
  store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
  store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
  store.dispatch({type: 'ADD_TAG', tag: 'bold'});
  store.dispatch({type: 'REMOVE_TAGS'});

  return (
    <>
     
    </>
  );
}

export default App;
