import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { setCounter } from './actionCreator';

function Setter(){
  const[value ,setValue] = useState('');
  const dispatch = useDispatch();

  return(
    <div>
      <h1>The Setter</h1>
      <input value = {value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => dispatch(setCounter(value))}>Set</button>
    </div>
  )
}
export default Setter;