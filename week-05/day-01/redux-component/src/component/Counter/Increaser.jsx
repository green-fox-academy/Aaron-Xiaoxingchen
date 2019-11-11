import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { increaseCounter } from './actionCreator';

function Increaser(){

  const counter = useSelector(state => state.calculator);
  const dispatch = useDispatch();

  return(
    <div>
      <h1>The Increaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </div>
  )
}
export default Increaser;